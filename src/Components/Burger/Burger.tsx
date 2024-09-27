import React from 'react';
import {IBurger} from '../../types';

const Burger: React.FC<IBurger> = ({ saladCount, cheeseCount, meatCount, baconCount }) => {
    return (
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
    );
};

export default Burger;
