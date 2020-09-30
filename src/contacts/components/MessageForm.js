import React from 'react';
import style from '../Contacts.module.scss';
import flex from '../../common/FlexBox.module.css';
import {Button} from '../../common/button/Button';
import { Formik, Form, Field } from "formik";
import * as axios from 'axios';

export const MessageInfo = () => {
    const onSubmit = data =>  axios.post('https://smtp-nodjs-server.herokuapp.com/sendMessage',data).then(()=>alert('Your message sent'))
    return <div className={`${style.contact_container}`}>
        <Formik
            initialValues={{
                username: "",
                email: "",
                message: ""
            }}
            onSubmit={onSubmit}
        >
            {() => (<Form className={style.contact_form}>
                <div className={`${style.input_form} ${flex.flex_row} ${flex.flex_space_between_center}`}>
                    <div className={style.input}>
                        <Field name="username" placeholder={'your name'}/>
                    </div>
                    <div className={style.input}>
                        <Field name="email" placeholder={'your email'}/>
                    </div>
                </div>
                <Field placeholder={'your message'} name="message" className={style.textarea}/>
                <div style={{width: '100%'}} className={`${flex.flex_row} ${flex.flex_start_center}`}>
                    <Button type='submit' text={'SEND MESSAGE'}/>
                </div>
            </Form>)}
        </Formik>
    </div>
}
