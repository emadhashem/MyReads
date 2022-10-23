import React, { useEffect, useState } from 'react';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { update } from '../../services/api';
export default function BasicPopover({
  id: bookId, data = [], curShelf = "", handleChangeShelf: _handleChangeShelf, book }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleChangeShelf = async (clickedShelf) => {
    if (clickedShelf !== curShelf) {
      await update({ id: bookId }, clickedShelf)
      _handleChangeShelf(clickedShelf)
      data.forEach(item => {
        if (item.shelf === curShelf) {
          item.remove(book)
        } else if (item.shelf === clickedShelf) {
          item.add(book)
        }
      })
    }
    handleClose();
  };
  async function handleNone() {
    await update({ id: bookId }, "none")
    _handleChangeShelf("none")
    data.forEach(item => {
      if (item.shelf === curShelf) {
        item.remove(book)
      }
    })
    handleClose();
  };
  return (
    <div style={{ position: "absolute", right: 5 }}>
      <Button
        aria-describedby={id}
        sx={{
          width: 15,
          height: 15,
          borderRadius: 50,
          backgroundColor: "green",
        }}
        variant="contained"
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {data.map((item) => (
          <Typography key={item.shelf + id} component="p" sx={{ p: 2 }}>
            <Button variant={(item.shelf === curShelf) ? "contained" : ""}
              onClick={() => handleChangeShelf(item.shelf)}>{item.shelf}</Button>
          </Typography>
        ))}

        <Typography key={'none'} component="p" sx={{ p: 2 }}>
        <Button variant={("none" === curShelf) ? "contained" : ""}
            onClick={handleNone}>None</Button>
        </Typography>

      </Popover>
    </div>
  );
}
