import aboutImage from "./assets/img.jpg";

export default function createAboutPage() {
  const content = document.querySelector("#content");

  content.textContent = "";

  const about = document.createElement("p");
  about.textContent = "lorem ipsum";

  const img = document.createElement("img");
  img.alt = "pci";
  img.src = aboutImage;

  content.appendChild(about);
  content.appendChild(img);
}
