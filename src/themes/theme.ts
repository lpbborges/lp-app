import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#000',
    background: '#121212',
    accent: '#6f4fa2',
  },
};

export default theme;
