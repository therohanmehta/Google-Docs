import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from './DropDown.module.css'
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DatasetLinkedOutlinedIcon from '@mui/icons-material/DatasetLinkedOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import { Divider } from "@mui/material";


export default function ToolsDropDown() {
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
          
            Tools
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
                       <SpellcheckOutlinedIcon fontSize="small"/>&nbsp; Spelling and grammer
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <ArticleOutlinedIcon fontSize="small"/>&nbsp; Word count
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <RateReviewOutlinedIcon fontSize="small"/>&nbsp; Reveiw suggested edits
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <CompareArrowsIcon fontSize="small"/>&nbsp; Compare documents
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <FormatQuoteIcon fontSize="small"/>&nbsp; Citations
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <ReviewsOutlinedIcon fontSize="small"/>&nbsp; Explore
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <DatasetLinkedOutlinedIcon fontSize="small"/>&nbsp; Linked objects
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <ManageSearchOutlinedIcon fontSize="small"/>&nbsp; Dictionary
                                          </MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <TranslateOutlinedIcon fontSize="small"/>&nbsp; Translate document
                                          </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                       <KeyboardVoiceOutlinedIcon fontSize="small"/>&nbsp; Voice typing
                                          </MenuItem>
                                          <Divider/>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <NotificationsNoneOutlinedIcon fontSize="small"/>&nbsp; Notification settings
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <ManageAccountsOutlinedIcon fontSize="small"/>&nbsp; Preferences
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "small" }} onClick={handleClose}>
                      <AccessibilityNewOutlinedIcon fontSize="small"/>&nbsp; Accessibility
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
