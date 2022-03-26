import { render, screen } from '@testing-library/react';
import MessageCard from './MessageCard';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

it('render MessageCard', () => {
  render(<ThemeProvider theme={theme}><MessageCard avatarSrc={''} children={undefined} /></ThemeProvider>);
});