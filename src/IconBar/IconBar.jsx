import React from 'react'
import styles from './IconBar.module.css'
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdSpellcheck } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { ImUnderline } from "react-icons/im";
import { MdOutlineFormatColorText } from "react-icons/md";
import { FaHighlighter } from "react-icons/fa";
import { MdOutlineInsertPhoto } from "react-icons/md";
import {BiAlignLeft } from "react-icons/bi";
import {MdOutlineInsertLink } from "react-icons/md";
import {BiCommentAdd } from "react-icons/bi";
import {MdFormatLineSpacing } from "react-icons/md";
import {MdChecklist } from "react-icons/md";
import {MdFormatListBulleted } from "react-icons/md";
import {MdFormatListNumbered } from "react-icons/md";
import {MdFormatIndentDecrease } from "react-icons/md";
import {MdFormatIndentIncrease } from "react-icons/md";
import {MdFormatClear } from "react-icons/md";
import { useRecoilState } from "recoil";
import { atomInputRef } from "../AtomData/atom";
import { Divider } from '@mui/material';
import FontJustifyDropDown from '../Components/FontJustifyDropDown';
import { useRef, useState } from 'react';

export default function IconBar() {
    const [inputRef, setInputRef] = useRecoilState(atomInputRef)
    const [color, setColor] = useState("black")
   
    const colorRef = useRef(null)
    function handleBold() {
        document.execCommand("bold")
        console.log("a")
       }
       function handleItalic() {
        document.execCommand("italic")
       }
       function handleUnderLine() {
        document.execCommand("underline")
       }
       function handleColorClick() {
         colorRef.current.click()
       }
       function handleColorChange(event) {
         document.execCommand("foreColor","", event.target.value)
         setColor(event.target.value)
       }
    function handleUndo() {
        
    }
    function handleRedo() {
        
    }
  return (
      <div>
          <div className={styles.mainDiv} >
              <BiUndo onClick={handleUndo} className={styles.actionIcon} />
              <BiRedo onClick={handleRedo} className={styles.actionIcon} />
              <AiOutlinePrinter className={styles.actionIcon} />
              <MdSpellcheck  className={styles.actionIcon}/>
              <TfiPaintRoller className={styles.actionIcon}/>
              <select className={styles.fontSizeDropDown}>
                  <option>Fit</option>
                  <Divider/>
                  <option>50%</option>
                  <option>75%</option>
                  <option>90%</option>
                  <option>100%</option>
                  <option>125%</option>
                  <option>150%</option>
                  <option>200%</option>
              </select>
              <button>+</button>
              <span>11</span>
              <button>-</button>
              <button><BsTypeBold onClick={handleBold} className={styles.actionIcon}/></button>
              <BiItalic onClick={handleItalic} className={styles.actionIcon}/>
              <ImUnderline onClick={handleUnderLine}  className={styles.actionIcon}/>
              <MdOutlineFormatColorText onClick={handleColorClick}color={color} className={styles.actionIcon} />
              <input id={styles.inputColor} type='color' ref={colorRef} onChange={handleColorChange}  />
              <FaHighlighter className={styles.actionIcon} />
              <MdOutlineInsertLink className={styles.actionIcon}/>
              <BiCommentAdd className={styles.actionIcon}/>
              <MdOutlineInsertPhoto className={styles.actionIcon}/>
           <FontJustifyDropDown/>

          </div>
    </div>
  )
}
