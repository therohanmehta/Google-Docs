import * as React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../AtomData/atom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { size } from "../IconBar/data";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function SizeDropDown() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("100%");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleSizeChange(size) {
    console.log(size);
    setAnchorEl(null);
    setSelected(size);

    if (size === "100%") {
      inputRef.current.style.transform = "scale(1,1)";
    } else if (size === "50%") {
      inputRef.current.style.transform = "scale(0.5,1)";
    } else if (size === "75%") {
      inputRef.current.style.transform = "scale(0.8,1)";
    }
     else if (size === "125%") {
      inputRef.current.style.transform = "scale(1.25,1)";
    }
    else if (size === "150%") {
      inputRef.current.style.transform = "scale(1.5,1)";
    } else if (size === "200%") {
      inputRef.current.style.transform = "scale(1.7,1)";
    }
  }

  return (
    <div>
      <Button
        sx={{
          color: "black",
          fontFamily: selected,
          textTransform: "none",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selected}
        <ArrowDropDownOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex" }}
      >
        {size.map((ele) => (
          <MenuItem
            onClick={() => handleSizeChange(ele)}
            sx={{
              fontFamily: ele,
              width: "15rem",
            }}
          >
            {ele}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
