---
to: src/components/<%= name %>/<%= name %>.test.tsx
---
import { render, screen } from '@testing-library/react';
import <%= name %> from './<%= name %>';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

it('render <%= name %>', () => {
  render(<ThemeProvider theme={theme}><<%= name %> /></ThemeProvider>);
});