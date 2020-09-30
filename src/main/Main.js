import React from 'react';
import style from './Main.module.scss'
import styleCommon from './../common/Container.module.css'
import flex from './../common/FlexBox.module.css'
import image from './../assets/image/photo_2020-05-20_00-50-23.jpg'
import Slide from 'react-reveal/Slide'
import Tilt from 'react-tilt'
import {ButtonMain} from '../common/button/ButtonMain';

export const Main = () => {
    const avatar = {
        backgroundImage: `url(${image})`,
    };
    return <div className={style.main}>
        <Slide top>
            <div className={`${styleCommon.common} ${flex.flex_column} ${flex.flex_center}`}>
                <div className={style.container}>
                  {/*  <Tilt className="Tilt">*/}
                        <div className={`${style.photo}`} style={avatar}>
                        </div>
                  {/*  </Tilt>*/}
                    <div className={style.text}>
                        <span>HI THERE</span>
                        <div>I'M ROMAN <span>SAMOHWAL</span></div>
                        <span>
                        I'm front‑end developer
                    </span>
                        <div style={{marginTop: '5px'}}>
                            <ButtonMain text={'MORE ABOUT ME'}/>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    </div>
}