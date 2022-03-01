import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

it('renders welcome message', () => {
  render(<Avatar src='' />);
  expect(screen.getByRole('img')).toBeInTheDocument();
});