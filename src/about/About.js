import React from 'react';
import style from './About.module.scss'
import styleCommon from './../common/Container.module.css'
import styleInner from './../common/ContainerInner.module.css'
import {Title} from '../common/title/title';
import {Info} from './info/Info';
import {TitleInner} from '../common/title/titleInner';
import {SkillRectangle} from './skills/Skill_2';
import flex from './../common/FlexBox.module.css'
import Slide from 'react-reveal/Slide'

export const About = () => {

    return <div className={style.about}>
        <div>
            <Slide top>
                <div className={styleCommon.common}>
                    <Title title={'RESUME'} titleH={'ABOUT'} titleS={'ME'}/>
                    <div className={styleInner.container}>
                        <div>
                            <TitleInner text={'PERSONAL INFOS'}/>
                        </div>
                        <div>
                            <Info/>
                        </div>
                        <div>
                            <TitleInner text={'MY SKILLS'}/>
                        </div>
                        <div className={`${style.skills}`}>
                            <div className={`${flex.flex_column}`}>
                                <SkillRectangle title={'HTML'} percent={'90'}/>
                                <SkillRectangle title={'REACT'} percent={'85'}/>
                                <SkillRectangle title={'JAVASCRIPT'} percent={'80'}/>
                            </div>
                            <div className={`${flex.flex_column}`}>
                                <SkillRectangle title={'CSS'} percent={'70'}/>
                                <SkillRectangle title={'REDUX'} percent={'87'}/>
                                <SkillRectangle title={'TYPESCRIPT'} percent={'75'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    </div>
}