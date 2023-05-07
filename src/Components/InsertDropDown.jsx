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
import styles from "./DropDown.module.css";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';

import { Divider, SwipeableDrawer } from "@mui/material";
import ContentCopyOutlined from "@mui/icons-material/ContentCopyOutlined";
import { useRef } from "react";

export default function InsertDropDown() {
  const imageRef = useRef(null)
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

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  function handleAddHorizontalRule() {
    document.execCommand('insertHorizontalRule')
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
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
    handleClose(" ")
  }
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
            Insert
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
                      <MenuItem
                        sx={{fontSize: "small"   }}
                        onClick={handleInputImage}
                      >
                        <ImageOutlinedIcon fontSize="small" />
                        &nbsp; Image
                        <input onChange={handleImageChange} ref={imageRef} accept="image/*" type='file' hidden />
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <TableChartOutlinedIcon fontSize="small" />
                        &nbsp; Table
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <DashboardCustomizeOutlinedIcon fontSize="small" />
                        &nbsp; Drawing
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <InsertChartOutlinedIcon fontSize="small" />
                        &nbsp; Chart
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleAddHorizontalRule}>
                      <HorizontalRuleOutlinedIcon fontSize="small" />
                        &nbsp; Horizontal line
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <MoodOutlinedIcon fontSize="small" />
                        &nbsp; Emoji
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <SegmentOutlinedIcon fontSize="small" />
                        &nbsp; Smart chips
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <MoodOutlinedIcon fontSize="small" />
                        &nbsp; Drop-down
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <SegmentOutlinedIcon fontSize="small" />
                        &nbsp; Footnote
                                          </MenuItem>
                                          <Divider />
                                          <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <MoodOutlinedIcon fontSize="small" />
                        &nbsp; Building blokcs
                                          </MenuItem>
                                          <Divider />
                                          <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <MoodOutlinedIcon fontSize="small" />
                        &nbsp; Special characters
                                          </MenuItem>
                                          <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <DescriptionOutlinedIcon fontSize="small" />
                        &nbsp; Watermark
                                          </MenuItem>
                                          <Divider />
                                           <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <CalendarViewDayOutlinedIcon fontSize="small" />
                        &nbsp; Headers and footers
                                          </MenuItem>
                                           <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <NumbersOutlinedIcon fontSize="small" />
                        &nbsp; Page numbers
                                          </MenuItem>
                                           <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <InsertPageBreakOutlinedIcon fontSize="small" />
                        &nbsp; Break
                                          </MenuItem>
                                           <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <FunctionsOutlinedIcon fontSize="small" />
                        &nbsp; Equation
                                          </MenuItem>
                                          <Divider />
                                          <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <InsertLinkOutlinedIcon fontSize="small" />
                        &nbsp; Link
                                          </MenuItem>
                                          <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <AddCommentOutlinedIcon fontSize="small" />
                        &nbsp; Comment
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
