import React from 'react';
import style from './Main.module.scss'
import styleCommon from './../common/Container.module.css'
import {Button} from '../common/button/Button';
import flex from './../common/FlexBox.module.css'
import image from './../assets/image/photo_2020-05-20_00-50-23.jpg'

export const Main = () => {
    const avatar = {
        /*  backgroundImage: `url(${image})`,*/
    };
    return <div className={style.main}>
        <div className={`${styleCommon.common} ${flex.flex_column} ${flex.flex_center}`}>
            <div className={style.container}>
                <div className={`${style.photo}`} style={avatar}>

                </div>
                <div className={style.text}>
                    <span>HI THERE</span>
                    <div>I'M ROMAN <span>SAMOHWAL</span></div>
                    <span>
                        I'm front‑end developer
                    </span>
                    <div style={{marginTop: '5px'}}>
                        <Button text={'MORE ABOUT ME'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}