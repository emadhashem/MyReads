import { Button } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from "react-router-dom";
function FlowBtn({title = "" , onClick}) {
  
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "1%",
        top: "5%",
      }}
    >
      <AddCircleOutlineIcon fontSize="large"  /> 
      <span>{title}</span>
    </Button>
  );
}

export default FlowBtn;
