import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

const myTheme = {
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#CD5C5C',
  },
};

export {myTheme};
