const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');
const verificar = document.querySelector('#verificar');
const message = document.querySelector('#mensaje');

const PASS_1= '911';
const PASS_2 = '714';

verificar.addEventListener('click', () => {
    const a = select1.value;
    const b = select2.value;
    const c = select3.value;

    const entererPass = a + b + c;

    if (entererPass === PASS_1) {
        mensaje.classList.add;
        mensaje.classList.remove;
        mensaje.textContent = 'Password 1 correcto';
        mensaje.style.color = 'green';
    } else if (entererPass === PASS_2) {
        mensaje.classList.remove;
        mensaje.classList.add;
        mensaje.textContent = 'Password 2 correcto';
        mensaje.style.color = 'green';
    } else {
        mensaje.classList.remove;
        mensaje.classList.add;
        mensaje.textContent = 'Password incorrecto';
        mensaje.style.color = 'red';
    }
});