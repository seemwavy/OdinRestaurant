import { renderHome } from "./home.js";
import { renderAbout } from "./about.js";
import { renderMenu } from "./menu.js"; 
import './styles.css'
var content = document.getElementById("content")
function loadNav() {
    var nav = document.createElement("nav");
    nav.style.backgroundColor = "blue";
    nav.style.top = "100px"
    var menuBtn = document.createElement("button");
    var aboutBtn = document.createElement("button");
    var homeBtn = document.createElement("button");
    var navBar = document.getElementById("navBar");
    navBar.appendChild(nav)
    menuBtn.className = "navBtn";
    homeBtn.className = "navBtn";
    aboutBtn.className = "navBtn";
    menuBtn.innerHTML = "Menu";
    aboutBtn.innerHTML = "About Us";
    homeBtn.innerHTML = "Home";
    menuBtn.addEventListener("click", function () {
        content.replaceChildren("")
        renderMenu(content);

    });
    aboutBtn.addEventListener("click", function () {
        content.replaceChildren("")
        renderAbout(content)
    });
    homeBtn.addEventListener("click", function () {
        content.replaceChildren("")
        renderHome(content);
    });
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);
    return loadNav;
}
loadNav(content)
renderHome(content)
