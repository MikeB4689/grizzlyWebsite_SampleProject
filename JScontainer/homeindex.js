const reviewComment = document.querySelector("#commentContainer");

console.log(reviewComment);
const personsComment = [
  {
    url: "../images/Ellipse 9.png",
    name: "Wade Warren",
    comment:
      "Sociis amet etiam elementum amet enim ac tristique a. Nullam tempus adipiscing enim, mauris lacus tincidunt eget elit. Id ultrices.",
  },
];

const CommentContainer = () => {
  for (i = 0; i < 5; i++) {
    const cardInfoContainer = document.createElement("div");
    cardInfoContainer.classList.add("cardInfoContainer");

    const cOmentContainer = document.createElement("div");
    cOmentContainer.classList.add("cOmentContainer");

    const imageProfileContainer = document.createElement("div");
    const imageContainer = document.createElement("img");
    imageContainer.src = `${personsComment[0].url}`;

    const reviewStars = document.createElement("ul");
    reviewStars.setAttribute("id", "reviewStars");

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    const fullName = document.createElement("p");
    fullName.innerText = `${personsComment[0].name}`;

    const useName = document.createElement("p");
    useName.innerText = `@${personsComment[0].name} 2days ago`;

    const contentContainer = document.createElement("p");
    contentContainer.innerText = `${personsComment[0].comment}`;

    cOmentContainer.appendChild(imageProfileContainer);
    imageProfileContainer.appendChild(imageContainer);

    cOmentContainer.appendChild(nameContainer);
    nameContainer.appendChild(fullName);
    nameContainer.appendChild(useName);
    nameContainer.appendChild(contentContainer);

    cardInfoContainer.appendChild(cOmentContainer);
    cardInfoContainer.appendChild(reviewStars);

    reviewComment.appendChild(cardInfoContainer);
  }
  const reviewContainer = document.querySelectorAll("#reviewStars");
  reviewContainer.forEach((element) => {
    for (i = 0; i < 5; i++) {
      const reviewList = document.createElement("li");
      const starRating = document.createElement("i");
      starRating.setAttribute("class", "bx bxs-star");
      reviewList.appendChild(starRating);
      element.appendChild(reviewList);
    }

    console.log(element);
  });
};

CommentContainer();
