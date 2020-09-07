import React from 'react';
import style from './TitleInner.module.css'

export const TitleInner = (props) => {
    return <div className={style.titleInner}>
        <h3>{props.text}</h3>
    </div>
}