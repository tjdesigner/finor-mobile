import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView } from 'react-native';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Provider } from 'react-redux'
import { store } from './app/store/store';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }} />
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar style="inverted" backgroundColor={Platform.OS === 'android' ? theme.colors.primary : 'transparent'} />
    </ThemeProvider>
  );
}

export default App