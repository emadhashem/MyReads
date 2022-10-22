import React, { } from 'react'
import Book from '../Book/Book'
import ShelfBar from '../Shelfbar/ShelfBar'
import Grid from '@mui/material/Grid';
import './shelf.css'

function Shelf({title = "", books = [], actions}) {
  const bookStatesAndActions = [
    {
      add : actions._addToread,
      remove : actions._removeFromRead,
      shelf : 'read'
    },
    {
      add : actions._addToCurrentlyRead,
      remove : actions._removeFromCurrentlyRead,
      shelf : 'currentlyReading'
    },
   {
      add : actions._addTowantToRead,
      remove : actions._removeFromWantToRead,
      shelf : 'wantToRead'
    }
  ]
  return (
    <div className='shelf' >
        <ShelfBar title= {title} />
        <Grid container spacing = {2} sx = {{marginTop : 5}} >
          {
            books.map(book => (
              <Grid key = {book.id} item xs={3} >
                <Book  id = {book.id} 
                title = {book.title}
                authors = {book.authors}
                actions = {bookStatesAndActions}
                shelf = {book.shelf}
                imageLinks = {book.imageLinks}
                />
              </Grid>
            ))
          }
        </Grid>
    </div>
  )
}

export default Shelf