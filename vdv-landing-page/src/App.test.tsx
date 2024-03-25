import React from 'react';
import { render, screen } from '@testing-library/react';
import VDV from './App';

test('renders learn react link', () => {
  render(<VDV />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
