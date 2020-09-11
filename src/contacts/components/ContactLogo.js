import React from 'react';
import style from './ContactLogo.module.css'
import flex from './../../common/FlexBox.module.css'

export const ContactLogo = (props) => {
    return <div className={`${style.contact_logo} ${flex.flex_center}`}>
         <div>{props.children}</div>
    </div>
}