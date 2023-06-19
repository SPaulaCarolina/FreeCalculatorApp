import '../stylesheets/Button.css'
import { useState } from 'react';

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }
    return (
        <button className={`button-cont ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.handleClick(props.children)} >
            {props.children}
        </button>
    )
}

export default Button;
