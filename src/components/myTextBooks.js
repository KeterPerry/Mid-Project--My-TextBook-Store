import React from "react";
// import "./Shop.css";
import axios from "axios";
// import Shop from "./shop/shop";
import { useEffect, useContext } from "react";
import { myContext } from "../context/myContext";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function MyTextBooks() {
  const history1 = useHistory();
  const { dataArr, setData, isSpinning, setSpinning } = useContext(myContext);

  //////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const fetchData = async (term) => {
      try {
        const { data } = await axios.get(
          "https://629dace63dda090f3c07a72b.mockapi.io/books"
        );

        const dataWithCounters = data.map((product) => {
          return { ...product, counter: 0 };
        });
        setData(dataWithCounters);
        setSpinning(false);
      } catch (e) {
        console.log(e.message);
      }
      setSpinning(false);
    };
    fetchData();
  }, [setData, setSpinning]);

  ///////////////////////////////////////////////////

  const routeChange = () => {
    let path = `/shop`;
    let history = history1;
    history.push(path);
  };

  /////////////////////////////////////////////////////

  const insertData = () => {
    console.log(dataArr);
    return dataArr.map((book) => (
      <div key={book.id} className="item">
        <div>{book.title}</div>
        <img alt="#" src={book.image}></img>
        <div>{book.price}</div>
        <button onClick={routeChange}>Go To Shop</button>
      </div>
    ));
  };

  ///////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {isSpinning ? (
        <div className="loader"></div>
      ) : (
        <div className="books-container">{insertData()}</div>
      )}
    </div>
  );
}
/////////////////////////////////////////////////////////////////////
