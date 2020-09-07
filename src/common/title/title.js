import React from 'react';
import style from './Title.module.css'

export const Title = (props) => {
    return <div className={style.titleSection}>
        <h1>
            {props.titleH} <span>{props.titleS}</span>
        </h1>
        {/*<span className={style.titleBg}>{props.title}</span>*/}
    </div>
}