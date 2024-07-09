const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonId = e.target.id
    body.style.backgroundColor = buttonId
  })
})