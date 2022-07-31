import '../styles/header.css';

const toggleNightMode = () => {
	document.getElementsByTagName('body')[0].classList.toggle('night-mode');
};

function Header() {
	return (
		<>
			<div id='header'>Weight Tracker</div>
			<button onClick={toggleNightMode}>Night Mode</button>
		</>
	);
}

export default Header;
