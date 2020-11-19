import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativePaper {
    interface ThemeColors {
      success: string;
      failure: string;
    }
  }
}

const defaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#000',
    accent: '#6f4fa2',
    background: '#121212',
    surface: '#ffffff73',
    text: '#fff',
    placeholder: '#ffffff40',
    success: '#0f0',
    failure: '#FF7474',
  },
};

export default defaultTheme;
