import React from 'react'
import style from './Skills.module.scss'
import flex from './../../common/FlexBox.module.css'

export const Skill = () => {
    return <div className={`${style.skill_box} ${flex.flex_column} ${flex.flex_center}`}>
        <div className={`${style.skill} ${flex.flex_column} ${flex.flex_center}`}>
            <div className={`${style.inner} ${flex.flex_column} ${flex.flex_center}`}>
                <span>95%</span>
            </div>
        </div>
        <div className={`${style.title} ${flex.flex_column} ${flex.flex_center}`}>
            <span>JAVASCRIPT</span>
        </div>
    </div>
};