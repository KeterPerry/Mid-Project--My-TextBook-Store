import React from "react";
import { useContext } from "react";
import BookUpdate from "../../components/BookUpdate";

import "./LogIn.css";
import axios from "axios";

import { myContext } from "../../context/myContext";

export default function LogIn() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isDisplay,
    setDisplay,
    title,
    setTitle,
    image,
    setImage,
    price,
    setPrice,
    dataArr,
    setData,
    popUp,
    setPopUp,
    booksToUpdate,
    setBooksToUpdate,
    // titleUpdate,
    // setTitleUpdate,
    // imageUpdate,
    // setImageUpdate,
    // priceUpdate,
    // setPriceUpdate,
    isDisplay1,
    setDisplay1,
  } = useContext(myContext);

  // const [titleUpdate, setTitleUpdate] = useState("");

  //////////////////////////////////////////////////////////////////////////
  const handleChange = (e, id) => {
    if (id === "email") setEmail(e.target.value, console.log(email));
    else if (id === "pwd") setPassword(e.target.value, console.log(password));
    else if (id === "title") setTitle(e.target.value, console.log(title));
    else if (id === "image") setImage(e.target.value, console.log(image));
    else if (id === "price") setPrice(e.target.value, console.log(price));
    //   else if (id === "titleUpdate")
    //     setTitleUpdate(e.target.value, console.log(titleUpdate));
    //   else if (id === "imageUpdate")
    //     setImageUpdate(e.target.value, console.log(imageUpdate));
    //   else if (id === "priceUpdate")
    //     setPriceUpdate(e.target.value, console.log(priceUpdate));
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  const handleClick = () => {
    if (email === "keterav@gmail.com" && password === "0507744085") {
      setDisplay("none");
      setDisplay1("");
    } else {
      alert("Invalid email or password");
    }
  };

  //////////////////////////////////////////////////////////////// POST
  const handleCreate = async () => {
    const newBook = {
      title: title,
      image: image,
      price: price,
    };

    try {
      const dataToBeAdded = await axios.post(
        "https://629dace63dda090f3c07a72b.mockapi.io/books",
        newBook
      );

      setData((prev) => {
        return [...prev, dataToBeAdded.data];
      });
      setTitle("");
      setImage("");
      setPrice("");
    } catch (e) {
      console.log(e.message);
    }
  };
  //////////////////////////////////////////////////////////////////////////////
  // DELETE
  const handleDelete = async (title) => {
    const { data } = await axios.get(
      "https://629dace63dda090f3c07a72b.mockapi.io/books"
    );
    console.log(data);
    setData(data);

    const bookToBeDeleted = dataArr.find((book) => book.title === title);
    console.log(bookToBeDeleted);
    try {
      await axios.delete(
        `https://629dace63dda090f3c07a72b.mockapi.io/books/${bookToBeDeleted.id}`
      );
      setTitle("");
      setData((prev) => {
        const newbookArr = prev.filter(
          (book) => book.id !== bookToBeDeleted.id
        );
        return newbookArr;
      });
    } catch (e) {
      console.log(e);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  // UPDATE

  const handleUpdate = async () => {
    const { data } = await axios.get(
      "https://629dace63dda090f3c07a72b.mockapi.io/books"
    );
    console.log(data);
    setData(data);
    setPopUp(true);

    const booksToUpdate = data.map((book) => <BookUpdate {...book} />);

    setBooksToUpdate(booksToUpdate);
  };
  //////////////////////////////////////////////////////////////
  // const handleConfirm = async (id) => {
  //
  //   const bookToUpdate = dataArr.find((book) => book.id === id);

  //   const updatedBook = {
  //     ...bookToUpdate,
  //     title: titleUpdate,
  //     image: imageUpdate,
  //     price: priceUpdate,
  //   };
  //   const { data } = await axios.put(
  //     `https://628e25fba339dfef87a87ada.mockapi.io/people/${id}`,
  //     updatedBook
  //   );
  //   setData((prev) => {
  //     return prev.map((book) => {
  //       if (book.id === id) return data;
  //       else return book;
  //     });
  //   });
  // };

  const handlePopUp = () => {
    setPopUp(false);
  };
  ////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="main-container">
      <div className="login-Container" style={{ display: isDisplay }}>
        <form onSubmit={handleSubmit} action="/action_page.php" method="post">
          <div className="imgcontainer">
            <img
              src="https://mytor.co.il/images/img_avatar2.png"
              alt="Avatar"
              className="avatar"
            ></img>
          </div>

          <div className="container">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              onChange={(e) => handleChange(e, e.target.id)}
              id="email"
              style={{}}
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
            ></input>

            <label htmlFor="psw">Password</label>
            <input
              onChange={(e) => handleChange(e, e.target.id)}
              id="pwd"
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={password}
              required
            ></input>
            <button onClick={handleClick} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>

      {/* ////////////////////////////////////////////////////// */}

      <div className="function-container" style={{ display: isDisplay1 }}>
        <h2> What would you like to do?</h2>
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => handleChange(e, e.target.id)}
          id="title"
          value={title}
        ></input>
        <label htmlFor="Image">Image</label>
        <input
          onChange={(e) => handleChange(e, e.target.id)}
          id="image"
          value={image}
        ></input>
        <label htmlFor="Price">Price</label>
        <input
          onChange={(e) => handleChange(e, e.target.id)}
          id="price"
          value={price}
        ></input>
        <button onClick={handleCreate}>Add</button>
        <button onClick={() => handleDelete(title)}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
      {popUp && (
        <div className="popUp">
          {booksToUpdate}
          <button onClick={handlePopUp} className="back">
            Back
          </button>
        </div>
      )}
    </div>
  );
}
