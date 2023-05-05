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

  BiCommentAdd,
  MdFormatLineSpacing,
  MdChecklist,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdFormatClear,
  handleBold,
  handleColor

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

        {BiCommentAdd}
        {MdFormatLineSpacing}
        {MdChecklist}
        {MdFormatListBulleted}
        {MdFormatListNumbered}
        {MdFormatIndentDecrease}
        {MdFormatIndentIncrease}
        {MdFormatClear}

      </button>
    </div>
  );
}

export default Button;
