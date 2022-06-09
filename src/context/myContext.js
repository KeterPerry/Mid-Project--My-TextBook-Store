import { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [counter, setCounter] = useState(0);
  const [booksToUpdate, setBooksToUpdate] = useState([]);
  const [isDisplay, setDisplay] = useState("");
  const [isDisplay1, setDisplay1] = useState("none");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState("");
  const [priceUpdate, setPriceUpdate] = useState("");
  const [dataArr, setData] = useState([]);
  const [booksWithCounters, setBooksWithCounters] = useState([]);
  const [isSpinning, setSpinning] = useState(true);
  const [error, setError] = useState(
    "There has been an error. Please try again"
  );

  return (
    <myContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        title,
        setTitle,
        image,
        setImage,
        price,
        setPrice,
        isDisplay,
        setDisplay,
        firstNameInput,
        setFirstNameInput,
        lastNameInput,
        setLastNameInput,
        textarea,
        setTextarea,
        dataArr,
        setData,
        isSpinning,
        setSpinning,
        error,
        setError,
        popUp,
        setPopUp,
        booksToUpdate,
        setBooksToUpdate,
        counter,
        setCounter,
        titleUpdate,
        setTitleUpdate,
        imageUpdate,
        setImageUpdate,
        priceUpdate,
        setPriceUpdate,
        isDisplay1,
        setDisplay1,
        booksWithCounters,
        setBooksWithCounters,
      }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
