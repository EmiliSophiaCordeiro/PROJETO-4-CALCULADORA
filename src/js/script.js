let display = document.getElementById('display')
let currentInput = ''
let operator = ''
let themeToggle = document.getElementById('theme-toggle')
let isLightTheme = false

themeToggle.addEventListener('click', () => {
    isLightTheme = !isLightTheme
    document.body.classList.toggle('light', isLightTheme)
    document.querySelector('.container').classList.toggle('light', isLightTheme)
    document.querySelector('.display').classList.toggle('light', isLightTheme)
    themeToggle.classList.toggle('light', isLightTheme)
})

function appendNumber(num) {
    currentInput += num
    display.value = currentInput
}

function appendOperator(op) {
    if (currentInput !== '') {
        operator = op
        currentInput += op
        display.value = currentInput
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput)
        display.value = currentInput
    } catch (error) {
        display.value = 'Erro'
    }
}

function clearDisplay() {
    currentInput = ''
    operator = ''
    display.value = ''
}
