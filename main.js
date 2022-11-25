// Variáveis da aplicação
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', reset)

// Função Callback
function handleTryClick(event) {
  event.preventDefault() // não faça o o padrão desse evento

  let inputNumber = document.querySelector("#inputNumber")



  xAttempts++

  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function reset(e) {
  console.log(e.key)
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function verifyInput (randomNumber){

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Digite um número entre 0 e 10")
    inputNumber.value = ""
    xAttempts--
  }
  else if(inputNumber.value == "") {
    alert("Erro! Digite um número válido.")
    xAttempts--
    inputNumber.value = ""
  }
}

if(xAttempts == 1) {
  alert(`Parabéns! Acertou em ${xAttempts} tentativa`)
} else {
  alert(`Parabéns! Acertou em ${xAttempts} tentativas`)
}