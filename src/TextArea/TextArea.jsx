
import React,{useRef} from 'react'
import style from './TextArea.module.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useRecoilState, useRecoilValue } from 'recoil';
import { atomFileName, atomInputRef } from '../AtomData/atom';
import { useEffect } from 'react';
function TextArea() {
  const divRef = useRef(null);
  const [inputref, setInputRef] = useRecoilState(atomInputRef)
  const fileName = useRecoilValue(atomFileName)
  useEffect(() => {
    setInputRef(divRef)
  })
   async function downloadPdf(){
      const sheetContent = document.getElementById('textPage');
    const canvas = await html2canvas(sheetContent,);
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`new.pdf`);
    }



  return (
    < >
    <br />
      <br />

    <div className={style.wholeArea}>

     <PictureAsPdfIcon onClick={downloadPdf}/>
        <div id='textPage' ref={divRef} contentEditable={true} className={style.txtArea}></div>


      


    </div>
    </>
  )
}

export default TextArea
