import React from 'react';
import style from './Info.module.css'

export const List = (props) => {
    return <div className={style.list}>
        {props.data.map((d, index) => {
            return <div key={index} style={{padding: '10px'}}>
                <span style={{color: '#d9e0e5'}}>{Object.keys(d)} : </span>
                <span>{d[Object.keys(d)]}</span>
            </div>
        })}
    </div>
}