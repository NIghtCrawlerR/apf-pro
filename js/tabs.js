var tabItems = document.querySelectorAll('.tab-btn')
var contentItems = document.querySelectorAll('.tab-content-item')

function handleClick(event) {
  // this.getAttribute('data-type')
  var index = event.target.dataset.tab
  var contentToShow = document.querySelector(`[data-tab-content='${index}']`);
  var activeTab = document.querySelector(`[data-tab='${index}']`);

  contentItems.forEach(el => {
    el.classList.remove('active');
  })
  tabItems.forEach(el => {
    el.classList.remove('active');
  })

  contentToShow.classList.add('active')
  activeTab.classList.add('active')
}

tabItems.forEach(item => {
  item.addEventListener('click', handleClick)
})
