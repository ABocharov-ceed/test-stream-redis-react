import React, { useState } from 'react';
import {
  ToggleButtonBlock,
  OnButton,
  OffButton
} from './ToggleButton.style';

export const ToggleButton = ({
	onClick = () => {},
	enabledText = '',
	disabledText = '',
	activeDefault = false,
}) => {
	const [OnButtonActive, setOnButtonActive] = useState(activeDefault);

	const handleClick = () => {
		onClick(!OnButtonActive);
		setOnButtonActive(!OnButtonActive);
  };
  
	return (
		<ToggleButtonBlock data-testid="toggle-button-block">
			<OnButton active={OnButtonActive} onClick={handleClick}>{enabledText}</OnButton>
			<OffButton active={!OnButtonActive} onClick={handleClick}>{disabledText}</OffButton>
		</ToggleButtonBlock>
	);
};
