const headerBtn = document.querySelector('.js-modal-login');
const headerNavigation = document.querySelectorAll('.menu-link');
const headerPopup = document.querySelector('.header__popup');
const headerPopupSlider = document.querySelector('.header__popup__slider');
const openRegPopup = document.querySelector('.js-modal-reg');
const loginPopup = document.querySelector('.login__content');
const loginPopupOpensFromReg = document.querySelector('.reg-link');
const regPopup = document.querySelector('.reg__content');
const overlayPopup = document.querySelector('.header__popup-overlay');
const overlayPopupSlider = document.querySelector('.header__popup__slider-overlay')
const cardOpen = document.querySelectorAll('.main__card-menu__link');
const wrapperSectionFilm = document.querySelector('film__scrubber-wrapper');
const containerSectionFilm = document.querySelector('film__scrubber-container');
const scrubberSlider = document.querySelector('#scrubber');
const radioBtnSlider = document.querySelectorAll('sliderbtn');
const barSlider = document.querySelectorAll('.bar');
const viewBtn = document.querySelector('.info-btn-green');
const moreDetailedBtn = document.querySelector('.info-btn-transparent');

export { headerBtn, headerNavigation, headerPopup, openRegPopup, loginPopup, loginPopupOpensFromReg, regPopup, overlayPopup, cardOpen, barSlider, headerPopupSlider, overlayPopupSlider, viewBtn, moreDetailedBtn }