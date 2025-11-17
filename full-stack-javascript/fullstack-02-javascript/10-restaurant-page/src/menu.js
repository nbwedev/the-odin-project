import menuPageImage from "./assets/img.jpg";

export default function createMenuPage() {
  const content = document.querySelector("#content");

  content.textContent = "";

  const menu1 = document.createElement("p");
  menu1.textContent = "lorem";

  const img = document.createElement("img");
  img.alt = "pic";
  img.src = menuPageImage;

  content.appendChild(menu1);
  content.appendChild(img);
}
