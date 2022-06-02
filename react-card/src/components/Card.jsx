import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import style from "./Card.module.css";
const card = (props) => {
  return (
        <>
          <div style={{backgroundColor :`${props.data.bgColor}`}} className={style.card}>
          <div className={style.flex}>
              <div className={style.date}>{ props.data.date } </div>
              <div className={style.caseStudy}>Case Study</div>
              <h1 className={style.heading}>{props.data.heading}</h1>
              <h1 className={style.subheading}>{props.data.subheading}</h1>
              <div className={style.devices}>{props.data.devices}</div>
            </div>
            <div className={style.flex_space}>
              <div><img src={props.data.logo} alt='Logo' className={style.img}></img></div>
              <div><BsArrowRight className={style.size}/></div>
            </div>
            
          </div>
        </>
  )
}

export default card