import React, { useReducer, useEffect, useState } from "react";
import * as api from "../../services/api";
import * as mainPagehelper from "./mainpageHelper";

const addToRead = "addToRead";
const addToWantToRead = "addToWantToRead";
const addToCurrentlyRead = "addToCurrentlyRead";
const removeFromRead = "removeFromRead";
const removeFromWantToRead = "removeFromWantToRead";
const removeFromCurrentlyRead = "removeFromCurrentlyRead";
const currentlyReading = "currentlyReading";
const read = "read";
const wantToRead = "wantToRead";
const reducer = (state, action) => {
  switch (action.type) {
    case addToRead:
      const ns = {
        ...state,
        read: {
          shelf: read,
          data: [...state[read].data, { ...action.book, shelf: read }],
        },
      };

      return ns;
      break;
    case addToCurrentlyRead:
      return {
        ...state,
        currentlyReading: {
          shelf: currentlyReading,
          data: [
            ...state[currentlyReading].data,
            { ...action.book, shelf: currentlyReading },
          ],
        },
      };
      break;
    case addToWantToRead:
      return {
        ...state,
        wantToRead: {
          shelf: wantToRead,
          data: [
            ...state[wantToRead].data,
            { ...action.book, shelf: wantToRead },
          ],
        },
      };
      break;
    case removeFromRead:
      const ns1 = {
        ...state,
        read: {
          shelf: read,
          data: state[read].data.filter((book) => book.id != action.book.id),
        },
      };
      return ns1;
      break;
    case removeFromCurrentlyRead:
      return {
        ...state,
        currentlyReading: {
          shelf: currentlyReading,
          data: state[currentlyReading].data.filter(
            (book) => book.id != action.book.id
          ),
        },
      };
      break;
    case removeFromWantToRead:
      return {
        ...state,
        wantToRead: {
          shelf: wantToRead,
          data: state[wantToRead].data.filter((book) => book.id != action.book.id),
        },
      };
      break;
    case "setState":
      return action.state;
      break;
    default:
      return state;
      break;
  }
};

function useHookMainPage() {
  const [books, dispatch] = useReducer(reducer, {});
  const [musetGetBooks, setmusetGetBooks] = useState(true);
  useEffect(() => {
    if (musetGetBooks) {
      const _getBooks = async () => {
        const res = await api.getAll();
        const paresing = mainPagehelper.categorizeBooks(res);
        dispatch({
          type: "setState",
          state: paresing,
        });
      };
      _getBooks();
    }
  }, [musetGetBooks]);
  function _addToread(book) {
    dispatch({ type: addToRead, book });
  }
  function _addTowantToRead(book) {
    dispatch({ type: addToWantToRead, book });
  }
  function _addToCurrentlyRead(book) {
    dispatch({ type: addToCurrentlyRead, book });
  }
  function _removeFromRead(book) {
    dispatch({ type: removeFromRead, book });
  }
  function _removeFromWantToRead(book) {
    dispatch({ type: removeFromWantToRead, book });
  }
  function _removeFromCurrentlyRead(book) {
    dispatch({ type: removeFromCurrentlyRead, book });
  }
  const actionsObj = {
    _addToCurrentlyRead,
    _addToread,
    _addTowantToRead,
    _removeFromCurrentlyRead,
    _removeFromRead,
    _removeFromWantToRead,
  };
  return {
    books,
    actionsObj,
    setmusetGetBooks,
    dispatch,
  };
}

export default useHookMainPage;
