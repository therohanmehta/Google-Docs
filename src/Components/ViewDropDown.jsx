import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from './DropDown.module.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useRecoilState } from "recoil";
import { Divider } from "@mui/material";
import { showRuler } from "../AtomData/atom";
export default function ViewDropDown() {
  const [open, setOpen] = React.useState(false);
  const [rulerVisibility , setRulerVisibility]=useRecoilState(showRuler)
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

function handleRuler(){
  setRulerVisibility(!rulerVisibility)
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
          
            View
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
                       <CreateOutlinedIcon fontSize="small"/>&nbsp; Mode
                                          </MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <DoneOutlinedIcon fontSize="small"/>&nbsp; Show print layout
                      </MenuItem>

                    { rulerVisibility?<MenuItem sx={{ fontSize: "small" }}  onClick={handleRuler}>
                      <DoneOutlinedIcon fontSize="small"/>&nbsp; Hide Ruler
                      </MenuItem>: <MenuItem sx={{ fontSize: "small" }}  onClick={handleRuler}>
                      <DoneOutlinedIcon fontSize="small"/>&nbsp; Show Ruler
                      </MenuItem>}

                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <DoneOutlinedIcon/>&nbsp; Show outline
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
