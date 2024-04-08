import { headerBtn, headerNavigation, headerPopup, openRegPopup, loginPopup, loginPopupOpensFromReg, regPopup, overlayPopup, barSlider, headerPopupSlider, overlayPopupSlider, viewBtn, moreDetailedBtn } from './varibles.js'

function showPopup(e) {
  headerPopup.classList.remove('hidden');
  overlayPopup.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function hidePopup(e) {
  headerPopup.classList.add('hidden');
  overlayPopup.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function showPopupSlider(e) {
  headerPopupSlider.classList.remove('hidden');
  overlayPopupSlider.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function hidePopupSlider(e) {
  headerPopupSlider.classList.add('hidden');
  overlayPopupSlider.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

headerBtn.addEventListener('click', showPopup);

overlayPopup.addEventListener('click', hidePopup);

viewBtn.addEventListener('click', showPopupSlider);

moreDetailedBtn.addEventListener('click', showPopupSlider);

overlayPopupSlider.addEventListener('click', hidePopupSlider);

headerPopup.addEventListener('click', (event) => {
  event.stopPropagation()
})

function addClass(element) {
  element.classList.add('active');
}

function removeClass(element) {
  element.classList.remove('active');
};


for(let value of headerNavigation) {
  value.addEventListener('click', (e) => {
    const currentElement = e.currentTarget;

    value.classList.remove('value__hover');

    headerNavigation.forEach(removeClass);

    addClass(currentElement);
  });
};

for(let btn of barSlider) {
  btn.addEventListener('click', (event) => {
    barSlider.forEach(removeClass)

    addClass(event.target)
  })
}