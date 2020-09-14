import React from 'react';
import style from './Project.module.scss'
import flex from './../../common/FlexBox.module.css'

export const Project = (props) => {
    return <div className={`${style.project}`} >
        <div className={`${style.project_container} ${flex.flex_column}`}>
               <div className={style.project_container_image} style={props.image}>
                   {/*<a href={'https://romansamohwal.github.io/social_network_my/'} style={{textDecoration: 'none'}}>watch</a>*/}
               </div>
            <div className={style.project_container_separator}>
            </div>
            <div className={`${style.description_container__title}`}>
                <h3>{props.title}</h3>
            </div>
        </div>
    </div>
}