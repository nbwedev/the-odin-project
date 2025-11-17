import createAboutPage from "./about";
import createMainPage from "./home";
import createMenuPage from "./menu";

function loadPage(page) {
  if (page === "home") createMainPage();
  if (page === "menu") createMenuPage();
  if (page === "about") createAboutPage();
}

document
  .querySelector("#home")
  .addEventListener("click", () => loadPage("home"));

document
  .querySelector("#menu")
  .addEventListener("click", () => loadPage("menu"));

document
  .querySelector("#about")
  .addEventListener("click", () => loadPage("about"));

loadPage();
