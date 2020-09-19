let currentResult = 0

function getUserInput() {
  return parseInt(userInput.value)
}

function add() {
  const enteredNumber = getUserInput()
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult += parseInt(userInput.value)
  outputResult(currentResult, calcDescription)
}
addBtn.addEventListener('click', add)