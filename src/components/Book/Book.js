import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BasicPopover from '../popover/PopOver'
import './book.css'
function Book({ title: title_,
  authors: authors_,
  shelfName,
  imageLinks: imageLinks_, actions = [], id }) {
  const [shelf, setshelf] = useState(shelfName)
  function handleChangeShelf(newShelf) {
    setshelf(newShelf)
  }
  return (
    <Card sx={{
      width: '100%', height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }} >
      <div className='img-holder' >
        <img alt={title_} src={imageLinks_?.smallThumbnail} />
        <BasicPopover id={id} data={actions} book={{
          title: title_, authors: authors_,
          shelf,
          imageLinks: imageLinks_,
          id,
          
        }}
          curShelf={shelf} handleChangeShelf={handleChangeShelf} />
      </div>
      <div className='title-authors-holder' >
        <p>{title_}</p>
        <p>{authors_}</p>
      </div>
    </Card>
  )
}

export default Book