import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [meatCount, setMeatCount] = useState(0);
    const [cheeseCount, setCheeseCount] = useState(0);
    const [saladCount, setSaladCount] = useState(0);
    const [baconCount, setBaconCount] = useState(0);

    const handleSubmit = (event: React.FormEvent, addIngredient: () => void) => {
        event.preventDefault();
        addIngredient();
    };

    const addMeat = () => setMeatCount(meatCount + 1);
    const addCheese = () => setCheeseCount(cheeseCount + 1);
    const addSalad = () => setSaladCount(saladCount + 1);
    const addBacon = () => setBaconCount(baconCount + 1);

    return (
        <div className="main-container">
            <div className="input-box">
                <form onSubmit={(event) => handleSubmit(event, addMeat)}>
                    <button type="submit">Meat</button>
                </form>

                <form onSubmit={(event) => handleSubmit(event, addCheese)}>
                    <button type="submit">Cheese</button>
                </form>

                <form onSubmit={(event) => handleSubmit(event, addSalad)}>
                    <button type="submit">Salad</button>
                </form>

                <form onSubmit={(event) => handleSubmit(event, addBacon)}>
                    <button type="submit">Bacon</button>
                </form>
            </div>

            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>

                {[...Array(saladCount)].map((_, index) => <div key={index} className="Salad"></div>)}
                {[...Array(cheeseCount)].map((_, index) => <div key={index} className="Cheese"></div>)}
                {[...Array(meatCount)].map((_, index) => <div key={index} className="Meat"></div>)}
                {[...Array(baconCount)].map((_, index) => <div key={index} className="Bacon"></div>)}

                <div className="BreadBottom"></div>
            </div>
        </div>
    );
};

export default App;
