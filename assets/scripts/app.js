const defaulResult = 0
let currentResult = defaulResult
let logEntries = []

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
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNumber,
    result: currentResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
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
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)