import React, { useState } from 'react';
import './style.css';

const buttons = [
    {value: '7', className: 'number'},
    {value: '8', className: 'number'},
    {value: '9', className: 'number'},
    {value: '/', className: 'operator'},
    {value: '4', className: 'number'},
    {value: '5', className: 'number'},
    {value: '6', className: 'number'},
    {value: '*', className: 'operator'},
    {value: '1', className: 'number'},
    {value: '2', className: 'number'},
    {value: '3', className: 'number'},
    {value: '+', className: 'operator'},
    {value: '0', className: 'number'},
    {value: '.', className: 'number'},
    {value: '=', className: 'operator'},
    {value: '-', className: 'operator'},
]

const Calculator = () => {
    const [expression, setExpression] = useState("")

    const update = (value) => {
        if (value === "=")
            setExpression(eval(expression))
        else
            setExpression(expression + value)
    }

    return (
        <div className="container">
            <div id="result">{ expression }</div>
            {buttons.map(({ value, className }) => (
                <button key={value} 
                        className={className}
                        onClick={() => update(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    )
}

export default Calculator;