import React from "react";
import { useContext } from "react";
import "./Contact.css";
import { myContext } from "../../context/myContext";

export default function Contact() {
  const {
    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,
    textarea,
    setTextarea,
  } = useContext(myContext);

  const handleChange = (e, id) => {
    console.log(e.target.id);
    if (id === "fname") setFirstNameInput(e.target.value);
    else if (id === "lname") setLastNameInput(e.target.value);
    else if (id === "subject") setTextarea(e.target.value);
  };

  return (
    <div className="contact-Container">
      <form className="contact-container">
        <h2>Contact Me!</h2>
        <br></br>
        <label htmlFor="fname">First Name</label>
        <input
          onChange={(e) => handleChange(e, e.target.id)}
          type="text"
          id="fname"
          name="firstname"
          value={firstNameInput}
          placeholder="Your name.."
        ></input>

        <label htmlFor="lname">Last Name</label>
        <input
          onChange={(e) => handleChange(e, e.target.id)}
          type="text"
          id="lname"
          name="lastname"
          value={lastNameInput}
          placeholder="Your last name.."
        ></input>

        <label htmlFor="subject">Subject</label>
        <textarea
          className="text-area"
          rows="20"
          cols="41"
          onChange={(e) => handleChange(e, e.target.id)}
          id="subject"
          name="subject"
          value={textarea}
          placeholder="Write something.."
        ></textarea>
        <br></br>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
