import { render } from '@testing-library/react';
import { ErrorMessage } from './Error';

test('should render ErrorMessage', () => {
  const { getByTestId } = render(<ErrorMessage />);
  expect(getByTestId('error-message')).toBeInTheDocument();
});

test('should render correct error message', () => {
  const { getByText } = render(<ErrorMessage error={'error 1'} />);
  expect(getByText('error 1')).toBeInTheDocument();
});
