import React from 'react';
import style from './TitleInner.module.css'

export const TitleInner = (props) => {
    return <div >
        <div className={style.title_inner}>
            <h3>{props.text}</h3>
        </div>
    </div>
}