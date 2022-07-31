import React, { useState } from 'react';
import Header from './Header';
import Entries from './Entries';
import Options from './Options';
import Setting from './Setting';

const App1 = () => {
	const [weighInType, setWeighInType] = useState('');
	const [currentWeight, setCurrentWeight] = useState(0);
	const [changeInWeight, setChangeInWeight] = useState(0);
	const handleWeighInSelected = (type) => {
		setWeighInType(type);
	};

	const showWeighInType = () => {
		console.log(weighInType);
	};

	const getButtonName = (buttonInfo) => {
		return buttonInfo.target.name;
	};

	return (
		<>
			<Header />
			<Setting currentWeight={currentWeight} changeInWeight={changeInWeight} />
			<Options getButtonName={getButtonName} setWeighInType={setWeighInType} />
			<Entries
				weighInType={weighInType}
				currentWeight={currentWeight}
				setCurrentWeight={setCurrentWeight}
				changeInWeight={changeInWeight}
				setChangeInWeight={setChangeInWeight}
			/>
		</>
	);
};

export default App1;
