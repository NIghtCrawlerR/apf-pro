var activator = document.querySelector('.header-mobile__activator')
var overlay = document.querySelector('.overlay')
var navWrap = document.querySelector('.sidebar__nav-wrap')

function handleActivatorClick() {
  var wrapClasses = [...navWrap.classList]

  if (wrapClasses.includes('active')) {
    navWrap.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    navWrap.classList.add('active');
    overlay.classList.add('active');
  }
}

function handleOverlayClick() {
  navWrap.classList.remove('active');
  overlay.classList.remove('active');
}

activator.addEventListener('click', handleActivatorClick)
overlay.addEventListener('click', handleOverlayClick)
