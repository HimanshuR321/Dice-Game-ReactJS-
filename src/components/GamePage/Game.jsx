import React, { useState } from 'react'
import Box from '../Box/Box'
import styles from "./Game.module.css"
import Button from "../Button/Button"
import img1 from "../../images/image1.png"
import img2 from "../../images/image2.png"
import img3 from "../../images/image3.png"
import img4 from "../../images/image4.png"
import img5 from "../../images/image5.png"
import img6 from "../../images/image6.png"

const Game = () => {
  const [ruleFlag,setRuleFlag]=useState(false);
  const [boxFlag,setBoxFlag]=useState(null);
  const [score,setScore]=useState(0);
  const [imgSrc,setImgSrc]=useState(img1);
  const [err,setErr]=useState(false);

  const randomVal = () =>{
    let x=Math.floor(Math.random()*6)+1;
    return x;
  }
  const handleBoxFlag=(value)=>{
    setBoxFlag(value);
    setErr(false);
  }
  const handleDice = ()=>{
    if(!boxFlag){
      setErr(true);
    } else{
      let num=randomVal();
      let imgArr = [img1,img2,img3,img4,img5,img6];
      setImgSrc(imgArr[num-1]);
      let points=Number(boxFlag);
      if(num===points){
        setScore(score+points);
      } else{
        // score<0?setScore(score-2):setScore(0);
        setScore(score-2);
      }
    }
  }

  const handleRuleFlag=()=>{
    setRuleFlag(!ruleFlag);
  }

  const resetScore = ()=>{
    setScore(0);
  }

  const numbers=[1,2,3,4,5,6];

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.score}`}>
          <p className={styles.scoreVal}>{score}</p>
          <p className={styles.text2}>Total Score</p>
        </div>
        <div className={`${styles.choose}`}>
          {err && <p className={styles.error}>You have not selected any number</p>}
          
          <div className={`${styles.boxes}`}>
            {
              numbers.map(n=>(
                <Box value={n.toString()} onClick={()=>handleBoxFlag(n.toString())} className={boxFlag===n.toString()?styles.boxStyle:''}/>
              ))
            }
          </div>
          <p className={styles.text}>Select Number</p>
        </div>
      </div>
      <div className={styles.centreNRule}>
        <div className={styles.centre}>
          <img src={imgSrc} alt="" onClick={handleDice}/>
          <p className={styles.click}>Click on Dice to roll</p>
          <Button text="Reset Score" className={styles.resetBtn} onClick={resetScore}/>
          <Button text={ruleFlag ? "Hide Rules" : "Show Rules"} className={styles.showBtn} onClick={handleRuleFlag}/>
        </div>
        {ruleFlag && <div className={styles.rules}>
            <p className={styles.how}>How to play dice game</p>
            <p className={styles.rule}>1. Select any number</p>
            <p className={styles.rule}>2. Click on dice image</p>
            <p className={styles.rule}>3. After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p className={styles.rule}>4. If you get wrong guess then  2 point will be deducted </p>
        </div>}
      </div>
    </>
  )
}

export default Game