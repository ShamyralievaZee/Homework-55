import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Burger from './Components/Burger/Burger';
import {useState} from "react";

const PRICES = {
    base: 30,
    meat: 80,
    cheese: 50,
    salad: 10,
    bacon: 60,
};

const App = () => {
    const [meatCount, setMeatCount] = useState(0);
    const [cheeseCount, setCheeseCount] = useState(0);
    const [saladCount, setSaladCount] = useState(0);
    const [baconCount, setBaconCount] = useState(0);

    const addMeat = () => setMeatCount(meatCount + 1);
    const addCheese = () => setCheeseCount(cheeseCount + 1);
    const addSalad = () => setSaladCount(saladCount + 1);
    const addBacon = () => setBaconCount(baconCount + 1);

    const removeMeat = () => setMeatCount(meatCount > 0 ? meatCount - 1 : 0);
    const removeCheese = () => setCheeseCount(cheeseCount > 0 ? cheeseCount - 1 : 0);
    const removeSalad = () => setSaladCount(saladCount > 0 ? saladCount - 1 : 0);
    const removeBacon = () => setBaconCount(baconCount > 0 ? baconCount - 1 : 0);

    const getTotalPrice = () => {
        const ingredientTotals = [
            { count: meatCount, price: PRICES.meat },
            { count: cheeseCount, price: PRICES.cheese },
            { count: saladCount, price: PRICES.salad },
            { count: baconCount, price: PRICES.bacon }
        ];

        return ingredientTotals.reduce((total, ingredient) => total + (ingredient.count * ingredient.price), PRICES.base);
    };

    return (
        <div className="container">
            <div className="main-container">
                <div className="ingredient-container">
                    <div className="ingredient-control">
                        <img src={meatImage} alt="Meat" className="ingredient-image" onClick={addMeat} />
                        <p>Meat (80): x{meatCount}</p>
                        <button onClick={removeMeat}>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={cheeseImage} alt="Cheese" className="ingredient-image" onClick={addCheese} />
                        <p>Cheese(50): x{cheeseCount}</p>
                        <button onClick={removeCheese}>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={saladImage} alt="Salad" className="ingredient-image" onClick={addSalad} />
                        <p>Salad (10): x{saladCount}</p>
                        <button onClick={removeSalad}>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={baconImage} alt="Bacon" className="ingredient-image" onClick={addBacon} />
                        <p>Bacon(60): x{baconCount}</p>
                        <button onClick={removeBacon}>X</button>
                    </div>
                </div>

                <div className="burger-container">
                    <Burger
                        saladCount={saladCount}
                        cheeseCount={cheeseCount}
                        meatCount={meatCount}
                        baconCount={baconCount}
                    />
                </div>
            </div>
            <div className="price-display">
                <h2>Total Price: {getTotalPrice()} som</h2>
            </div>
        </div>
    );
};

export default App;
