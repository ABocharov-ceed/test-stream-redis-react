import { useState, useEffect, useCallback, useRef } from 'react';
import io from 'socket.io-client';

const useEventStream = () => {
	const [state, setState] = useState({
		isStreamActive: true,
		filterValue: '',
		filteredEvents: [],
	});
	const [error, setError] = useState(null);

	const eventsRef = useRef([]);
	const socketRef = useRef({});

	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}), []);

	const activateSocket = useCallback(() => {
		socketRef.current = io(process.env.REACT_APP_SOCKET_ENDPOINT || 'http://localhost:8080/');
		
		socketRef.current.on('events', (events) => {
			const storedEvents = Array.isArray(eventsRef.current) ? eventsRef.current : [];
			eventsRef.current = [...events, ...storedEvents];
			setError(null);
			forceUpdate();
		});

		socketRef.current.on('connect_error', () => {
			setError('Server unavailable');
		});

		socketRef.current.on('error', () => {
			setError('Server error');
		});
	}, [forceUpdate]);

	const closeSocket = useCallback(() => {
		socketRef.current?.close();
	}, []);

	useEffect(() => {
		const isActive = state.isStreamActive;

		if (isActive) {
			activateSocket();
		} else {
			closeSocket();
		}

		return () => closeSocket();
	}, [activateSocket, closeSocket, state.isStreamActive]);

	const filteredEvents = useCallback(() => 
		eventsRef.current.filter(event => {
			const lowerFilterValue = state.filterValue.toLowerCase()
			 return (
				event.properties?.path?.toLowerCase().includes(lowerFilterValue) ||
						event.traits?.email?.toLowerCase().includes(lowerFilterValue) ||
						event.type.toLowerCase().includes(lowerFilterValue) ||
						event.event?.toLowerCase().includes(lowerFilterValue) ||
						event.receivedAt.toLowerCase().includes(lowerFilterValue)
			 )
		}) , [state.filterValue, eventsRef]);

	const toggleStream = (isActive) => {
		setState({
			...state,
			isStreamActive: isActive,
		});
	};

	const updateFilter = (filterValue) => {
		setState({
			...state,
			filterValue,
		});
	};

	return {
		error,
		isStreamActive: state.isStreamActive,
		filteredEvents: filteredEvents(),
		toggleStream,
		updateFilter,
	};
};

export default useEventStream;
