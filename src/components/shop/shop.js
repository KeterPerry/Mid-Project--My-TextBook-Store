import React from "react";
import "./Shop.css";
import axios from "axios";
import { useEffect, useContext } from "react";
import { myContext } from "../../context/myContext";
import BooksWithCounter from "../booksWithCounter";

export default function Shop() {
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
        console.log(dataWithCounters);
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
  // const handleCounterUp = (counter) => {
  //   setCounter(counter + 1);
  // };
  // const handleCounterDown = () => {
  //   if (counter > 0) setCounter(counter - 1);
  // };

  /////////////////////////////////////////////////////

  const insertData = () => {
    const booksWithCounters = dataArr.map((book) => (
      <BooksWithCounter {...book} />
    ));
    return booksWithCounters;
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
