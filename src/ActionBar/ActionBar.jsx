import React,{useRef, useState} from "react";
import style from "./ActionBar.module.css";
import Button from "../atoms/button/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BiUndo } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
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
import { useRecoilValue } from "recoil";
import { fontFamily } from "../IconBar/data";
import FontJustifyDropDown from "../Components/FontJustifyDropDown";
import { atomFileName, atomInputRef } from "../AtomData/atom";
import FontFamilyDropDown from "../Components/FontFamilyDropDown";
import FontSizeDropDown from "../Components/FontSizeDropDown";
import SizeDropDown from "../Components/SizeDropDown";
import FontStyleDropDown from "../Components/FontStyleDropDown";

function ActionBar() {
  const inputRef = useRecoilValue(atomInputRef)
  const fileName = useRecoilValue(atomFileName)
  const imageRef = useRef(null)
  const colorRef = useRef(null)
  const bcgColorRef =useRef(null)
  const [color, setColor] = useState("black")

  const [zoom, setZoom] = React.useState("");
  const handleChange = (event) => {
    setZoom(event.target.value);
  };
  function handleBold() {
   document.execCommand("bold")
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
  function handleBcgColorClick() {
    bcgColorRef.current.click()
  }
  function handleBcgColorChange(event) {
    document.execCommand('backColor', "", event.target.value)
      
  }
  function handleUndo() {
    document.execCommand("undo")

  }
  function handleRedo() {
    document.execCommand("redo")

  }
  function handleStrike() {
    document.execCommand("strikeThrough")

  }
  function handleInputImage() {
    imageRef.current.click();
  }
  function handleImageChange(event) {
    if (event.target.files[0] ) {

      let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "50%"; 
      img.style.maxHeight = "50%"; 

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    }
  }
  async function downloadPDF (){
  const sheetContent = inputRef.current;
  const canvas = await html2canvas(sheetContent,);
  const imageData = canvas.toDataURL("image/png");
  const pdfDoc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: false,
  });
  pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
  pdfDoc.save(`${fileName}.pdf`);
  console.log(inputRef.current.innerHTML)
  }

  function printPage(){
      
    const content = inputRef.current.innerHTML;
    const printWindow = window.open('');
    printWindow.document.write(`
  <title> ${fileName} </title>
          ${content}
`);
    printWindow.document.close();
    printWindow.print();
  }
  return (
    <div className={style.container} >
      <div className={style.innerContainer}>
        <div className={style.leftActionBar}>
          <button onClick={handleUndo} ><BiUndo style={{ fontSize: "1.2rem" }} /></button>
          <button onClick={handleRedo}><BiRedo style={{ fontSize: "1.2rem" }} /></button>
          <button onClick={printPage} ><AiOutlinePrinter style={{ fontSize: "1.2rem" }} /></button>
          <Button
            MdSpellcheck={<MdSpellcheck style={{ fontSize: "1rem" }} />}
          />
          <Button
            TfiPaintRoller={<TfiPaintRoller style={{ fontSize: "1rem" }} />}
          />
        </div>

          <button onClick={downloadPDF} style={{padding:'0.1px'}}><PictureAsPdfIcon/></button>
        <div className={style.zoomSelector}>
        <form action="/action_page.php">
  

            <div style={{display:'flex', width:'20rem', }}>
               <SizeDropDown />
               <FontStyleDropDown/>
                <FontFamilyDropDown />
                <FontSizeDropDown/>
        </div>
        
 
</form>
         
        </div>
        <div className={style.textType}>
          <button onClick={handleBold}><BsTypeBold  style={{ fontSize: "1rem", }} /></button>
          <button onClick={handleItalic}><BiItalic style={{ fontSize: "1rem" }} /></button>
        <button  onClick={handleStrike}><AiOutlineStrikethrough style={{ fontSize: "1rem" }} /></button>
          <button onClick={handleUnderLine}><ImUnderline style={{ fontSize: "1rem", }} /></button>
          <button onClick={handleColorClick}><MdOutlineFormatColorText  style={{ color:color, fontSize: "1rem" }} /></button>
          <input id={style.inputColor} type='color' ref={colorRef} onChange={handleColorChange}  />
          <button onClick={handleBcgColorClick}><FaHighlighter style={{ fontSize: "1rem" }} /></button>
          <input id={style.inputColor} type='color' ref={bcgColorRef} onChange={handleBcgColorChange}  />
        </div>
        <div className={style.boxD}>
            <Button BiCommentAdd={<BiCommentAdd style={{ fontSize: "1rem" }} />}/>
        <button onClick={handleInputImage}>
         <MdOutlineInsertPhoto style={{ fontSize: "1rem" }} />
          </button>
          <input onChange={handleImageChange} ref={imageRef} accept="image/*" type='file' hidden />
          
        </div>
        <div className={style.boxE}>
        <FontJustifyDropDown/>
          <Button
            MdFormatLineSpacing={<MdFormatLineSpacing style={{ fontSize: "1rem" }} />}
          />
           <Button
            MdChecklist={<MdChecklist style={{ fontSize: "1rem" }} />}
          />
            <Button
            MdFormatListBulleted={<MdFormatListBulleted style={{ fontSize: "1rem" }} />}
          />
            <Button
            MdFormatListNumbered={<MdFormatListNumbered style={{ fontSize: "1rem" }} />}
          />
          <Button
            MdFormatIndentDecrease={<MdFormatIndentDecrease style={{ fontSize: "1rem" }} />}
          />
          <Button
            MdFormatIndentIncrease={<MdFormatIndentIncrease style={{ fontSize: "1rem" }} />}
          />
          <Button
            MdFormatClear={<MdFormatClear style={{ fontSize: "1rem" }} />}
          />
        </div>
      </div>
    </div>
  );
}
export default ActionBar;
