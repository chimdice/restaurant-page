import "./style.css";
import pageFirstload from "./page-load.js"
import loadHomePage from "./home.js"
import loadMenuPage from "./menu.js"
import loadAboutPage from "./about.js";

pageFirstload()

const btns = document.querySelectorAll("button");
const content = document.querySelector("#content");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnText = btn.textContent;
        console.log(btnText);

        switch (btnText) {
            case "Home":
                const middle1 = document.querySelector(".middle");
                middle1.remove()
                const newMiddle1 = loadHomePage();
                content.insertBefore(newMiddle1, content.childNodes[1]);
                break;

            case "Menu":
                const middle2 = document.querySelector(".middle");
                middle2.remove()
                const newMiddle2 = loadMenuPage();
                content.insertBefore(newMiddle2, content.childNodes[1]);
                break;
            
            case "About":
                const middle3 = document.querySelector(".middle");
                middle3.remove()
                const newMiddle3 = loadAboutPage();
                content.insertBefore(newMiddle3, content.childNodes[1]);
                break;
        };
    });
})