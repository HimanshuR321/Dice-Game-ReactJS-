import React from 'react'
import img from "../../images/dices.png"
import styles from "./Home.module.css"
import Button from '../Button/Button'

const Home = () => {

  return (
    <div>
        <div className={`${styles.section}`}>
            <div>
                <img className={`${styles.dices}`} src={img} alt="" />
            </div>
            <div className={`${styles.right}`}>
                <p className={`${styles.text}`}>DICE GAME</p>
                <Button text="Play Now" className={styles.blackBtn}/>
            </div>
        </div>
    </div>
  )
}

export default Home
