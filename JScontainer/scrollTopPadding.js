const scrollPadding = document.querySelector("header").offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  scrollPadding + "px"
);
