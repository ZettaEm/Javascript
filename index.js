let numberinput = document.getElementById('number-input');
let button = document.getElementById('run-button');
let output = document.getElementById('output');

function clickbutton() {
    let number = Number(numberinput.value);
    let outputHtml = ''

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p class="output">'
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>'
    }
    output.innerHTML = outputHtml;
}
button.addEventListener('click', clickbutton);