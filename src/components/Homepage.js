import React, { useEffect, useState } from "react";
import "../styles/Homepage.css";
import { NavLink } from "react-router-dom";
import Footer from "./Navbar-footer/Footer";
import Profile from "./Profile";

function Homepage({name,email, transferredArray }) {
  console.log(transferredArray);
  let [projects, setProjects] = useState([]);
  let [projectId, setId] = useState([]);
  let [dataArray, setDataArray] = useState([]);
  let [projectName, setName] = useState([]);
  let [projectDescription, setDescription] = useState([]);
  let [btnVisibility, setVisibility] = useState("hidden");
  let [projectsArray, setProjectsArray] = useState([]);
  let[newArray, setNewArray] = useState([])

console.log(projectId);

 
  let randomLikes = Math.floor(Math.random() * (1000 - 101) + 1);
  let randomViews = Math.floor(Math.random() * (1000 - 101) + 1);

  useEffect(() => {
    fetch(
      "https://api.dribbble.com/v2/user/projects?access_token=d320ae5d6d15067fb0af728c87b440100d487cea10d1020feb0b04d32dc0d0c4"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        convertDetails(data)
        setProjects(data);
        setDataArray(data);
        setId(data.id);
      });
  }, []);

  function convertDetails(val){
   let value = val.map((item)=>{
    return item.technologies = transferredArray
   })
   console.log(value);

  }


 let dataCollection = ()=>{
  let newArray = [...projectsArray]
  newArray.push(transferredArray)
  setProjectsArray(newArray);
  // console.log(projectsArray);
 }

 
  let newDataArray = [...dataArray];

  function deleteWithoutRefresh(value) {
    let deletedBot = newDataArray.filter((item) => {
      return item.id === parseInt(value);
    });
    let index = newDataArray.findIndex((item) => {
      return item.id === value;
    });
    newDataArray.splice(index, 1);
    setDataArray(newDataArray);
    // console.log(newDataArray);
    setProjects(newDataArray);
  }


  function deleteProject(id) {
    fetch(
      `https://api.dribbble.com/v2/projects/${id}?access_token=d320ae5d6d15067fb0af728c87b440100d487cea10d1020feb0b04d32dc0d0c4`,
      {
        method: "DELETE",
      }
    ).then((resp) => {
      // console.log(resp);
    });
  }

  function updateProject(ind) {
    setVisibility("visible");
    let heading = document.getElementsByClassName(`heading`)[ind];
    let descriptionCont = document.getElementsByClassName(`description`)[ind];
    heading.setAttribute("contenteditable", "true");
    heading.style.color = "grey";
    descriptionCont.setAttribute("contenteditable", "true");
    descriptionCont.style.color = "grey";
  }

  function sendPatch(ind, id) {
    setVisibility("hidden");
    let heading = document.getElementsByClassName(`heading`)[ind];
    let descriptionCont = document.getElementsByClassName(`description`)[ind];
    heading.setAttribute("contenteditable", "false");
    heading.style.color = "black";
    descriptionCont.setAttribute("contenteditable", "false");
    descriptionCont.style.color = "black";
    let nameValue = heading.textContent;
    let descriptionValue = descriptionCont.textContent;
    // console.log(nameValue, descriptionValue);

    let name = heading.textContent;
    let description = descriptionCont.textContent;

    let newObj = {
      name,
      description,
    };

    fetch(
      `https://api.dribbble.com/v2/projects/${id}?access_token=d320ae5d6d15067fb0af728c87b440100d487cea10d1020feb0b04d32dc0d0c4`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newObj),
      }
    ).then((response) => {
      // console.log(response);
    });
  }

  let projectList = projects.map((project, index) => {
    return (
      <div key={index} value={project.id} id="individualProjects">
        <div id="projectDetails">
          <i
            onClick={() => {
              deleteProject(project.id);
              deleteWithoutRefresh(project.id);
            }}
            id="deleteIcon"
            className="material-icons"
          >
            delete
          </i>
          <button
            style={{
              visibility: btnVisibility,
            }}
            onClick={() => {
              sendPatch(index, project.id);
            }}
            id="editIcon"
          >
            save changes
          </button>
          <h3
            onClick={() => {
              updateProject(index);
            }}
            className="heading"
            id="projectName"
          >
            {project.name}
          </h3>
          <h4 id="descriptionMsg">Description</h4>
          <div>
            <p
              onClick={() => {
                updateProject(index);
              }}
              className="description"
              id="description"
              value={projectDescription}
            >
              {project.description}
            </p>
            <span className="iconsSet">
              <i id="likes" className="material-icons">
                favorite
              </i>
              <h6 id="">{randomLikes}</h6>
              <i id="visibility" className="material-icons">
                visibility
              </i>
              <h6>{randomViews}</h6>
              <span id="timeCreated">
                <h6 id="first">Created on</h6>
                <h6>
                  {project.created_at.replace("T", " at ").replace("Z", "")}
                </h6>
                <h6 id="first">Last Update</h6>
                <h6>
                  {project.updated_at.replace("T", " at ").replace("Z", "")}
                </h6>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <Profile name={name} email = {email} />
      <div id="main-container">
        <div id="section-links">
          <h5
            id="projectsTitle"
          >
            Projects
          </h5>
          <div id="indicator"></div>
        </div>
        <hr />
        <div id="projects-container">
          <NavLink id="navlink" to="/form">
            <div id="addButton">
              <h1>+</h1>
            </div>
          </NavLink>
          {projectList}
        </div>
      </div>
      <div id="footerSection">
        <Footer />
      </div>
    </main>
  );
}

export default Homepage;
