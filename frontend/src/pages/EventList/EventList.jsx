import useEventStream from '../../hooks/useEventStream';
import {ErrorMessage, Header, ToggleButton, FilterField, EventItem} from '../../components';

import {PageContainer} from './EventList.style';

export const EventList = () => {
	const { error, isStreamActive, toggleStream, updateFilter, filteredEvents } = useEventStream();
	return (
		<PageContainer data-testid="page-container">
			<Header>
				<ToggleButton
					enabledText={'Live'}
					disabledText={'Pause'}
					activeDefault={isStreamActive}
					onClick={toggleStream}
				/>
				<FilterField onChange={updateFilter} />
			</Header>
			{error && <ErrorMessage error={error} />}

			{filteredEvents.length > 0 && filteredEvents.map((event, i) => (
				<EventItem key={`${i}-${event.messageId}`} event={event} />
			))}
		</PageContainer>
	);
};