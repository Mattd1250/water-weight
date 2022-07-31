import React, { useState } from 'react';

const EntryInput = ({ addWeighIn }) => {
	const [entryTypeSelected, setEntryTypeSelected] = useState('');

	const handleEntryTypeChange = () => {
		const typeSelected = document.querySelector('#entryType');
		setEntryTypeSelected(typeSelected);
	};

	const handleWeighInSubmitClicked = () => {
		const weighInValues = document.querySelectorAll('.weighInValues');
		console.log(weighInValues);
		addWeighIn(entryTypeSelected, weighInValues);
		weighInValues[1].value = 'Before #1';
		weighInValues[2].value = 0;
	};

	document.addEventListener('keypress', (e) => {
		if (e.key === 'Enter' && e.target.id === 'newEntry') {
			e.preventDefault();
			document.querySelector('#entrySubmitButton').click();
		}
	});

	const handleNewEntryClick = () => {
		const entryTypeField = document.querySelector('#entryType');
		entryTypeField.value = 'Before #1';
		const clothingTypeField = document.querySelector('#clothingType');

		addWeighIn(entryTypeField.value, clothingTypeField.value);
	};

	return (
		<>
			<label htmlFor='entryType'>Type of Entry </label>
			<select id='entryType' name='newEntry' onChange={handleEntryTypeChange}>
				<option id='weighIn'>WeighIn</option>
				<option id='water'>Water</option>
				<option id='food'>Food</option>
			</select>
			<select className='weighInValues' name='weighInType'>
				<option id='pre1'>Before #1</option>
				<option id='post1'>After #1</option>
				<option id='pre2'>Before #2</option>
				<option id='post2'>After #2</option>
			</select>
			<select className='weighInValues' name='clothing'>
				<option id='naked'>Naked</option>
				<option id='workClothes'>Work Clothes</option>
				<option id='gymClothes'>Gym Clothes</option>
				<option id='loungeClothes'>Lounge Clothes</option>
			</select>
			<label htmlFor='weight'>Weight: </label>
			<input
				className='weighInValues'
				type='number'
				name='weight'
				defaultValue={0}
			/>
			<button
				id='entrySubmitButton'
				type='submit'
				onClick={handleWeighInSubmitClicked}
			>
				Submit
			</button>
		</>
	);
};

export default EntryInput;
