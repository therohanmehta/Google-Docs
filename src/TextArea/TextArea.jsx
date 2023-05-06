import React,{useRef} from 'react'
import style from './TextArea.module.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

function TextArea() {
  const divRef = useRef(null);

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


    function printPage(){
      
      const content = divRef.current.innerHTML;
      const printWindow = window.open('');
      printWindow.document.write(`
    <title> my odf </title>
            ${content}
      `);
      printWindow.document.close();
      printWindow.print();
    }
  return (
    < >
    <br />
    <br />
    <div className={style.wholeArea}>
     <PictureAsPdfIcon onClick={downloadPdf}/>
        <div id='textPage' ref={divRef} contentEditable={true} className={style.txtArea}></div>
     <LocalPrintshopIcon onClick={printPage}/>
      


    </div>
    </>
  )
}

export default TextArea
