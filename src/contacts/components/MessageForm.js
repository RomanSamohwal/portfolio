import React from 'react';
import style from '../Contacts.module.scss';
import flex from '../../common/FlexBox.module.css';
import {Button} from '../../common/button/Button';

export const MessageInfo = () => {
    return <div className={`${style.contact_container}`}>
        <form className={style.contact_form}>
            <div className={`${style.input_form} ${flex.flex_row} ${flex.flex_space_between_center}`}>
                <div className={style.input}>
                    <input type='text' placeholder={'your name'} />
                </div>
                <div className={style.input}>
                    <input type='text' placeholder={'your email'}/>
                </div>
            </div>
            <textarea placeholder={'your message'}/>
            <div style={{width: '100%'}} className={`${flex.flex_row} ${flex.flex_start_center}`}>
                <Button type='submit' text={'SEND MESSAGE'}/>
            </div>
        </form>
    </div>
}