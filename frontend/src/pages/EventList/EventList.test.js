import { render } from '@testing-library/react';
import { EventList } from './EventList';

test('should render EventList', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId('page-container')).toBeInTheDocument();
});

test('should render Header', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId('header-block')).toBeInTheDocument();
});

test('should render ToggleButton', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId('toggle-button-block')).toBeInTheDocument();
});

test('should render FilterField', () => {
  const { getByTestId } = render(<EventList />);
  expect(getByTestId('filter-block')).toBeInTheDocument();
});
