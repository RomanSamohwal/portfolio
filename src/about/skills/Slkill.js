import React from 'react'
import style from './Skills.module.css'

export const Skill = () => {
    return <div className={`${style.skillContainer} ${style.flex}`}>
        <div className={ `${style.skill} ${style.flex}`}>
              <div className={`${style.inner} ${style.flex}`}>
                 <span>95%</span>
              </div>
        </div>
        <div className={ `${style.title} ${style.flex}`}>
               <span>JAVASCRIPT</span>
        </div>
    </div>
};