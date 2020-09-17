import React from 'react';
import style from './logo.module.scss'
import flex from './../../common/FlexBox.module.css'

export const Logo = (props) => {
    return <div className={`${style.logo}`}>
        <a className={style.link} href={props.link} >
            <div className={`${flex.flex_column} ${flex.flex_center} ${style.container} `}>
                {props.children}
            </div>
        </a>
    </div>
}