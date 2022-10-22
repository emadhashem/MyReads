import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BasicPopover from '../popover/PopOver'
import './book.css'
function Book({ title: title_,
  authors: authors_,
  shelf: shelf_,
  imageLinks: imageLinks_, actions = [], id }) {

  const [mustFetch, setmustFetch] = useState(true)
  const [title, settitle] = useState('')
  const [authors, setauthors] = useState([])
  const [img, setimg] = useState('')
  const [shelf, setshelf] = useState('')
  useEffect(() => {
    if (mustFetch) {
      settitle(title_)
      setauthors(authors_)
      setimg(imageLinks_.smallThumbnail)
      setshelf(shelf_)
    }
    return () => {
      setmustFetch(false)
    }
  }, [])
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
        <img alt={title} src={img} />
        <BasicPopover id={id} data={actions} book={{
          title: title_, authors: authors_,
          shelf: shelf_,
          imageLinks: imageLinks_,
          id
        }}
          curShelf={shelf} handleChangeShelf={handleChangeShelf} />
      </div>
      <div className='title-authors-holder' >
        <p>{title}</p>
        <p>{authors}</p>
      </div>
    </Card>
  )
}

export default Book