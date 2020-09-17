import React from 'react';
import style from './Contacts.module.scss'
import styleCommon from './../common/Container.module.css'
import styleInner from './../common/ContainerInner.module.css'
import {Title} from '../common/title/title';
import {CommonInfo} from './components/CommonInfo';
import {MessageInfo} from './components/MessageForm';
import Slide from 'react-reveal/Slide'

export const Contacts = () => {
    return <div className={style.contacts}>
        <div>
            <Slide top>
                <div className={styleCommon.common}>
                    <Title title={'CONTACT'} titleH={'GET IN'} titleS={'TOUCH'}/>
                    <div className={`${styleInner.container} ${style.contacts_container}`}>
                        <CommonInfo/>
                        <MessageInfo/>
                    </div>
                </div>
            </Slide>
        </div>
    </div>
}