// 003. Backgrounds
const images = ["001.jpeg", "002.jpeg", "003.jpeg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = "cover";