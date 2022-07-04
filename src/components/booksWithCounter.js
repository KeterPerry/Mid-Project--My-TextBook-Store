import { myContext } from "../context/myContext";
import React, { useState, useContext } from "react";
import axios from "axios";

export default function BooksWithCounter(book) {
  const { setData, setCartCount } = useContext(myContext);
  const [dataWithCounters, setDataWithCounters] = useState(book);
  console.log(dataWithCounters.id);

  const handleCounterUp = async (id) => {
    setDataWithCounters((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
    setCartCount((prev) => prev + 1);

    const updatedBook = dataWithCounters;
    const { data } = await axios.put(
      `https://629dace63dda090f3c07a72b.mockapi.io/books/${id}`,
      updatedBook
    );

    setData((prev) => {
      return prev.map((book) => {
        if (book.id === id) return data;
        else return book;
      });
    });
  };

  const handleCounterDown = async (id) => {
    setDataWithCounters((prev) => {
      if (prev.counter > 0) return { ...prev, counter: prev.counter - 1 };
      else return alert("Invalid"), { ...prev };
    });
    setCartCount((prev) => {
      if (prev > 0) return prev - 1;
      else return prev;
    });
    const updatedBook = dataWithCounters;

    const { data } = await axios.put(
      `https://629dace63dda090f3c07a72b.mockapi.io/books/${id}`,
      updatedBook
    );

    setData((prev) => {
      return prev.map((book) => {
        if (book.id === id) return data;
        else return book;
      });
    });
  };
  return (
    <div key={book.id} className="item">
      <div>{dataWithCounters.title}</div>
      <img alt="#" src={dataWithCounters.image}></img>
      <div>{dataWithCounters.price}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => handleCounterUp(book.id)}>+</button>
        <button>{dataWithCounters.counter}</button>
        <button onClick={() => handleCounterDown(book.id)}>-</button>
      </div>
    </div>
  );
}
