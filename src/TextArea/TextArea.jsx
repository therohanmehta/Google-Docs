import React,{useEffect, useRef} from 'react'
import style from './TextArea.module.css'
import { useSetRecoilState } from 'recoil'
import { atomInputRef } from '../AtomData/atom'
function TextArea() {
  const inputRef = useRef(null)
  const setInputRef = useSetRecoilState(atomInputRef)
  useEffect(() => {
    setInputRef(inputRef)
  },[])
  return (
    < >
  
    <br />
      <br />

    <div className={style.wholeArea}>
        <div contentEditable
          ref={inputRef}
          className={style.txtArea}></div>
      


    </div>
    </>
  )
}

export default TextArea
