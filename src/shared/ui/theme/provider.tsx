import type { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './dark';

type TAppThemeProviderProps = {
  children: ReactNode;
};

export const AppThemeProvider = ({ children }: TAppThemeProviderProps) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
