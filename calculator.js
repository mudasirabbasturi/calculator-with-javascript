const outPutElement = document.getElementsByClassName('out-put')[0]
const buttonElements = document.getElementsByClassName('button')
for (var i = 0; i < buttonElements.length; i++) {
    const buttonElementsText = buttonElements[i]
    buttonElementsText.addEventListener('click', clickButton)
}

function clickButton(e) {
    const buttonText = e.target.innerText
    switch (buttonText) {
        case 'AC':
            outPutElement.innerText = ''
            break;

        case '=':
            outPutElement.innerText = eval(outPutElement.innerText)
            break;

        case '/':
            if (outPutElement.innerText == '') {
                outPutElement.innerText = ''
            }
            else if (outPutElement.innerText) {
                outPutElement.innerText += buttonText
            }
            break;

        case '←':
            if (outPutElement.innerText) {
                outPutElement.innerText = outPutElement.innerText.slice(0, -1);
            }
            break;
        case '√':
            if (outPutElement.innerText) {
                outPutElement.innerText = Math.sqrt(outPutElement.innerText)
            }
            break;
        case '*':
            if (outPutElement.innerText == '') {
                outPutElement.innerText = ''
            }
            else if (outPutElement.innerText) {
                outPutElement.innerText += buttonText
            }
            break;
        case '+':
            if (outPutElement.innerText == '') {
                outPutElement.innerText = ''
            }
            else if (outPutElement.innerText) {
                outPutElement.innerText += buttonText
            }
            break;

        default:
            outPutElement.innerText += buttonText
    }
} 