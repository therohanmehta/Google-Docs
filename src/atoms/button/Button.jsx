import React from "react";
import style from "./Button.module.css";
function Button({
  BiUndo,
  BiRedo,
  AiOutlinePrinter,
  MdSpellcheck,
  TfiPaintRoller,
  BsTypeBold,
  BiItalic,
  ImUnderline,
  MdOutlineFormatColorText,
  FaHighlighter,
  MdOutlineInsertPhoto,
  BiAlignLeft,
  MdOutlineInsertLink,
}) {
  return (
    <div>
      <button className={style.btn}>
        {BiUndo}
        {BiRedo}
        {AiOutlinePrinter}
        {MdSpellcheck}
        {TfiPaintRoller}
        {BsTypeBold}
        {BiItalic}
        {ImUnderline}
        {MdOutlineFormatColorText}
        {FaHighlighter}
        {MdOutlineInsertPhoto}
        {BiAlignLeft}
        {MdOutlineInsertLink}
      </button>
    </div>
  );
}

export default Button;
