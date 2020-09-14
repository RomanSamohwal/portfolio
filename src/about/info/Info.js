import React from 'react';
import style from './Info.module.scss'
import {List} from './list';

export const Info = () => {
    let data1 = [{'First name': 'Roman'}, {'Last name': 'Samohwal'}, {'Age': 28}, {'Nationality': 'Belarus'}];
    let data2 = [{'Address': 'Minsk'}, {'Phone': '+21621184010'},
        {'Email ': 'you@mail.com'}, {'Langages': ['English, ', 'Russian']}];

    return <div className={style.info}>
        <List data={data1}/>
        <List data={data2}/>
    </div>
}