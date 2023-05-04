

import React from 'react'
import style from "./Button.module.css"
function Button({BiUndo, BiRedo,AiOutlinePrinter }) {
  return (
    <div>
      <button className={style.btn}>{BiUndo }{ BiRedo }{AiOutlinePrinter}</button>
    </div>
  )
}

export default Button