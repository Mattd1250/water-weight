import React, { useState } from 'react';
import Entries from './Entries';
import EntryInput from './EntryInput';

const App = () => {
	const [entryList, setEntryList] = useState([]);

	const addWeighIn = (type, values) => {
		console.log(type);
		const newEntry = {};
		if (type === 'weighIn') {
			newEntry = {
				type,
				weighInType: values[0].value,
				clothing: values[1].value,
				weight: values[2].value,
			};
		} else if (type === 'Water') {
			return;
		} else if (type === 'Food') {
			return;
		}
		console.log(newEntry);
		setEntryList([...entryList, newEntry]);
	};

	return (
		<div>
			<h1>Water Weight</h1>
			<EntryInput addWeighIn={addWeighIn} />
			<Entries entries={entryList} />
		</div>
	);
};

export default App;
