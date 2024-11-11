import 'styled-components';
import theme from '../global/theme';

type ThemeProps = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme  extends ThemeProps {}
}
