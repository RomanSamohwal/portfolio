import React from 'react';
import style from './Button.module.css'

export const Button = () => {
    return <>
        <button className={style.button}>
            <span>Send message</span>
        </button>
    </>
}