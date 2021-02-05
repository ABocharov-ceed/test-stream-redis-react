import { render } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

test('should render ToggleButton', () => {
  const { getByTestId } = render(<ToggleButton />);
  expect(getByTestId('toggle-button-block')).toBeInTheDocument();
});

test('should render right names', () => {
  const { getByText } = render(<ToggleButton enabledText="Live" disabledText="Pause"/>);
  expect(getByText('Live')).toBeInTheDocument();
  expect(getByText('Pause')).toBeInTheDocument();
});

test('should change active button', () => {
  const { getByText } = render(<ToggleButton enabledText="Live" disabledText="Pause"/>);
  expect(getByText('Live')).toBeInTheDocument();
  expect(getByText('Pause')).toBeInTheDocument();
  getByText('Live').click();
  expect(getByText('Live')).toHaveStyle('color: #3875cc');
  expect(getByText('Pause')).toHaveStyle('color: #4e6172');
  getByText('Pause').click();
  expect(getByText('Live')).toHaveStyle('color: #4e6172');
  expect(getByText('Pause')).toHaveStyle('color: #3875cc');
});
