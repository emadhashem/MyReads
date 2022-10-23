import React, { useEffect, useState } from "react";
import "./searchpage.css";
import Book from "../Book/Book";
import Search from "./search/Search";
import { Grid } from "@mui/material";
import { get } from "../../services/api";
function SearchPage({ actions, books }) {
  const [booksResult, setbooksResult] = useState([]);
  function handleBooksResult(arr = []) {
  
    setbooksResult(arr.map(book => ({
      ...book,
      shelf : getShelf(books, book.id)
    })));
  }
  const  getShelf = (books , id) => {
    let ret = "none"
    Object.keys(books).forEach(shelfType => {
      books[shelfType].data.forEach(book => {
        if(book.id === id) ret = shelfType
      })
    })
    return ret
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
