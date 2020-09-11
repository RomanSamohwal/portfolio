import React from 'react';
import style from './logo.module.css'
import flex from './../../common/FlexBox.module.css'

export const Logo = (props) => {
    return <div className={`${style.logo}`}>
        <div className={`${flex.flex_column} ${flex.flex_center} ${style.container}`}>
            {props.children}
        </div>
    </div>
}