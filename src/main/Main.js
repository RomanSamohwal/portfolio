import React from 'react';
import style from './Main.module.css'
import styleCommon from './../common/Container.module.css'
import {Button} from '../common/button/Button';

export const Main = () => {
    return <div className={style.main}>
        <div className={styleCommon.common}>
            <div className={style.container}>
                <div className={style.photo}>

                </div>
                <div className={style.text}>
                    <span>HI THERE</span>
                    <h1>I'M ROMAN <span style={{color: '#eec63f'}}>SAMOHWAL</span></h1>
                    <p>
                        I'm front‑end developer
                    </p>
                 <Button text = {'MORE ABOUT ME'}/>
                </div>
            </div>

        </div>
    </div>
}