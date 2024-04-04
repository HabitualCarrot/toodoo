import "./style.css";

export default function BuildContainer() {
  // create container
  const containerEl = document.createElement("div");
  containerEl.classList.add("container");

  //create nav, sidebar, main
  const navEl = document.createElement("div");
  navEl.classList.add("nav");

  const sidebarEl = document.createElement("div");
  sidebarEl.classList.add("sidebar");

  const mainEl = document.createElement("div");
  mainEl.classList.add("main");

  //append
  document.body.appendChild(containerEl);
  containerEl.appendChild(navEl);
  containerEl.appendChild(sidebarEl);
  containerEl.appendChild(mainEl);
}
