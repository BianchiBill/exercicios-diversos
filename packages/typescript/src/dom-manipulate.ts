const button = document.getElementById('btn_click_me')

const handleClick = (): void => {
  alert(`Você clicou no botão ${button?.textContent}`)
}

if (button) {
  button.addEventListener('click', handleClick)
}
