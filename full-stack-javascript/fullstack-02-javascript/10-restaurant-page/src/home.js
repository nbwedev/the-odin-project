import img from "./assets/img.jpg";

export default function createMainPage() {
  const content = document.querySelector("#content");

  content.textContent = "";

  const header = document.createElement("h1");
  header.textContent = "Welcome to the Golden Spoon";

  const image = document.createElement("img");
  image.alt = "picture";
  image.src = img;

  const description = document.createElement("p");
  description.textContent =
    "Experience fine dining with handcrafted dishes served in a warm, cozy atmosphere.";

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(description);
}
