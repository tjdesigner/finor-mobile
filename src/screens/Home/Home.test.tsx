import * as React from 'react';
import { fireEvent, render } from "@testing-library/react-native"

import { Home } from './Home';
import { FabButton } from './HomeStyles';
import { withTheme } from '../../utils/withTheme';
import { testId } from './../../../e2e/testIds'

const { fabButtonAdd, fabButtonProfile } = testId.Home

jest.mock("@react-navigation/native", () => ({
    createNavigatorFactory: jest.fn(),
    useFocusEffect: jest.fn(),
}))

jest.mock("@react-navigation/native-stack", () => ({
    createStackNavigator: jest.fn(),
}))

interface Navigation {
    navigate(destination: string): void;
}

interface RegistrationProps {
    navigation: Navigation;
}

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ navigate: jest.fn() }),
    useRoute: () => ({} as any),
}));

describe('Home', () => {
    const onPress = jest.fn()

    it('should render page with clinicalAnalysis and pathological tabs enabled', () => {
        const testRenderer = render(withTheme(<Home navigation={{} as any} route={{} as any} />))
        expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it('Test click event', () => {
        const { getByTestId } = render(withTheme(<FabButton testID={fabButtonAdd} onPress={onPress} />))
        fireEvent.press(getByTestId(fabButtonAdd));
        expect(onPress).toBeCalledTimes(1)
    });
})
