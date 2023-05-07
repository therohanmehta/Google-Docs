import ArticleIcon from "@mui/icons-material/Article";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from './DropDown.module.css'
import { Divider } from "@mui/material";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useRecoilValue,useRecoilState } from "recoil";
import { atomInputRef,atomFileName } from "../AtomData/atom";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';

export default function FileDropDown() {
  const inputRef = useRecoilValue(atomInputRef)
  const [fileNameRef,setFileNameRef ]= useRecoilState(atomFileName)
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleNew() {
    setFileNameRef('New Document')
    inputRef.current.innerHTML = ""
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;

    }

    setOpen(false);
 }
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  async function downloadPdf() {

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    const sheetContent = inputRef.current;
  const canvas = await html2canvas(sheetContent,);
  const imageData = canvas.toDataURL("image/png", 1.0);
  const pdfDoc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: false,
  });
  pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${fileNameRef}.pdf`);
  
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <div>
        <button
           className={styles.dropDownBtn}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            File
          </button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      sx={{ width: "20rem" }}
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleNew}>
                      <ArticleIcon fontSize="small"/>&nbsp;  New
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <FolderOpenOutlinedIcon fontSize="small"/>&nbsp;  Open
                      </MenuItem>
                      
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={downloadPdf}>
                      <FileDownloadOutlinedIcon fontSize="small"/>&nbsp;  Download
                                          </MenuItem>
                                          
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <DriveFileRenameOutlineOutlinedIcon fontSize="small"/>&nbsp;  Rename
                      </MenuItem>
                      
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </>
  );
}
