// Create a html container that changes its image and information based on users feedback
// Acceptance criteria:
//     1. Our application should be modular, array of feedbacks should be declared outside of main.js
//     2. Feedback should rotate in cycles by changing each feedback every 3 seconds so if we would have two feedbacks it should show
//         first feedback, then second and then should return to first one and cycle continues.
import SlideView from "./slides.js";
const container = document.querySelector(".container");

// const slides = {
//     article: document.createElement("article"),
//     img: document.createElement("img"),
//     title: document.createElement("span"),
//     paragraph: document.createElement("p"),
// }
// function getArticle () {
//     slides.article.className = '.slide';
//     container.append(article);
//     slides.img.className = ".img-slide";
//     slides.title = [firstTitle, secondTitle, thirdTitle];
//     slides.paragraph = [firstParagraph, secondParagraph, thirdParagraph];
//     slides.article.append(img, title, paragraph);

// }

function createFirstSlide() {
  const firstSlide = document.createElement("article");
  firstSlide.id = "#first";
  container.append(firstSlide);

  const firstImage = document.createElement("img");
  firstImage.className = "img-slide";
  firstImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/8/87/Paul_Dano_Cannes_2015.jpg";

  const firstTitle = document.createElement("span");
  firstTitle.textContent = `${"Peter Poter"}`;

  const firstParagraph = document.createElement("p");
  firstParagraph.textContent = `${"Best thing you can do in your life"}`;
  firstSlide.append(firstImage, firstTitle, firstParagraph);
}

function createSecondSlide() {
  const secondSlide = document.createElement("article");
  secondSlide.id = "#second";
  container.append(secondSlide);

  const secondImage = document.createElement("img");
  secondImage.className = "img-slide";
  secondImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gabriel_LaBelle_at_the_2022_TIFF_Premiere_of_The_Fabelmans_%2852359190764%29_%28cropped%29.jpg/1280px-Gabriel_LaBelle_at_the_2022_TIFF_Premiere_of_The_Fabelmans_%2852359190764%29_%28cropped%29.jpg";

  const secondTitle = document.createElement("span");
  secondTitle.textContent = `${"Harry Poter"}`;

  const secondParagraph = document.createElement("p");
  secondParagraph.textContent = `${"Find own skyline"}`;
  secondSlide.append(secondImage, secondTitle, secondParagraph);
}

function createThirdSlide() {
  const thirdSlide = document.createElement("article");
  thirdSlide.id = "#third";
  container.append(thirdSlide);

  const thirdImage = document.createElement("img");
  thirdImage.className = "img-slide";
  thirdImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Michelle_Williams_2012_Shankbone_3.JPG/1280px-Michelle_Williams_2012_Shankbone_3.JPG";

  const thirdTitle = document.createElement("span");
  thirdTitle.textContent = `${"Mary Poter"}`;

  const thirdParagraph = document.createElement("p");
  thirdParagraph.textContent = `${"Most amazinng things you can do with creativity"}`;
  thirdSlide.append(thirdImage, thirdTitle, thirdParagraph);
}

const slideView = new SlideView({
  first: createFirstSlide,
  second: createSecondSlide,
  third: createThirdSlide,
});
slideView.showNextSlide();