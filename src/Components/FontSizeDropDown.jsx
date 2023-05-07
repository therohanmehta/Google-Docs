import * as React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../AtomData/atom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { fontSize } from "../IconBar/data";
import styles from './DropDown.module.css'
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function FontSizeDropDown() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(4);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

    function handleFontSizeChange(fontSize) {
        console.log(fontSize);
        document.execCommand("fontName", "", fontSize);
        setSelected(fontSize);
      
        setAnchorEl(null);
    }
 
  return (
      <div style={{display:'flex'}}>
          <Button onClick={()=>setSelected(selected-1)}>-</Button>
          <Button
              className={styles.FontBtn}
        sx={{
          color: "black",
                 
          textTransform:'none'
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              contentEditable
      >
              {selected}
             
      </Button>
      <Menu
        onChange={handleFontSizeChange}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", border:'1px solid' }}
      >
        {fontSize.map((ele) => (
          <MenuItem
            onClick={() => handleFontSizeChange(ele)}
            sx={{
              fontFamily: ele,
              width: "15rem",
            }}
          >
            {ele}
          </MenuItem>
        ))}
          </Menu>
          <Button onClick={()=>setSelected(selected+1)}>+</Button>
    </div>
  );
}
