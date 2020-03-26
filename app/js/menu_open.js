let navigation = document.querySelector(".main-nav");
let toggleButton = document.querySelector(".main-nav__button-toggle");
let siteNavigation = document.querySelector(".site-navigation");
let userNavigation = document.querySelector(".user-navigation");

toggleButton.addEventListener("click", function () {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened")
  } else  {
    navigation.classList.remove("main-nav--opened");
    navigation.classList.add("main-nav--closed")
  }
})

