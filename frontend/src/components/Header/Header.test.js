import { render } from '@testing-library/react';
import { Header } from './Header';

test('should render Header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('header-block')).toBeInTheDocument();
});
