import { feedbacks } from "./feedbacks.js";

const container = document.querySelector(".feedback=container");


let displayedIndex = 0;
const displayFeedbacks = () => {
  const feedbacksCont = document.querySelectorAll(".feedback");
  // feedbacks[displayedIndex].classList.remove('hidden');
  feedbacksCont.forEach((feedback, index) => {
    index === displayedIndex
      ? feedback.classList.remove("hidden")
      : feedback.classList.add("hidden");
  });
  displayedIndex =
    displayedIndex === feedbacks.length - 1 ? 0 : displayedIndex + 1;
  //   displayedIndex++;
  //   if (displayedIndex > feedbacks.length - 1) {
  //     displayedIndex = 0;
  //   }
  setTimeout(displayFeedbacks, 3000);
};


const constructFeedbacksCard = (feedback) => {
  const feedbackContainer = document.createElement("div");
  const feedbackPicture = document.createElement("img");
  const paragraph = document.createElement("p");
  const review = document.createElement("p");

  feedbackContainer.classList.addd("feedback", "hidden");
  feedbackPicture.src = feedback.feedbackPicture;
  paragraph.textContent`${feedback.firstName} ${feedback.lastName}`;
  review.textContent = feedback.review;

  feedbackContainer.append(feedbackPicture, paragraph, review);
  container.append(feedbackContainer);
};
feedbacks.forEach(constructFeedbacksCard);
displayFeedbacks()
