import { render } from '@testing-library/react';
import { EventTypes } from '../../constants';
import { EventItem } from './EventItem';

const testProps = {
	event: {
		type: EventTypes.identify,
		traits: {
			email: 'test@test.com',
		},
		receivedAt: '2021-12-02 03:00:00',
	},
};

test('should render EventItem', () => {
	const { getByTestId } = render(
		<EventItem {...testProps} />
	);
	expect(getByTestId('item-card')).toBeInTheDocument();
});

test('render event type', () => {
	const { getByText } = render(
		<EventItem {...testProps} />
	);
	expect(getByText(EventTypes.identify)).toBeInTheDocument();
});

test('render event date', () => {
	const { getByText } = render(
		<EventItem {...testProps} />
	);
	expect(getByText('2021/12/02 03:00:00')).toBeInTheDocument();
});

test('render event email', () => {
	const { getByText } = render(
		<EventItem {...testProps} />
	);
	expect(getByText('test@test.com')).toBeInTheDocument();
});
