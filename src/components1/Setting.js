import React, { useState } from 'react';
import '../styles/settings.css';

const Setting = ({ currentWeight, changeInWeight }) => {
	const [waterCup, setWaterCup] = useState(0);
	const [workClothes, setWorkClothes] = useState(0);
	const [drinkCup, setDrinkCup] = useState(0);
	const [foodContainer, setFoodContainer] = useState(0);

	const settingWorkClothes = (e) => {
		e.preventDefault();
		setWorkClothes(Number(e.target.form[0].value));
		console.log(workClothes);
	};

	const settingWaterCup = (e) => {
		e.preventDefault();
		setWaterCup(Number(e.target.form[0].value));
		console.log(waterCup);
	};

	const settingDrinkCup = (e) => {
		e.preventDefault();
		setDrinkCup(Number(e.target.form[0].value));
		console.log(drinkCup);
	};

	const settingFoodContainer = (e) => {
		e.preventDefault();
		setFoodContainer(Number(e.target.form[0].value));
		console.log(foodContainer);
	};

	const toggleDisable = (e) => {
		e.preventDefault();
		e.target.parentElement[0].disabled = e.target.parentElement[0].disabled
			? false
			: true;
		e.target.innerText = e.target.innerText === 'Set' ? 'Unset' : 'Set';
		console.log(e);
	};

	return (
		<>
			<h2>Setting</h2>
			<div>Current Weight: {currentWeight}</div>
			<div>Change in Weight: {changeInWeight}</div>
			<div id='constants'>
				<h3>Constants</h3>
				<div className='const'>
					<form>
						<label htmlFor='Work Clothes'>Work Clothes</label>
						<input
							type='number'
							name='Work Clothes'
							defaultValue={0}
							onChange={settingWorkClothes}
							disabled={false}
						/>
						<button onClick={toggleDisable}>Set</button>
					</form>
				</div>

				<div className='const'>
					<form>
						<label htmlFor='waterCup'>Water Container</label>
						<input
							type='number'
							name='waterCup'
							defaultValue={0}
							onChange={settingWaterCup}
							disabled={false}
						/>
						<button onClick={toggleDisable}>Set</button>
					</form>
				</div>

				<div className='const'>
					<form>
						<label htmlFor='drinkCup'>Drink Container</label>
						<input
							type='number'
							name='drinkCup'
							defaultValue={0}
							onChange={settingDrinkCup}
							disabled={false}
						/>
						<button onClick={toggleDisable}>Set</button>
					</form>
				</div>

				<div className='const'>
					<form>
						<label htmlFor='foodContainer'>Food Container</label>
						<input
							type='number'
							name='foodContainer'
							defaultValue={0}
							onChange={settingFoodContainer}
							disabled={false}
						/>
						<button onClick={toggleDisable}>Set</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Setting;
