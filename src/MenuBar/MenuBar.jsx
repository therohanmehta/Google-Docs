import * as React from "react";
import { VideoIconDropDown } from '../Components/VideoIconDropDown'
import EditDropDown from "../Components/EditDropDown";
import FileDropDown from "../Components/FileDropDown";
import styles from "./MenuBar.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import Button from "@mui/material/Button";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ViewDropDown from "../Components/ViewDropDown";
import InsertDropDown from "../Components/InsertDropDown";
import FormatDropDown from "../Components/FormatDropDown";
import ToolsDropDown from '../Components/ToolsDropDown'
import ExtensionsDropDown from '../Components/ExtensionsDropDown'
import HelpDropDown from '../Components/HelpDropDown'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useRecoilState } from "recoil";
import { atomFileName } from "../AtomData/atom";

export default function MenuBar() {

  const [fileName, setFileName] = useRecoilState(atomFileName)
  const [isFav, setIsFav] = React.useState(false)
  return (
    <div className={styles.maindiv}>
      
      <div className={styles.wrapper}>
        <img  className={styles.docIcon} src="/docImg.png" />
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <div className={styles.leftSection}>
              <input  value={fileName} onChange={(e) => setFileName(e.target.value)} />&nbsp;
              {isFav ? <StarOutlinedIcon onClick={() => setIsFav(!isFav)} style={{color:'royalblue'}} fontSize="small"/>
                : <StarBorderOutlinedIcon onClick={() => setIsFav(!isFav)}  fontSize="small"/>}   
              <DriveFileMoveOutlinedIcon fontSize="small" />
              <CloudDoneOutlinedIcon fontSize="small" />
            </div>
            <div className={styles.rightSection}>
              <HistoryOutlinedIcon onClick={()=>console.log(fileName)} fontSize="medium" />
              <InsertCommentOutlinedIcon fontSize="medium" />
            <VideoIconDropDown/>

              <Button
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#c2e7ff",
                  color: "black",
                  textTransform: "none",
                }}
                variant="contained"
                startIcon={<LockOutlinedIcon />}
              >
                Share
              </Button>
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
            </div>
          </div> 
          <div className={styles.menu}>
            <FileDropDown />
            <EditDropDown />
            <ViewDropDown />
            <InsertDropDown />
            <FormatDropDown />
            <ToolsDropDown />
            <ExtensionsDropDown />
            <HelpDropDown/>
          </div>
        </div>
      </div>
    </div>
  );
}
