import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNativePaper {
    interface ThemeColors {
      success: string;
      failure: string;
      subText: string;
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
    accent: '#6F4FA2',
    background: '#121212',
    surface: '#FFFFFF73',
    text: '#fff',
    subText: '#FFFFFFB3',
    placeholder: '#FFFFFF40',
    success: '#0F0',
    failure: '#FF7474',
  },
};

export default defaultTheme;
