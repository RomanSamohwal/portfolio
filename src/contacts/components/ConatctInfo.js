import React from 'react';
import style from './ContactInfo.module.scss'
import flex from './../../common/FlexBox.module.css'
import {ContactLogo} from './ContactLogo';

export const ContactInfo = (props) => {
    return <div className={`${style.contact_info} ${flex.flex_row}`}>
        <ContactLogo>{props.children}</ContactLogo>
        <div className={`${flex.flex_column} ${flex.center_flex_start} ${style.info}`}>
            <div>
                <span>
                {props.text}
                 </span>
            </div>
            <div>
           <span>
               {props.info}
            </span>
            </div>
        </div>
    </div>
}
