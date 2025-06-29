const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const verificar= document.querySelector('#verificar');

verificar.addEventListener('click', () => {
    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);

    let total = a + b + c;

    if (total > 10) {
        mensaje.textCnsajet = 'Llevas demasiados stickers';
    } else {
        mensaje.textContent = 'Llevas ' + total + ' stickers';
    }
});

