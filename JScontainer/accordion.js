const accordion = document.querySelectorAll(".accordion-btn");
console.log(accordion);
accordion.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const showContainer = element
      .closest(".FAQ")
      .querySelectorAll(" li .accordion-container p");
    console.log(showContainer);
    showContainer[i].classList.toggle("active");

    if (showContainer[i].classList[0] === "active") {
      element.innerHTML = "-";
    } else {
      element.innerHTML = "+";
    }
  });
});
