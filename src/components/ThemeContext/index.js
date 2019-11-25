import React from 'react';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const collapsedSize = {
  short: 'short',
  full: 'full',
};

export const SizeContext = React.createContext(collapsedSize.short);
