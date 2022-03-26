import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Badge from './Badge';

it('render Badge', () => {
  render( <ThemeProvider theme={theme}><Badge /></ThemeProvider>);
});