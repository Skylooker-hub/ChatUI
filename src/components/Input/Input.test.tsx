import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Input from './Input';

it('render Input', () => {
  render(<ThemeProvider theme={theme}><Input /></ThemeProvider>);
});