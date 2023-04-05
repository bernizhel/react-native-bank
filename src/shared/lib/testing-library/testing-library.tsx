import type { FC, ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react-native';

import { render } from '@testing-library/react-native';
import { ThemeConsumer, ThemeProvider } from 'styled-components/native';
import { AppThemeProvider, darkTheme } from '@theme';

const AllTheProviders: FC = ({ children }) => {
  return (
    <AppThemeProvider>
      <ThemeConsumer>
        {(value) => (
          <ThemeProvider theme={value ?? darkTheme}>{children}</ThemeProvider>
        )}
      </ThemeConsumer>
    </AppThemeProvider>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });
