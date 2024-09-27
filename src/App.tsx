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

    return (
        <div className="container">
            <div className="main-container">
                <div className="ingredient-container">
                    <div className="ingredient-control">
                        <img src={meatImage} alt="Meat" className="ingredient-image"/>
                        <p>Meat (80): {meatCount}</p>
                        <button>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={cheeseImage} alt="Cheese" className="ingredient-image"/>
                        <p>Cheese(50): {cheeseCount}</p>
                        <button>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={saladImage} alt="Salad" className="ingredient-image"/>
                        <p>Salad (10): {saladCount}</p>
                        <button>X</button>
                    </div>
                    <div className="ingredient-control">
                        <img src={baconImage} alt="Bacon" className="ingredient-image"/>
                        <p>Bacon(60): {baconCount}</p>
                        <button>X</button>
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
                <h2>Total Price:</h2>
            </div>
        </div>
    );
};

export default App;
