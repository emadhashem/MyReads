import React, { useEffect, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import FlowBtn from "../FlowBtn/FlowBtn";
import NavBar from "../Navbar/NavBar";
import Shelf from "../Shelf/Shelf";
import "./mainpage.css";

import useHookMainPage from "./useHookMainPage";
function MainPage({setActions}) {
  const { books, actionsObj, setmusetGetBooks, dispatch } = useHookMainPage();
  const navigate = useNavigate()
  useEffect(() => {
    setActions(actionsObj)
    
    return () => {

      setmusetGetBooks(false);
    };
  }, []);
 async function navigateToSearch(e) {
    navigate("search")
  }

  return (
    <div className="main-page">
      <FlowBtn onClick = {navigateToSearch} title = {"ADD BOOK"} />

      <NavBar />
      <div className="container">
        {Object.keys(books).map((key) => (
          <Shelf
            key={key}
            books={books[key].data}
            title={books[key].shelf}
            actions={actionsObj}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
