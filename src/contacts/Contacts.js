import React from 'react';
import style from './Contacts.module.css'
import styleCommon from './../common/Container.module.css'
import styleInner from './../common/ContainerInner.module.css'
import {Title} from '../common/title/title';
import {ContactInfo} from './components/ConatctInfo';
import {LogoContainer} from './components/logotip';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import {Button} from '../common/button/Button';

export const Contacts = () => {
    return <div className={style.contacts}>
        <div className={styleCommon.common}>
            <Title title={'CONTACT'} titleH={'GET IN'} titleS={'TOUCH'}/>
            <div className={`${styleInner.container}`}>
                <div className={`${style.information_container}`}>
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
                    <ContactInfo text={'MAIL ME'} info={'steve@mail.com'}>
                        <MailOutlineIcon fontSize='large' style={{backgroundColor: '#eec63f'}}/>
                    </ContactInfo>
                    <ContactInfo text={'CALL ME'} info={'+216 21 184 010'}>
                        <CallIcon fontSize='large' style={{backgroundColor: '#eec63f'}}/>
                    </ContactInfo>
                    <LogoContainer/>
                </div>


                <div className={`${style.contact_container}`}>
                    <form className={style.contact_form}>
                        <input type='text' placeholder={'YOUR NAME'}/>
                        <input type='text' placeholder={'YOUR EMAIL'}/>
                        <textarea  placeholder={'YOUR MESSAGE'}/>
                        <Button text = {'SEND MESSAGE'}/>
                    </form>
                </div>

            </div>
        </div>
    </div>
}