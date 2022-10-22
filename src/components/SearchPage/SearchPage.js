import React, { useEffect, useState } from "react";
import "./searchpage.css";
import Book from "../Book/Book";
import Search from "./search/Search";
import { Grid } from "@mui/material";
function SearchPage({ actions }) {
  const [booksResult, setbooksResult] = useState([]);
  function handleBooksResult(arr = []) {
    setbooksResult(arr);
  }

  const bookStatesAndActions = [
    {
      add: actions._addToread,
      remove: actions._removeFromRead,
      shelf: "read",
    },
    {
      add: actions._addToCurrentlyRead,
      remove: actions._removeFromCurrentlyRead,
      shelf: "currentlyReading",
    },
    {
      add: actions._addTowantToRead,
      remove: actions._removeFromWantToRead,
      shelf: "wantToRead",
    },
  ];
  return (
    <div className="search-page">
      <Search handleBooksResult={handleBooksResult} />
      <div className="container results-holder">
        <Grid container spacing={2}>
          {booksResult.map((book) => (
            <Grid key={book.id} item xs={3}>
              <Book id={book.id} actions={bookStatesAndActions} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default SearchPage;
