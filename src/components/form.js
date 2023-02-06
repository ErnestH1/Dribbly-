import React, { useState } from "react";
import "../styles/form.css";
import { NavLink } from "react-router-dom";

function Form({transferArray}) {
  let [nameInput, setName] = useState("");
  let [descriptionInput, setDescription] = useState("");
  let[techArray,setTechArray] = useState([]);


  let[technologiesInput, setTechnologies] = useState("");




  function makePost(name, description) {
    console.log(technologiesInput)
    let newObj = {
      name,
      description,
      technologies : {technologiesInput}
    };

    if (description === "" || name === "") {
      console.log("Please enter a description");
    } else if (description !== "" && name !== "") {
      fetch(
        "https://api.dribbble.com/v2/projects?access_token=d320ae5d6d15067fb0af728c87b440100d487cea10d1020feb0b04d32dc0d0c4",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newObj),
        }
      ).then((response) => {
        console.log(response);
      });
    }
    // setTechArray(null)
  }

  function getTech(value){
    setTechArray([value])
    let newArray = [...techArray];
    newArray.push(value);
    setTechArray(newArray)
      console.log(techArray);
  }

  return (
    <main id="formMain">
    <div id="form">
      <h2 id="formHeading">Create a project today!</h2>
      <form>
        <NavLink to="/homepage">
          <button id="closeForm">cancel</button>
        </NavLink>
        <NavLink to="/homepage">
          <button
            type="submit"
            onClick={() => {
              transferArray(techArray)
              
              makePost(nameInput,descriptionInput);
            }}
            id="createProject"
          >
            Create Project
          </button>
        </NavLink>
        <input
          onChange={(e) => {
            setName(e.target.value);
            // console.log(nameInput);
          }}
          id="inputName"
          type="text"
          placeholder="project name"
          value={nameInput}
          required
        />
        <br /> 
        <br />    
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
            // console.log(descriptionInput);
          }}
          id="inputDescription"
          placeholder="Write what the project is all about :)"
          value={descriptionInput}
        ></textarea>
      </form>
    </div>
    </main>
  );
}

export default Form;
