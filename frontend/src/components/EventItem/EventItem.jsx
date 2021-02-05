import React from 'react';
import { format } from 'date-fns';
import {CheckMark} from '../../environment/icons';
import { EventTypes } from '../../constants';
import {
  ItemCard,
  Icon,
  Label,
  Message,
  ItemDate
} from './EventItem.style';

const getContentByType = (event) => {
	switch (event.type) {
		case EventTypes.identify:
			return event.traits.email;
		case EventTypes.page:
			return event.properties.path;
		case EventTypes.track:
			return event.event;
		default:
			return 'No content';
	}
};

export const EventItem = ({event = {}}) => {
  return (
    <ItemCard data-testid="item-card">
      <Icon>
        <CheckMark />
      </Icon>
      <Label>{event.type}</Label>
      <Message>{getContentByType(event)}</Message>
      <ItemDate>{format(new Date(event.receivedAt), 'yyyy/MM/dd kk:mm:ss')}</ItemDate>
    </ItemCard>
  )
}