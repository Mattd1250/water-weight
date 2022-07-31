import React from 'react';

const WeighIn = ({
	weighInType,
	currentWeight,
	setCurrentWeight,
	changeInWeight,
	setChangeInWeight,
	handleSetWeightClick,
}) => {
	{
		if (weighInType === 'No Clothes') {
			return (
				<div className='entry activeEntry'>
					<div className='weighIn-clothing'>
						<label>No Clothing</label>
						<input
							type='text'
							name='weighIn-clothing'
							disabled={true}
							value=''
						/>
					</div>
					<div className='weighIn-weight'>
						<label>Scale Weight</label>
						<input type='number' name='weighIn-weight' />
					</div>
					<div className='weighIn-change'>
						<label>Change</label>
						<input value={changeInWeight} name='' disabled={true} />
					</div>

					<button onClick={handleSetWeightClick}>Set Weight</button>
				</div>
			);
		} else {
			return (
				<div className='entry activeEntry'>
					<div className='weighIn-clothing'>
						<label>Clothing</label>
						<input
							type='text'
							name='weighIn-clothing'
							disabled={true}
							value=''
						/>
					</div>
					<div className='weighIn-bathroomBreak'>
						<label>Bathroom Break</label>
						<input
							type='text'
							name='weighIn-bathroomBreak'
							disabled={true}
							value=''
						/>
					</div>
					<div className='waterInOz hidden'>
						<label>Ounces</label>
						<input type='number' name='waterInOz' />
					</div>
					<div className='weighIn-weight'>
						<label>Scale Weight</label>
						<input type='number' name='weighIn-weight' />
					</div>
					<div className='weighIn-adjusted'>
						<label>Adjusted Weight</label>
						<input
							type='number'
							name='weighIn-adjusted'
							disabled={true}
							value=''
						/>
					</div>
					<div className='weighIn-change'>
						<label>Change</label>
						<input defaultValue={0} name='' disabled={true} />
					</div>
					<button onClick={handleSetWeightClick}>Set Weight</button>
				</div>
			);
		}
	}
};

export default WeighIn;
