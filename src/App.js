import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Cat from './components/Cat';
import Pop from './components/Pop';
import useInterval from './hooks/useInterval';
import { getRandomCatImage, getRandomPosition } from './utils/random';

const App = () => {
    const [cats, setCats] = useState([]);
    const [pops, setPops] = useState([]);

    const spawnCat = () => {
        const newCat = {
            id: Date.now(),
            image: getRandomCatImage(),
            position: getRandomPosition(),
        };
        setCats((prevCats) => [...prevCats, newCat]);
    };

    const spawnPop = () => {
        const newPop = {
            id: Date.now(),
            position: getRandomPosition(),
        };
        setPops((prevPops) => [...prevPops, newPop]);
    };

    useInterval(spawnCat, 2000);
    useInterval(spawnPop, 1500);

    return (
        <div className="app">
            <h1>Cute Cats and Wiwiwi!</h1>
            <div className="container">
                {cats.map((cat) => (
                    <Cat key={cat.id} image={cat.image} position={cat.position} />
                ))}
                {pops.map((pop) => (
                    <Pop key={pop.id} position={pop.position} />
                ))}
            </div>
        </div>
    );
};

export default App;