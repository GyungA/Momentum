const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image:url(img/${chosenImg});`