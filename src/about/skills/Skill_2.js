import React from 'react'
import style from './Skills_2.module.css'
import flex from './../../common/FlexBox.module.css'

export const SkillRectangle = (props) => {
    let width = (100 - Number(`${props.percent}`)) + '%';

    return <div className={`${style.rectangle} ${flex.flex_row} ${flex.flex_space_between_center}`}>
        <div className={`${style.percent} ${flex.flex_column}`} style={{width: `${props.percent + '%'}`}}>
            <div className={`${style.title} ${flex.flex_row} ${flex.flex_space_between_center}`}>
                <span>{props.title}</span>
                <span>{props.percent + '%'}</span>
            </div>
            <div className={`${style.skill}`} style={{backgroundColor: '#ffb400'}}>
            </div>
        </div>
        <div className={`${style.percent} ${flex.flex_column} ${flex.flex_end_center}`} style={{width: String(width)}}>
            <div className={`${style.skill}`} style={{backgroundColor: '#2f2f2f'}}>
            </div>
        </div>
    </div>
};