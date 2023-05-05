import React from "react";
import style from "./ActionBar.module.css";
import Button from "../atoms/button/Button";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdSpellcheck } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { ImUnderline } from "react-icons/im";
import { MdOutlineFormatColorText } from "react-icons/md";
import { FaHighlighter } from "react-icons/fa";
import { MdOutlineInsertPhoto } from "react-icons/md";
import {BiAlignLeft } from "react-icons/bi";
import {MdOutlineInsertLink } from "react-icons/md";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ActionBar() {
  const [zoom, setZoom] = React.useState("");
  const handleChange = (event) => {
    setZoom(event.target.value);
  };
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.leftActionBar}>
          <Button BiUndo={<BiUndo style={{ fontSize: "1rem" }} />} />
          <Button BiRedo={<BiRedo style={{ fontSize: "1rem" }} />} />
          <Button
            AiOutlinePrinter={<AiOutlinePrinter style={{ fontSize: "1rem" }} />}
          />
          <Button
            MdSpellcheck={<MdSpellcheck style={{ fontSize: "1rem" }} />}
          />
          <Button
            TfiPaintRoller={<TfiPaintRoller style={{ fontSize: "1rem" }} />}
          />
        </div>

        <div className={style.zoomSelector}>
          <FormControl className={style.zoom} sx={{ m: 1 }}>
            <Select
              value={zoom}
              onChange={handleChange}
              displayEmpty
              sx={{
                border: "none",
              }}
              inputProps={{ "aria-label": "Without label" }}
              className={style.Select}
            >
              <MenuItem value="">100%</MenuItem>
              <MenuItem>Fit</MenuItem>
              <MenuItem value={50}>50%</MenuItem>
              <MenuItem value={75}>75%</MenuItem>
              <MenuItem value={90}>90%</MenuItem>
              <MenuItem value={100}>100%</MenuItem>
              <MenuItem value={125}>125%</MenuItem>
              <MenuItem value={150}>150%</MenuItem>
              <MenuItem value={200}>200%</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={style.textType}>
          <Button BsTypeBold={<BsTypeBold style={{ fontSize: "1rem" }} />} />
          <Button BiItalic={<BiItalic style={{ fontSize: "1rem" }} />} />
          <Button ImUnderline={<ImUnderline style={{ fontSize: "1rem" }} />} />
          <Button MdOutlineFormatColorText={<MdOutlineFormatColorText style={{ fontSize: "1rem" }} />} />
          <Button FaHighlighter={<FaHighlighter style={{ fontSize: "1rem" }} />} />
        </div>
        <div className={style.boxD}>
        <Button
           MdOutlineInsertLink={<MdOutlineInsertLink style={{ fontSize: "1rem" }} />}
          />
        <Button
            MdOutlineInsertPhoto={<MdOutlineInsertPhoto style={{ fontSize: "1rem" }} />}
          />
          <Button
            BiAlignLeft={<BiAlignLeft style={{ fontSize: "1rem" }} />}
          />
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
