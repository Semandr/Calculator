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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  let mathOperator
  if (calculationType === 'ADD') {
    currentResult += enteredNumber
    mathOperator = '+'
  } else {
    currentResult -= enteredNumber
    mathOperator = '-'
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber)
  writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult -= parseInt(userInput.value)
  createAndWriteOutput("-", initialResult, enteredNumber)
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult *= parseInt(userInput.value)
  createAndWriteOutput("*", initialResult, enteredNumber)
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
  const enteredNumber = getUserInput()
  const initialResult = currentResult
  currentResult /= parseInt(userInput.value)
  createAndWriteOutput("/", initialResult, enteredNumber)
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)
