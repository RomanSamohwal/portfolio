import React from 'react';
import style from './Project.module.scss'
import flex from './../../common/FlexBox.module.css'
import Slide from 'react-reveal/Slide';

export const Project = (props) => {
    return <div>
        <Slide top>
            <div className={`${style.project}`}>
                <a href={props.link}
                   className={style.link}>
                    <div className={`${style.project_container} ${flex.flex_column}`}>
                        <div className={style.project_container_image} style={props.image}>

                        </div>
                        <div className={style.project_container_separator}>
                        </div>
                        <div className={`${style.description_container__title}`}>
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </a>
            </div>
        </Slide>
    </div>
}