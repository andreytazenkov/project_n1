const param = {
   headerContainer: document.querySelector('.header-container'),
   headerBurger: document.querySelector('.header-burger'),
   headerModal: document.querySelector('.header-modal'),
   headerNav: document.querySelector('.header-nav'),
   headerNavClose: document.querySelector('.header-nav-close'),
   headerNavItemHref: document.querySelectorAll('.header-nav-item__href'),
}

// burger
function burger(param) {
   param.headerBurger.addEventListener('click', function () {
      param.headerNav.classList.add('_active');
      document.body.classList.add('_lock');
   });
   param.headerNavClose.addEventListener('click', function () {
      param.headerNav.classList.remove('_active');
      document.body.classList.remove('_lock');
   });
   param.headerNavItemHref.forEach(elem => {
      elem.addEventListener('click', function () {
         param.headerNav.classList.remove('_active');
         document.body.classList.remove('_lock');
      });
   });
   param.headerModal.addEventListener('click', function () {
      param.headerNav.classList.remove('_active');
      document.body.classList.remove('_lock');
   });
}
burger(param);

// replace modal
function replaceModal(param) {
   if (window.innerWidth <= 992) {
      param.headerNav.append(param.headerModal)
   } else {
      param.headerContainer.append(param.headerModal);
   }
}

replaceModal(param);

// window resize
window.addEventListener('resize', function () {
   replaceModal(param);
   askProgressBar(param);
});

// modal
$('.header-modal').popup({
   targetPopupId: "modal"
});

let modal = $('.header-modal').popup({
   targetPopupId: "modal"
});

let send = $('.header-popup-send-button').popup({
   targetPopupId: "send",
   closeBtnSelector: '.header-popup-send-close',
});

let error = $('.header-popup-error-button').popup({
   targetPopupId: "error",
   closeBtnSelector: '.header-popup-error-close',
});