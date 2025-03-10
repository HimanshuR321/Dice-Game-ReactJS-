import React from 'react'
import styles from "./Box.module.css"

const Box = (props) => {
  return (
    <div>
      <div onClick={props.onClick} className={`${styles.box} ${props.className}`}>{props.value}</div>
    </div>
  )
}

export default Box
