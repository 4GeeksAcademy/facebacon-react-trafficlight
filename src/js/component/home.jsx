import React, { useState } from 'react';

const Home = () => {
	const [color, setColor] = useState("");
	const resetColor = () => {setColor("");};
    
	return (
	<div className="trafficLightContainer">
		<div className="trafficLight">
			<div 
				className={color === 'red' ? 'red light glow' : 'red light'} 
				onClick={() => setColor('red')}>
			</div>
			<div 
				className={color === 'yellow' ? 'yellow light glow' : 'yellow light'} 
				onClick={() => setColor('yellow')}>
			</div>
			<div 
				className={color === 'green' ? 'green light glow' : 'green light'} 
				onClick={() => setColor('green')}>
			</div>
			<button onClick={resetColor}>Reset</button>
		</div>
	</div>
    );
};

export default Home;
