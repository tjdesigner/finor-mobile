
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Provider } from 'react-redux'
import { store } from './app/store/store';
import 'react-native-get-random-values';



function App() {


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.colors.primary }} />
      <Provider store={store}>
        <Routes />
      </Provider>
      <StatusBar barStyle='default' backgroundColor={Platform.OS === 'android' ? theme.colors.primary : 'transparent'} />
    </ThemeProvider>
  );
}

export default App