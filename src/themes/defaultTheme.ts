import {
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';
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

interface Font {
  fontFamily: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

interface Fonts {
  regular: Font;
  medium: Font;
  light: Font;
  thin: Font;
}

interface FontConfig {
  default: Fonts | undefined;
}

const fontConfig: FontConfig = {
  default: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: '700',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: '400',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: '300',
    },
  },
};

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
  fonts: configureFonts(fontConfig),
};

export default defaultTheme;
