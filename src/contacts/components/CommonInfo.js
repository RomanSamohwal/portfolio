import React from 'react'
import style from '../Contacts.module.scss';
import {ContactInfo} from './ConatctInfo';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import {LogoContainer} from './logotip';

export const CommonInfo = () => {
    return <div className={`${style.information_container}`}>
        <div>
            <h3>DON'T BE SHY !</h3>
        </div>
        <div>
            <p>
                Feel free to get in touch with me.
                I am always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.
            </p>
        </div>
        <ContactInfo text={'MAIL ME'} info={'rsamohwal@gmail.com'}>
            <MailOutlineIcon fontSize='large' style={{backgroundColor: '#eec63f'}}/>
        </ContactInfo>
        <ContactInfo text={'CALL ME'} info={'+375(25)7501956'}>
            <CallIcon fontSize='large' style={{backgroundColor: '#eec63f'}}/>
        </ContactInfo>
        <LogoContainer/>
    </div>
}