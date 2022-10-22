import { Divider, Typography } from "@mui/material";
import React from "react";

function ShelfBar({ title = "Currently Reading" }) {
  return (
    <div style={{marginTop : 15}}>
      <Typography
        variant="h4"
        noWrap
        sx={{
          mr: 2,
          display: { md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {title}
      </Typography>
      <Divider />
    </div>
  );
}

export default ShelfBar;
