import Button from './Button';
import Input from './Input';
import Clear from './Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import '../stylesheets/Calculator.css'

function Calculator() {
    const [input, setInput] = useState('')
    
    const addInput = val => {
        setInput(input + val);
    };

    const calculate = () => {
        if(input) {
            setInput(evaluate(input));
        } else {
            setInput('ERR');
        }
    };

    const resetInput = val => {
        setInput('');
    };

    return (
        <div className='calculator-cont'>
            <Input input={input} />
            <div className='row'>
                <Button handleClick={addInput}>1</Button>
                <Button handleClick={addInput}>2</Button>
                <Button handleClick={addInput}>3</Button>
                <Button handleClick={addInput}>+</Button>
            </div>
            <div className='row'>
                <Button handleClick={addInput}>4</Button>
                <Button handleClick={addInput}>5</Button>
                <Button handleClick={addInput}>6</Button>
                <Button handleClick={addInput}>-</Button>
            </div>
            <div className='row'>
                <Button handleClick={addInput}>7</Button>
                <Button handleClick={addInput}>8</Button>
                <Button handleClick={addInput}>9</Button>
                <Button handleClick={addInput}>x</Button>
            </div>
            <div className='row'>
                <Button handleClick={calculate}>=</Button>
                <Button handleClick={addInput}>0</Button>
                <Button handleClick={addInput}>.</Button>
                <Button handleClick={addInput}>/</Button>
            </div>
            <div className='row'>
                <Clear handleReset={resetInput}> C </Clear>
            </div>
        </div>
    )
};

export default Calculator;