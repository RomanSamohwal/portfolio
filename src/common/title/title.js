import React from 'react';
import style from './Title.module.scss'

export const Title = (props) => {
    return <div className={style.titleSection}>
        <h1>
            {props.titleH} <span>{props.titleS}</span>
        </h1>
    </div>
}