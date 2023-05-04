import * as React from "react";
import { useRecoilState } from "recoil";
import { atomFileDropDown } from "../AtomData/atom";
import { VideoIconDropDown } from '../Components/VideoIconDropDown'
import EditDropDown from "../Components/EditDropDown";
import FileDropDown from "../Components/FileDropDown";
import styles from "./MenuBar.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import Button from "@mui/material/Button";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ViewDropDown from "../Components/ViewDropDown";
import InsertDropDown from "../Components/InsertDropDown";
import FormatDropDown from "../Components/FormatDropDown";
export default function MenuBar() {
  return (
    <div>
      
      <div className={styles.wrapper}>
        <img className={styles.docIcon} src="/docImg.png" />
        <div className={styles.innerWrapper}>
          <div className={styles.header}>
            <div className={styles.leftSection}>
              <span contentEditable="true">Untitled Document</span>&nbsp;
              <StarBorderOutlinedIcon fontSize="small" />
              <DriveFileMoveOutlinedIcon fontSize="small" />
              <CloudDoneOutlinedIcon fontSize="small" />
            </div>
            <div className={styles.rightSection}>
              <HistoryOutlinedIcon fontSize="medium" />
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
            <FormatDropDown/>
          </div>
        </div>
      </div>
    </div>
  );
}
