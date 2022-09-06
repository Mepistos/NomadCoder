// 003. Backgrounds
const images = ["001.jpeg", "002.jpeg", "003.jpeg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);