const param = {
   header: document.querySelector('.header'),
   headerContainer: document.querySelector('.header-container'),
   headerBurger: document.querySelector('.header-burger'),
   headerModal: document.querySelector('.header-modal'),
   headerNav: document.querySelector('.header-nav'),
   headerNavClose: document.querySelector('.header-nav-close'),
   headerNavItemHref: document.querySelectorAll('.header-nav-item__href'),
   heroContainer: document.querySelector('.hero-container'),
   tableBoxHeadHeading1: document.querySelector('.table-box-head-heading-1'),
   tableBoxHeadText1: document.querySelector('.table-box-head-text-1'),
   tableBoxHeadHeading2: document.querySelector('.table-box-head-heading-2'),
   tableBoxHeadText2: document.querySelector('.table-box-head-text-2'),
   tableBoxHeadHeading3: document.querySelector('.table-box-head-heading-3'),
   tableBoxHeadText3: document.querySelector('.table-box-head-text-3'),
   productSlideLike: document.querySelectorAll('.product-slide-like'),
   productSlideImg: document.querySelectorAll('.product-slide-img'),
   productSlideImgModalWrapper: document.querySelectorAll('.product-slide-img-modal-wrapper'),
   productSlideModalButtonClose: document.querySelectorAll('.product-slide-modal-button__close'),
   productSlideShoesColorLabel: document.querySelectorAll('.product-slide-shoes-color-label'),
   gradeProgressButton: document.querySelectorAll('.grade-progress-button'),
   gradeProgressBarColor: document.querySelector('.grade-progress-bar-color'),
   gradeProgressBarWrapper: document.querySelector('.grade-progress-bar-wrapper'),
}

// sticy header
document.addEventListener('scroll', function () {
   if (window.pageYOffset > 0) {
      param.header.classList.add('_scroll');
      param.heroContainer.classList.add('_scroll');
   } else {
      param.header.classList.remove('_scroll');
      param.heroContainer.classList.remove('_scroll');
   }
});

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

// progress bar
function askProgressBar(param) {
   param.gradeProgressButton.forEach(elem => {
      elem.addEventListener('click', function (e) {
         if (window.innerWidth > 768) {
            if (e.target.getAttribute('data-number') == 0) {
               param.gradeProgressBarColor.style.width = 0;
            } else if (e.target.getAttribute('data-number') == 1) {
               param.gradeProgressBarColor.style.width = '23.5%';
            } else if (e.target.getAttribute('data-number') == 2) {
               param.gradeProgressBarColor.style.width = '49.5%';
            } else if (e.target.getAttribute('data-number') == 3) {
               param.gradeProgressBarColor.style.width = '73.5%';
            } else if (e.target.getAttribute('data-number') == 4) {
               param.gradeProgressBarColor.style.width = '100%';
            }
         } else {
            if (e.target.getAttribute('data-number') == 0) {
               param.gradeProgressBarColor.style.width = 0;
            } else if (e.target.getAttribute('data-number') == 1) {
               param.gradeProgressBarColor.style.width = '26%';
            } else if (e.target.getAttribute('data-number') == 2) {
               param.gradeProgressBarColor.style.width = '49.5%';
            } else if (e.target.getAttribute('data-number') == 3) {
               param.gradeProgressBarColor.style.width = '73.5%';
            } else if (e.target.getAttribute('data-number') == 4) {
               param.gradeProgressBarColor.style.width = '98%';
            }
         }
      });
   });

   param.gradeProgressBarWrapper.addEventListener('click', function (e) {
      let positionLeft = param.gradeProgressBarColor.getBoundingClientRect().left,
         positionClick = e.pageX;
      param.gradeProgressBarColor.style.width = positionClick - positionLeft + 'px';
   });
}

askProgressBar(param);

// shoes like
param.productSlideLike.forEach(elem => {
   elem.addEventListener('click', (e) => {
      e.target.closest('.product-slide-like').classList.toggle('_active');
   });
});

// shoes color
param.productSlideShoesColorLabel.forEach(elem => {
   elem.addEventListener('click', function (e) {
      let dataTarget = e.target.getAttribute('data-target');
      param.productSlideShoesColorLabel.forEach(elemClickNeighbours => {
         let dataTargetNeighbours = elemClickNeighbours.getAttribute('data-target');
         if (dataTargetNeighbours == dataTarget) {
            elemClickNeighbours.classList.remove('_active');
         }
      });
      e.target.classList.toggle('_active');
   });
});

// add number for shoes img
param.productSlideImg.forEach((elem, n) => {
   elem.setAttribute('data-img', `${n}`)
})



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

// product modal
param.productSlideImg.forEach((elem, n) => {
   elem.addEventListener('click', function () {
      param.productSlideImgModalWrapper.forEach((elemWrapper, numberWrapper) => {
         if (numberWrapper == n) {
            $(elemWrapper).fadeIn(300).css('display', 'flex');
            $('body').addClass('_lock');
         }
      });
   });
});

param.productSlideModalButtonClose.forEach((elem, n) => {
   elem.addEventListener('click', function () {
      param.productSlideImgModalWrapper.forEach((elemWrapper, numberWrapper) => {
         if (numberWrapper == n) {
            $(elemWrapper).fadeOut(300);
            $('body').removeClass('_lock');
         }
      });
   });
});

// zoomer
$(document).ready(function () {
   $("img").magnify();
})

// tooltip
tippy('#tooltip-1', {
   content: param.tableBoxHeadHeading1.innerHTML + '<br>' + param.tableBoxHeadText1.innerHTML,
   allowHTML: true,
   trigger: 'click',
   arrow: true,
   animation: 'scale',
});

tippy('#tooltip-2', {
   content: param.tableBoxHeadHeading2.innerHTML + '<br>' + param.tableBoxHeadText2.innerHTML,
   allowHTML: true,
   trigger: 'click',
   arrow: true,
   animation: 'scale',
});

tippy('#tooltip-3', {
   content: param.tableBoxHeadHeading3.innerHTML + '<br>' + param.tableBoxHeadText3.innerHTML,
   allowHTML: true,
   trigger: 'click',
   arrow: true,
   animation: 'scale',
});