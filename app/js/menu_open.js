// "use strict";

let navigation = document.querySelector(".main-nav");
let toggleButton = document.querySelector(".main-nav__button-toggle");
let siteNavigation = document.querySelector(".site-navigation");
let userNavigation = document.querySelector(".user-navigation");

//Удаляет если в браузере включен JS, иначе мобильное меню всегда будет доступно
navigation.classList.remove("main-nav--nojs");

toggleButton.addEventListener("click", function () {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened")
  } else {
    navigation.classList.remove("main-nav--opened");
    navigation.classList.add("main-nav--closed")
  }
});


//Modal window
let modal = document.querySelector(".modal-order");
let overlay = document.querySelector(".modal-overlay");
//Получаем массив всех кнопок которые могут открыть модальное окно
let openModal = document.querySelectorAll(".js-open-modal");

if (modal && overlay && openModal) {

  let closeModal = function() {
    //сработает только если клас не содержит анимацию закрытия, фиксит повторное
    // открытие при быстром нажатии клавиш esc
    if (!modal.classList.contains("modal-close-animation")) {
      //Добавляет анимацию закрытия так как изначально она удаляется при открытии модального окна.
      modal.classList.toggle("modal-close-animation");
      //через 0.4секунды после проигрывания анимации, убирает класс   открытия окна и потом прячет оверелей
      setTimeout(function () {
        modal.classList.toggle("modal-opened");
      }, 400);
      overlay.classList.toggle("modal-overlay-opened");
    }
  };

  for (let i=0; i < openModal.length; i++) {
    //Открытие модального окна при клике на кнопку заказать
    openModal[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      //Открывает модальное окно (так как его изначально нету)
      modal.classList.toggle("modal-opened");
      //Открывает оверлей
      overlay.classList.toggle("modal-overlay-opened");
      //При открытии удаляет анимацию закрытия
      modal.classList.toggle("modal-close-animation");
    });
  };

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  });
  //При нажатии на оверлей, закрывает модалку, при нажатии на модалку, она не закроется потому что выше оверлея по
  // z-index
  overlay.addEventListener("click", closeModal);

  //error submit animation
  let modalForm = document.querySelector(".modal-order__form");
  let sizeInput = document.querySelectorAll(".size-list__radio-button");

  //Функция для проверки нажатия хоть одного radio-button
  function checked(arr) {
    let result = false;
    for (let i=0; i<arr.length; i++) {
      if(arr[i].checked) {
        result = true
      }
    }
    return result;
  }

  modalForm.addEventListener("submit", function (evt) {
    if (!checked(sizeInput)) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
    }
  })
}


//Local storage



