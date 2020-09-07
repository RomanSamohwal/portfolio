import React from 'react';
import style from './Main.module.css'
import styleCommon from './../common/Container.module.css'

export const Main = () => {
    return <div className={style.main}>
        <div className={styleCommon.common}>
            <div className={style.container}>
                <div className={style.photo}>

                </div>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I'm Roman Samohwal</h1>
                    <p>
                        I'm front‑end developer
                    </p>
                </div>
            </div>

        </div>
    </div>
}