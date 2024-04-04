import { projForm } from "./ProjForm";

export default function Sidebar() {
  const sidebar = document.querySelector(".sidebar");
  const addProjBtn = document.createElement("button");
  addProjBtn.classList.add("sidebarAdd");
  addProjBtn.innerText = "Create New Project";
  sidebar.appendChild(addProjBtn);
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebarContainer");
  sidebar.appendChild(sidebarContainer);

  addProjBtn.addEventListener("click", projForm);
}
