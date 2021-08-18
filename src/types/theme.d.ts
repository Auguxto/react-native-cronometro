interface IUseTheme {
  theme: ITheme;
  themeLoaded: boolean;
  toggleTheme: () => void;
}

interface IThemes {
  light: ITheme;
  dark: ITheme;
}

interface ITheme {
  name: string;
  id: string;
  colors: {
    background: string;
    buttonBackground: string;
    text: string;
    buttonText: string;
    statusBar: {
      background: string;
      content: StatusBarStyle;
    };
    switch: {
      background: string;
      circle: string;
    };
  };
}
