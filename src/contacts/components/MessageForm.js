import React from 'react';
import style from '../Contacts.module.scss';
import flex from '../../common/FlexBox.module.css';
import {Button} from '../../common/button/Button';
import { Formik, Form, Field } from "formik";
import * as axios from 'axios';

export const MessageInfo = () => {
    const onSubmit = data =>  axios.post('http://localhost:3010/sendMessage',data).then(()=>alert('Your message sent'))

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



/*function validateEmail(value) {
    let error;

    if (!value) {
        error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        error = "Invalid email address";
    }

    return error;
}

function validateUsername(value) {
    let error;

    if (value === "admin") {
        error = "Nice try!";
    }

    return error;
}

function validateMessage(value) {
    let error;

    if (value === "admin") {
        error = "Nice try!";
    }

    return error;
}*/

/*
<form className={style.contact_form}>
    <div className={`${style.input_form} ${flex.flex_row} ${flex.flex_space_between_center}`}>
        <div className={style.input}>
            <input type='username' placeholder={'your name'}/>
        </div>
        <div className={style.input}>
            <input type='email' placeholder={'your email'}/>
        </div>
    </div>
    <textarea placeholder={'your message'}/>
    <div style={{width: '100%'}} className={`${flex.flex_row} ${flex.flex_start_center}`}>
        <Button type='submit' text={'SEND MESSAGE'}/>
    </div>
</form>*/
{/*   <Formik
            initialValues={{
                username: "",
                email: "",
                textarea: ""
            }}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="email" validate={validateEmail} />
                    {errors.email && touched.email && errors.email}

                    <Field name="username" validate={validateUsername} />
                    {errors.username && touched.username && errors.username}
                    <Field name = "textarea" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>*/}
