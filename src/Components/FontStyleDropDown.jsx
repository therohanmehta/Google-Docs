import * as React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../AtomData/atom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {  fontStyle } from "../IconBar/data";
import styles from './DropDown.module.css'
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function FontStyleDropDown() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("Normal Text");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

    function handleFontStyleChange(tag,text) {
      
        document.execCommand("formatBlock", "", tag);
        setSelected(text);
      
        setAnchorEl(null);
    }
 
    return (
      
            
      <div className={styles.fontSizeMainDiv} style={{display:'flex'}}>
        
          <Button
              
                sx={{
            width:'8rem',
          color: "black",
                 border:'1px solid black',
          textTransform:'none'
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
          
      >
              {selected}
             <ArrowDropDownOutlinedIcon/>
      </Button>
      <Menu
        onChange={handleFontStyleChange}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", border:'1px solid' }}
      >
        {fontStyle.map((ele) => (
          <MenuItem
            onClick={() => handleFontStyleChange(ele.tag,ele.text)}
            sx={{
              
              width: "10rem",
            }}
          >
            {ele.text}
          </MenuItem>
        ))}
          </Menu>
            </div>
          
  );
}
