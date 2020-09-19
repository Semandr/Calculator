let currentResult = 0

function add() {
  currentResult += parseInt(userInput.value)
  outputResult(currentResult, ``)
}
addBtn.addEventListener('click', add)