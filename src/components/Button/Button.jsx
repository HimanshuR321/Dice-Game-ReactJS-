import React, { useContext } from 'react'
import styles from "./Button.module.css"
import { contextCreate } from '../../App'

const Button = (props) => {
  const {setFlag}=useContext(contextCreate);
  const trigger = ()=>{
    if(props.onClick){
      props.onClick();
    } else{
      setFlag(true);
    }
  }
  return (
    <div>
      <button onClick={trigger} className={`${styles.btn} ${props.className}`}>{props.text}</button>
    </div>
  )
}

export default Button
