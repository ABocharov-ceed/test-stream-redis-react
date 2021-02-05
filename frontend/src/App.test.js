import { render } from '@testing-library/react';
import App from './App';

test('should render EventList', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('page-container')).toBeInTheDocument();
});
