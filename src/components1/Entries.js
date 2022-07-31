import React, { useEffect, useState } from 'react';
import '../styles/entries.css';
import WeighIn from './WeighIn';

const Entries = ({
	weighInType,
	currentWeight,
	setCurrentWeight,
	changeInWeight,
	setChangeInWeight,
}) => {
	const [lastWeight, setLastWeight] = useState(0);

	let currentChange = 0;

	useEffect(() => {
		document.getElementsByClassName(
			'activeEntry'
		)[0].children[0].children[1].value = weighInType;
	}, [weighInType]);

	const getNewWeight = () => {
		return Number(
			document.querySelector('.activeEntry>.weighIn-weight').children[1].value
		);
	};

	const toggleActiveStatus = (e) => {
		// e.target.parentElement.classList =
		if (e.target.parentElement.classList[1] === 'activeEntry') {
			e.target.parentElement.classList = 'entry';
		} else if (document.getElementsByClassName('activeEntry').length === 0) {
			e.target.parentElement.classList = 'entry activeEntry';
		} else {
			return;
		}
	};

	const toggleSetWeightEditButton = (e) => {
		const buttonText = e.target.innerText;
		e.target.innerText = buttonText === 'Set Weight' ? 'Edit' : 'Set Weight';
		toggleActiveStatus(e);
	};

	const handleSetWeightClick = (e) => {
		e.preventDefault();
		toggleSetWeightEditButton(e);
		const oldWeight = currentWeight;
		const newWeight = getNewWeight();
		const newChange = newWeight - oldWeight;
		if (oldWeight !== 0) {
			setChangeInWeight(newChange);
		}
		setCurrentWeight(newWeight);
	};

	return (
		<div id='weighIn-Section'>
			<div className='entry activeEntry'>
				<div className='weighIn-type'>
					<label>Type</label>
					<input type='text' name='weighIn-type' disabled={true} value='' />
				</div>
				<div className='waterInOz hidden'>
					<label>Ounces</label>
					<input type='number' name='waterInOz' />
				</div>
				<div className='weighIn-ScaleWeight'>
					<label>Scale Weight</label>
					<input type='number' name='weighIn-weight' />
				</div>
				<div className='weighIn-adjusted'>
					<label>Adjusted Weight</label>
					<input type='number' name='weighIn-adjusted' />
				</div>
				<div className='weighIn-change'>
					<label>Change</label>
					<input value={currentChange} />
				</div>
				<button onClick={handleSetWeightClick}>Set Weight</button>
			</div>
			<WeighIn
				weighInType={weighInType}
				currentWeight={currentWeight}
				setCurrentWeight={setCurrentWeight}
				changeInWeight={changeInWeight}
				setChangeInWeight={setChangeInWeight}
				handleSetWeightClick={handleSetWeightClick}
			/>
			<button>Click</button>
		</div>
	);
};

export default Entries;
