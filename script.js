const btn_iniciar = document.querySelector(".button-2");
const container = document.querySelector(".container");
const btn = document.querySelectorAll(".button-3");
const hour = document.querySelectorAll(".hour");

let counter = document.createElement('b');
counter.style.fontSize = '2rem';
counter.style.margin = '0 0 0 2rem';

let array = Array.from(hour);
let current_index = 0;
let count = 3600;
let toggle = false;
let cuenta_atras = false;

function change_color(element) {
    element.style.backgroundColor = 'var(--gray)';
}

btn.forEach( element => {
  element.addEventListener('click', (event) => {
    toggle = !toggle;
  });
});

btn_iniciar.onclick = () => {

  /* variable_contador += variable_contador; */ 
  /* Luego if compruebo */

 if (toggle) {
  cuenta_atras = !cuenta_atras;
 }
 
 cuenta_atras = !cuenta_atras;
 
    toggle = false;
}

let pause = false;

function start_timer() {

  let alarm = new Audio('assets/sounds/alarm.mp3');
  let go_to_sleep = new Audio('assets/sounds/sleep-spell.mp3')

  const timer = setInterval(function() {

    if (cuenta_atras) {

      if (toggle) {
        btn_iniciar.style.display = 'inline-block';
        btn_iniciar.textContent = 'Continuar Sesión';

        if (btn_iniciar.textContent === 'Continuar Sesión') {

          // nested
           if (toggle) {
            pause = true;
            if (pause) {
              btn_iniciar.textContent = 'Pausar Sesión';
            }
           }
        }

        count++;
      } else {
        count--;
      }
    }

    if (count === 0 && current_index < array.length) {
      change_color(array[current_index]);
      alarm.play();
      current_index++;

      count = 3600;
  
      if (current_index >= array.length) {
        clearInterval(timer);
        go_to_sleep.play();
      }
    } 

    container.appendChild(counter).textContent = count;

  }, 1000);
}

start_timer();

