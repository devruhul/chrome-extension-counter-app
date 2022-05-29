import React, { useEffect, useState } from 'react';
import './Counter.css'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrementCounter = () => {
        setCount(count + 1);
        // set localStorage
        localStorage.setItem('count', count + 1);
    }

    const handleResetCounter = () => {
        setCount(0);
        // set localStorage
        localStorage.setItem('count', 0);
    }

    const handleDecrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        // set localStorage
        if (count > 0) {
            localStorage.setItem('count', count - 1);
        }
    }

    // get localStorage and set count
    useEffect(() => {
        // get localStorage count
        const localCounter = Number(localStorage.getItem('count'));
        if (localCounter) {
            setCount(localCounter);
        }
    }, [count]) //remain count persistent when page is reloaded


    return (
        // Main Counter Component
        <div className='container'>
            <div className="main-container">
                <h2>Counter App</h2>
                <div className="counter-container">
                    <h3 className='counter-value'>
                        {count}
                    </h3>
                    <div className="button-container">
                        <button
                            onClick={handleIncrementCounter} className="button-increment">+
                        </button>
                        <button
                            onClick={handleResetCounter} className="button-reset"
                        >Reset</button>
                        <button
                            onClick={handleDecrementCounter} className="button-decrement"
                        >-</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Counter;