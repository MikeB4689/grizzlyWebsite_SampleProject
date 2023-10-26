const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hide");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  });
});

const secTions = document.querySelectorAll(".sectionContainer");
secTions.forEach((element) => {
  observer.observe(element);
});
