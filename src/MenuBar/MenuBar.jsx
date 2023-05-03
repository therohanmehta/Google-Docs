import * as React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./MenuBar.module.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import Button from "@mui/material/Button";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import ArticleIcon from '@mui/icons-material/Article';
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import DropDown from "../Components/DropDown";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FolderOpen from "@mui/icons-material/FolderOpen";
import FileCopyOutlined from "@mui/icons-material/FileCopyOutlined";

export default function MenuBar() {

  const videoDropDown = {
    style:{color:'black'},
    endIcon:<ArrowDropDownOutlinedIcon/>,
    head: <VideoCallOutlinedIcon />,
    list: [
      {
        text: "Start a new meeting",
        icon: <AddOutlinedIcon />,
      },
       { text: "Use a meeting code",
      icon:<KeyboardOutlinedIcon/>}
    ]
  }
  const fileDropDown = {
    style: {
      color: 'black',
      textTransform: 'none',
      padding: '0px 0px',
      minWidth:'50px'
      
    },
    listStyle: {
      fontSize:'small'
    },
    head: "File",
    list:[{
      text: "New",
      icon: <ArticleIcon fontSize="small" />,
    }, {
      text: 'Open',
      icon:<FolderOpen fontSize="small"/>
    },{
      text: 'Make a Copy',
      icon:<FileCopyOutlined fontSize="small"/>
    },{
      text: 'Download',
      icon:<FileDownloadOutlinedIcon fontSize="small"/>
    },]
  }
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

              <DropDown array={videoDropDown}   />

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
          <DropDown array={fileDropDown}  />
          </div>
        </div>
      </div>
    </div>
  );
}
