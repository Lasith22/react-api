// Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct label and handles click event', () => {
  const handleClick = jest.fn(); // Mock function to track clicks

  // Render the button with the label 'Click Me'
  render(<Button label="Click Me" onClick={handleClick} />);

  // Query the button by its label text
  const buttonElement = screen.getByText(/click me/i);

  // Ensure the button is rendered in the DOM
  expect(buttonElement).toBeInTheDocument();

  // Simulate a click event on the button
  fireEvent.click(buttonElement);

  // Verify that the click handler was called exactly once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
