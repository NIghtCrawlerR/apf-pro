var navWrap = document.querySelector('.header__nav-wrap')
var headerItemActive = document.querySelector('.header__nav-item-wrap.active')
var headerItems = document.querySelectorAll('.header__nav-item-wrap')
var headerLine = document.querySelector('.header__nav-wrap__line')

function moveHeaderLine(event) {
  var elWidth = event.target.offsetWidth
  var offsetLeft = event.target.offsetLeft
  var padding = 16

  var linePositionLeft = offsetLeft - padding

  headerLine.style.width = `${elWidth + padding * 2}px`
  headerLine.style.transform = `translateX(${linePositionLeft}px)`
}

function resetLine() {
  var activeItemParams = headerItemActive ? {
    offsetLeft: headerItemActive.offsetLeft,
    offsetWidth: headerItemActive.offsetWidth,
  } : null

  if (headerItemActive) {
    moveHeaderLine({
      target: activeItemParams
    })
  }
}

const setVisibility = (isVisible) => () => {
  const visibility = isVisible || headerItemActive
  headerLine.style.visibility = visibility ? 'visible' : 'hidden'

  if (visibility) {
    resetLine()
  }
}

headerItems.forEach(item => {
  item.addEventListener('mouseenter', moveHeaderLine)
})

navWrap.addEventListener('mouseenter', setVisibility(true))
navWrap.addEventListener('mouseleave', setVisibility(false))

function onLoad() {
  setVisibility()()
}

onLoad()
