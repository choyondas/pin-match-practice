function generatepin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {

        document.getElementById('inputField').value = pin;

    } else {

        generatepin();
    }
}
document.getElementById('calcBody').addEventListener('click', function(event) {

    const inputValue = event.target.innerText;
    const inputField = document.getElementById('inputPin');
    const previousCalc = inputField.value;

    const newCalc = previousCalc + inputValue;
    inputField.value = newCalc;

    if (isNaN(inputValue) == false) {
        inputField.value = newCalc;

    } else if (inputValue == 'C') {
        inputField.value = '';
    }
})

function submit() {
    const inputPin = document.getElementById('inputField').value;
    const inputMatch = document.getElementById('inputPin').value;

    if (inputPin == inputMatch) {
        document.getElementById('notify-match').style.display = 'block';
        document.getElementById('notify-not-match').style.display = 'none';
    } else {
        document.getElementById('notify-match').style.display = 'none';
        document.getElementById('notify-not-match').style.display = 'block';
    }
}