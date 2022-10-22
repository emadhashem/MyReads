import React, { useEffect, useState } from "react";
import "./searchpage.css";
import Book from "../Book/Book";
import Search from "./search/Search";
import { Grid } from "@mui/material";
import { get } from "../../services/api";
function SearchPage({ actions }) {
  const [booksResult, setbooksResult] = useState([]);
  function handleBooksResult(arr = []) {
   // return console.log(arr)
    setbooksResult(arr);
  }
  async function getShelf(id) {
    const res = await get(id)
    const {shelf} = res;
    return res
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
              <Book
                id={book.id}
                title={book.title}
                authors={book.authors}
                shelfName={book.shelf}
                imageLinks={book.imageLinks}
                actions={bookStatesAndActions} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default SearchPage;
