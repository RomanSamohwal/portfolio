import React from 'react';
import style from './About.module.css'
import styleCommon from './../common/Container.module.css'
import styleInner from './../common/ContainerInner.module.css'
import {Title} from '../common/title/title';
import {Info} from './info/Info';
import {TitleInner} from '../common/title/titleInner';
import {SkillRectangle} from './skills/Skill_2';

export const About = () => {
    return <div className={style.about}>
        <div className={styleCommon.common}>
            <Title title={'RESUME'} titleH={'ABOUT'} titleS={'ME'}/>
              <div className={styleInner.container}>
                  <div>
                      <TitleInner text={'PERSONAL INFO'}/>
                  </div>
                  <div>
                      <Info/>
                  </div>
                  <div>
                      <TitleInner text={'My Skills'}/>
                  </div>
                  <div>
                      <SkillRectangle title={'HTML'} percent={'60'}/>
                      <SkillRectangle title={'React'} percent={'80'}/>
                      <SkillRectangle title={'CSS'} percent={'55'}/>
                      <SkillRectangle title={'REDUX'} percent={'70'}/>
                  </div>
              </div>
        </div>
    </div>
}