import { test, expect } from 'bun:test';
import { screen, render } from '@testing-library/react';
import { MyComponent } from './myComponent';

test('Can use Testing Library', () => {
  render(<MyComponent />);
  const myComponent = screen.getByTestId('my-component');
  expect(myComponent).toBeInTheDocument();
})
