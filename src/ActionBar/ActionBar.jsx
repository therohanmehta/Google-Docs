
import React from 'react'
import style from "./ActionBar.module.css"
import Button from '../atoms/button/Button'
import { BiUndo } from 'react-icons/bi';
import { BiRedo } from 'react-icons/bi';
import { AiOutlinePrinter } from 'react-icons/ai';

function ActionBar() {
  return (
    <div className={style.container} >
        <div className={style.innerContainer}>
           <div className={style.leftActionBar}>
           <Button BiUndo={<BiUndo  style={{fontSize:"1rem"}}/>}/>
           <Button  BiRedo ={< BiRedo   style={{fontSize:"1rem"}}/>}/>
           <Button  AiOutlinePrinter ={<  AiOutlinePrinter style={{fontSize:"1rem"}}/>}/>
           </div>
        </div>
      
    </div>
  )
}

export default ActionBar