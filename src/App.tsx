import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';

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
      <Routes />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}

export default App