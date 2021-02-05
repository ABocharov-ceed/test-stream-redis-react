import React, { useState, useEffect } from 'react';

import {Search} from '../../environment/icons';

import {
  Filter,
  FilterBlock
} from './FilterField.style';

export const FilterField = ({
	onChange = () => {},
	defaultValue = '',
}) => {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		onChange(value);
	}, [value]);

	const handleChange = (e) => setValue(e.target.value);

	return (
		<FilterBlock data-testid="filter-block">
      <Search />
      
			<Filter
				onChange={handleChange}
				placeholder={'Type to search...'}
				value={value}
				type='text'
			/>
		</FilterBlock>
	);
};