import Project from "./Lists";

let projList = [];

function projForm() {
  const newProj = document.createElement("form");
  newProj.classList.add("projectForm");
  newProj.innerHTML = ` <button id='closeProjForm'>X</button> <input type="text" name="projTitle" placeholder="Project Tite" id="projTitle">
    <input type="text" name="projDescription" placeholder="Project Description" id="projDescription">
    <label for="projDate">Due: 
    <input type="date" name="projDate" id="projDate">
    </label>
    <button id="addProj">Add</button>`;

  document.body.appendChild(newProj);

  document.getElementById("closeProjForm").addEventListener("click", (e) => {
    e.preventDefault();
    hideProjModal();
  });

  document.getElementById("addProj").addEventListener("click", (e) => {
    e.preventDefault();
    addNewProj();
    renderSidebar();
    // hideProjModal();
  });
}

function hideProjModal() {
  document.querySelector(".projectForm").style.display = "none";
}

function addNewProj() {
  const title = document.querySelector("#projTitle").value;
  const description = document.querySelector("#projDescription").value;
  const date = document.querySelector("#projDate").value;
  const id = Date.now().toString();
  const newProj = new Project(title, description, date, id);
  projList.push(newProj);
  console.log(projList);
}

function renderSidebar() {
  const sidebarContainer = document.querySelector(".sidebarContainer");
  sidebarContainer.innerHTML = "";

  projList.forEach((project) => {
    const sidebarCard = document.createElement("div");
    sidebarCard.classList.add("sidebarCard");
    const sidebarTitle = document.createElement("h1");
    sidebarTitle.textContent = `${project.title}`;
    const sidebarDesc = document.createElement("p");
    sidebarDesc.textContent = `${project.description}`;
    const sidebarDate = document.createElement("p");
    sidebarDate.textContent = `Due: ${project.date
      .split("-")
      .reverse()
      .join("-")}
    `;
    //append//
    sidebarContainer.appendChild(sidebarCard);
    sidebarCard.appendChild(sidebarTitle);
    sidebarCard.appendChild(sidebarDesc);
    sidebarCard.appendChild(sidebarDate);
  });
}

export { projForm };
