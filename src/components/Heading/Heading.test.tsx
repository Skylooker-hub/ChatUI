import { render, screen } from '@testing-library/react';
import Heading from './Heading';

it('render Heading', () => {
  render(<Heading level={1}>666</Heading>);
});