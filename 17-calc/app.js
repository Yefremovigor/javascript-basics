const resultAria = document.querySelector('.result');
const firstInput = document.querySelector('.number__1');
const secondInput = document.querySelector('.number__2');


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (evt) => {
        switch (evt.currentTarget.innerText) {
            case '+':
                resultAria.innerText = Number(firstInput.value) + Number(secondInput.value);
                break;
            case '-':
                resultAria.innerText = Number(firstInput.value) - Number(secondInput.value);
                break;
            case '/':
                resultAria.innerText = Number(firstInput.value) / Number(secondInput.value);
                break;
            case '*':
                resultAria.innerText = Number(firstInput.value) * Number(secondInput.value);
                break;
            default:
                resultAria.innerText = 'Неверная кнопка'
        }
        firstInput.value = '';
        secondInput.value = '';
    })
});