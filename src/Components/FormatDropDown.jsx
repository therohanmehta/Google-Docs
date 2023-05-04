import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from './DropDown.module.css'
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarViewDayOutlinedIcon from '@mui/icons-material/CalendarViewDayOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import FormatClearOutlinedIcon from '@mui/icons-material/FormatClearOutlined';

import { Divider } from "@mui/material";
import FormatAlignJustifyOutlined from "@mui/icons-material/FormatAlignJustifyOutlined";

export default function FormatDropDown() {
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
          
            Format
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
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                                              <FormatBoldOutlinedIcon fontSize="small" />&nbsp; Text
                                              </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                                              <FormatAlignJustifyOutlinedIcon fontSize="small" />&nbsp; Paragraph style
                                              </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                                              <FormatIndentIncreaseOutlinedIcon fontSize="small" />&nbsp; Align and indent
                                              </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                                              <FormatLineSpacingOutlinedIcon fontSize="small" />&nbsp; Line and paragraph spacing
                                              </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                                              <ViewColumnOutlinedIcon fontSize="small" />&nbsp; Columns
                                              </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <FormatListBulletedOutlinedIcon fontSize="small"/>&nbsp; Bullets and numbering
                                          </MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <CalendarViewDayOutlinedIcon fontSize="small"/>&nbsp; Headers and footers
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <NumbersOutlinedIcon fontSize="small"/>&nbsp; Page numbers
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <RestorePageOutlinedIcon/>&nbsp; Page orientations
                      </MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <TableChartOutlinedIcon fontSize="small"/>&nbsp; Table
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <ImageOutlinedIcon fontSize="small"/>&nbsp; Image
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <HorizontalRuleOutlinedIcon/>&nbsp; Border and lines
                      </MenuItem>
                      <Divider/>
                                          <MenuItem sx={{ fontSize: "small", fontWeight:'bold' }} onClick={handleClose}>
                      <FormatClearOutlinedIcon  sx={{ fontSize: "medium" }}/>&nbsp; Clear formatting
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
