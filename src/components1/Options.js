import React from 'react';
import '../styles/options.css';

const Options = ({ getButtonName, setWeighInType }) => {
	const addTypeToEntry = (e) => {
		e.preventDefault();
		const buttonName = getButtonName(e);
		setWeighInType(buttonName);
	};

	const toggleHidden = (e) => {
		e.preventDefault();
		const buttonName = getButtonName(e);
		document.getElementById(buttonName).classList.toggle('hidden');
	};

	return (
		<div id='weigh-in'>
			<div className='col3'>
				<h3>
					Body Weight{' '}
					<span className='inline-block-container open-list'>
						<button name='bodyWeight' onClick={toggleHidden}>
							+
						</button>
					</span>
				</h3>

				<div id='bodyWeight' className='weights hidden'>
					<button name='No Clothes' onClick={addTypeToEntry}>
						No Clothes
					</button>
					<button name='Work Clothes' onClick={addTypeToEntry}>
						Work Clothes
					</button>
					<button name='Lounge Clothes' onClick={addTypeToEntry}>
						Lounge Clothes
					</button>
				</div>
			</div>

			<div className='col3'>
				<h3>
					Bathroom Break
					<span className='inline-block-container open-list'>
						<button name='bathroomBreak' onClick={toggleHidden}>
							+
						</button>
					</span>
				</h3>

				<div id='bathroomBreak' className='weights hidden'>
					<button name='After 1' onClick={addTypeToEntry}>
						After 1
					</button>
					<button name='After 2' onClick={addTypeToEntry}>
						After 2
					</button>
				</div>
			</div>

			<div className='col3'>
				<h3>
					Consumption
					<span className='inline-block-container open-list'>
						<button name='consumption' onClick={toggleHidden}>
							+
						</button>
					</span>
				</h3>

				<div id='consumption' className='weights hidden'>
					<button name='Water' onClick={addTypeToEntry}>
						Water
					</button>
					<button name='Food' onClick={addTypeToEntry}>
						Food
					</button>
					<button name='Food in Container' onClick={addTypeToEntry}>
						Food in Container
					</button>
					<button name='Container' onClick={addTypeToEntry}>
						Container
					</button>
				</div>
			</div>
		</div>
	);
};

export default Options;
