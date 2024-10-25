import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from '@/components/form';

test('renders the Form text', () => {
  render(<Form />);
  const textElement = screen.getByText(/Email Address/i);
  expect(textElement).toBeInTheDocument();
});
