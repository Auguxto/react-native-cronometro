import {} from 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {} // extends the global DefaultTheme with our ThemeType.
}
