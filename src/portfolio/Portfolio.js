import React from 'react';
import style from './Portfolio.module.scss'
import styleCommon from './../common/Container.module.css'
import {Title} from '../common/title/title';
import styleInner from '../common/ContainerInner.module.css';
import {Project} from './project/Project';
import flex from './../common/FlexBox.module.css'
import imageSN from './../assets/image/sn3.jpg'
import imageTodolist from  './../assets/image/todolist3.jpg'

export const Portfolio = () => {

    const socialNetwork = {
        backgroundImage: `url(${imageSN})`,
    };

    const todolist = {
        backgroundImage: `url(${imageTodolist})`,
    };

    return <div className={style.portfolio}>
        <div className={styleCommon.common}>
               <Title title = {'Works'} titleH = {'MY'} titleS = {'PORTFOLIO'}/>
            <div className={`${styleInner.container} ${flex.flex_column} ${flex.flex_center}`}>
                 <Project title = {'SOCIAL NETWORK'} text = {"I'ts my social network"} image = {socialNetwork}/>
                 <Project title = {'TodoList'} text = {'You can to make own task '} image = {todolist}/>
            </div>
        </div>
    </div>
}