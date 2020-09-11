import React from 'react';
import style from './logotip.module.css'
import {Logo} from './Logo';
import flex from './../../common/FlexBox.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';


export const LogoContainer = (props) => {
    return <div className={ `${style.logotip_container} `}>
        <div className={`${flex.flex_row} ${flex.flex_space_between_center}`}>
            <Logo><LinkedInIcon color={'inherit'}/></Logo>
            <Logo><InstagramIcon color={'inherit'}/></Logo>
            <Logo><TelegramIcon color={'inherit'}/></Logo>
        </div>
    </div>
}