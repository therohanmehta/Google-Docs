import React from 'react'
import style from './TextArea.module.css'
function TextArea() {
    
  return (
    < >
  
    <br />
    <br />
    <div className={style.wholeArea}>
        <div contentEditable className={style.txtArea}></div>
      


    </div>
    </>
  )
}

export default TextArea
