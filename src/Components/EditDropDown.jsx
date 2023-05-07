import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from "./DropDown.module.css";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import { atom, useRecoilValue } from "recoil";
import { atomInputRef } from "../AtomData/atom";
import { Divider } from "@mui/material";
export default function EditDropDown() {
  const inputRef = useRecoilValue(atomInputRef)
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

  function handleAction(action) {
    document.execCommand(action)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
  
    setOpen(false);
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
            Edit
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
                      <MenuItem sx={{ fontSize: "small" }} onClick={()=>handleAction("undo")}>
                        <UndoOutlinedIcon fontSize="small" />
                        &nbsp; Undo
                      </MenuItem>
                      <MenuItem  sx={{ fontSize: "small" }} onClick={()=>handleAction("redo")}><RedoOutlinedIcon fontSize="small" />
                                              &nbsp; Redo</MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={()=>handleAction("cut")}><ContentCutOutlinedIcon fontSize="small" />
                        &nbsp; Cut</MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={()=>handleAction("copy")}><ContentCopyOutlinedIcon fontSize="small" />
                        &nbsp; Copy</MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={()=>handleAction("paste")}><ContentPasteOutlinedIcon fontSize="small" />
                        &nbsp; Paste</MenuItem>
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
