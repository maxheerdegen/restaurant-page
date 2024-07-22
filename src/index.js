import "./styles.css";
import { populateHome } from "./home.js"; 
import { populateAbout } from "./about.js";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", () => {
    contentDiv.textContent = "";
    populateHome();
})

aboutButton.addEventListener("click", () => {
    contentDiv.textContent = "";
    populateAbout();
})
