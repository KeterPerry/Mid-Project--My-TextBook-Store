import { myContext } from "../context/myContext";
import React, { useState, useContext } from "react";
import axios from "axios";

export default function BookUpdate(book) {
  const { setData, setPopUp } = useContext(myContext);
  const [bookForms, setBookForms] = useState(book);

  const handleConfirm = async (id) => {
    setPopUp(false);
    const updatedBook = bookForms;
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
    <div key={bookForms.id} className="items">
      <input
        onChange={(e) => {
          setBookForms((prev) => ({ ...prev, title: e.target.value }));
        }}
        value={bookForms.title}
        placeholder={bookForms.title}
      />
      <input
        onChange={(e) => {
          setBookForms((prev) => ({ ...prev, image: e.target.value }));
        }}
        value={bookForms.image}
        placeholder={bookForms.image}
      />
      <input
        onChange={(e) => {
          setBookForms((prev) => ({ ...prev, price: e.target.value }));
        }}
        value={bookForms.price}
        placeholder={bookForms.price}
      />
      <button onClick={() => handleConfirm(book.id)}>Confirm</button>
    </div>
  );
}
