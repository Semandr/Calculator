let currentResult = 0

function getUserInput() {
  return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription)
}

function add() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult += parseInt(userInput.value)
  createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult -= parseInt(userInput.value)
  createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult *= parseInt(userInput.value)
  createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult /= parseInt(userInput.value)
  createAndWriteOutput('/', initialResult, enteredNumber)
}
addBtn.addEventListener('click', add)