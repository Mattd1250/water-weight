import React from 'react';

const Entries = ({ entries }) => {
	const randomId = () => Math.floor(Math.random() * 1000000);
	let counter = 0;
	const entryCounter = () => {
		counter++;
		return counter;
	};
	console.log(entries);

	return entries.map((entry) => {
		if (entries.type === 'weighIn') {
			return (
				<>
					<div key={randomId}>
						{entryCounter()}. {entry.weighInType} | {entry.clothing} |
						{entry.weight}
					</div>
				</>
			);
		}
	});
};

export default Entries;
