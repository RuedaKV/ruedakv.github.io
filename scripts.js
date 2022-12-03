let imagesRef = 0;
const imagesArray = [
  "assets/gallery-1.jpg",
  "assets/gallery-2.jpg",
  "assets/gallery-3.jpg",
  "assets/gallery-4.jpg",
];


function previousImage() {
  imagesRef -= 1;
  if (imagesRef < 0) {
    imagesRef = imagesArray.length - 1;
  }

  updateImage();
}

function nextImage() {
  imagesRef += 1;

  if (imagesRef == imagesArray.length) {
    imagesRef = 0;
  }

  updateImage();
}

function updateImage() {
  const newSrc = imagesArray[imagesRef];

  document.getElementsByClassName("about-me-image")[0].src = newSrc;
}



