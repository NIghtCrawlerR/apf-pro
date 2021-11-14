var buttons = document.querySelectorAll("[data-modal-btn]")
var closeButtons = document.querySelectorAll("[data-modal-dismiss]")
var modals = document.querySelectorAll("[data-modal-name]")
var overlay = document.querySelector('.overlay')

var submitBtn = document.querySelectorAll(".modal__submit-btn")

function getModalAttr(modalName) {
  return `[data-modal-name="${modalName}"]`
}
 
function handleBtnClick(e) {
  var modalName = e.target.dataset.modalBtn
  var modal = document.querySelector(getModalAttr(modalName))
  modal.classList.add('open');
  overlay.classList.add('active');
}

function handleCloseBtnClick(e) {
  var modalName = e.target.dataset.modalDismiss
  var modal = document.querySelector(getModalAttr(modalName))
  modal.classList.remove('open');
  overlay.classList.remove('active');
}

function handleOverlayClick() {
  overlay.classList.remove('active');
  modals.forEach(modal => {
    modal.classList.remove('open');
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', handleBtnClick)
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', handleCloseBtnClick)
});

overlay.addEventListener('click', handleOverlayClick)

// FORMS
const sendData = async (requestData) => {
  const response = await fetch(requestUrl, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
  });
  return await response.json();
};

async function submit(form) {
  var data = new FormData(form);
  var formName = form.dataset.form

  
  try {
    await sendData(data)
    document.querySelector(`${getModalAttr(formName)} .modal__inner`).innerHTML = "Ваша заявка успешн отправлена. Наш менеджер скоро свяжется с Вами.";
  } catch (err) {
    console.error('ERROR', err)
    document.querySelector(`${getModalAttr(formName)} .modal__error`).innerHTML = err;
  }
}

var forms = document.querySelectorAll("[data-form]")
forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    submit(form)
  })
})
