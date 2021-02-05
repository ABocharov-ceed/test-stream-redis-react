import { render, fireEvent } from '@testing-library/react';
import { FilterField } from './FilterField';

test('should render FilterInput', () => {
  const { getByTestId } = render(<FilterField />);
  expect(getByTestId('filter-block')).toBeInTheDocument();
});

test('should filter items from list', () => {
  const { getByTestId } = render(<FilterField />);
  expect(getByTestId('filter-block')).toBeInTheDocument();
  const inputField = getByTestId('filter-block').lastElementChild;
  expect(inputField.value).toBe('');
  fireEvent.change(inputField, {target: {value: '/'}});
  expect(inputField.value).toBe('/');
})
