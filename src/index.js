import pageLoader from "./page-load";
import "./style.css";

const content = document.querySelector("#content");

const resturantName = document.createElement("div");
resturantName.textContent = "Jal Pie Shop";
resturantName.classList.add("name")

content.appendChild(resturantName);