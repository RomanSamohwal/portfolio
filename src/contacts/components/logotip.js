import React from 'react';
import style from './logotip.module.css'
import {Logo} from './Logo';
import flex from './../../common/FlexBox.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';


export const LogoContainer = (props) => {
    return <div className={`${style.logotip_container} `}>
        <div className={`${flex.flex_row} ${flex.flex_space_between_center}`}>
            <Logo link = {'https://www.linkedin.com/feed/'}><LinkedInIcon color={'action'}/></Logo>
            <Logo link = {''}><InstagramIcon color={'action'} /></Logo>
            <Logo link = {''}><TelegramIcon color={'action'}/></Logo>
            <Logo link = {'https://github.com/RomanSamohwal'}><GitHubIcon color={'action'}/></Logo>
        </div>
    </div>
}