import React from 'react';
import style from './Portfolio.module.css'
import styleCommon from './../common/Container.module.css'
import {Title} from '../common/title/title';
import styleInner from '../common/ContainerInner.module.css';

export const Portfolio = () => {
    return <div className={style.portfolio}>
        <div className={styleCommon.common}>
               <Title title = {'Works'} titleH = {'MY'} titleS = {'PORTFOLIO'}/>
            <div className={styleInner.container}>

            </div>
        </div>
    </div>
}