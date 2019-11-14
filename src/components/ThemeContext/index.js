import React from 'react';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    color: 'black'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    color: '#23ED34'
  },
};

export const ThemeContext = React.createContext(themes.dark);
