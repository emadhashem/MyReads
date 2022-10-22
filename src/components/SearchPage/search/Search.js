import { AppBar, Button, FilledInput, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { search } from "../../../services/api";
const maxResults = 10;
function Search({ handleBooksResult = (f) => f }) {
  const [curText, setcurText] = useState("");
  const navigate = useNavigate();
  async function handleChange(text = "") {
    setcurText(text);
    if(!(text.trim())) return handleBooksResult([])
    try {
      let res = await search(text, maxResults);
      handleBooksResult(res.map(({ title , authors, id, shelf, imageLinks }) => ({ title , authors, id, shelf, imageLinks })));
    } catch (error) {
      //console.log(error);
    }
  }

  return (
    <AppBar sx={{ padding: 1, backgroundColor : 'green' }} position="fixed">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          noWrap
          component={Button}
          onClick={() => navigate(-1)}
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            width: 30,
            ":hover": {
              color: "white",
            },
          }}
        >
          <ArrowBackIcon />
        </Typography>
        <FilledInput
          value={curText}
          onChange={(event) => handleChange(event.target.value)}
          sx={{
            width: "90%",
            ":focus-within": {
              backgroundColor: "white",
            },
          }}
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
    </AppBar>
  );
}

export default Search;
