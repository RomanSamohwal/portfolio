import React from 'react';
import style from './Button.module.scss'
import { useHistory } from "react-router-dom";


export const ButtonMain = (props) => {

    let history = useHistory();

    const onButtonHandler = () => {
        history.push('/about')
    }

    return <>
        <button className={style.button} onClick={onButtonHandler}>
            <span>{props.text}</span>
        </button>
    </>
}