/* Cómo evitar el problema de la cache(se refresca la página cada x tiempo) */

const aside = document.querySelector(".aside");
const hour = document.querySelectorAll(".hour");

const btn_iniciar = document.getElementById("btn");
const btn_less_time = document.getElementById("btn-less-time");
const input_destructivo = document.getElementById("input-destructivo"); 
const submit = document.getElementById("submit");


/* style of counter */
let counter = document.createElement('b');
counter.style.fontSize = '2rem';
counter.style.color = 'var(--white)';

let array = Array.from(hour);
let current_index = 0;

/* Variables para el texto de los botones*/
let cuenta_atras = false;
let matando_tiempo = false;

/* Contadores para el texto de los botones */
let pause_or_continue = 0;
let regrese_de_la_fumiada = 0;

/* Variables para el contador */
let count = 3600;
let toggle = false;


/* This is CSS custom property thing */
const logic_background = getComputedStyle(document.documentElement).getPropertyValue('--logic-background');

eval(logic_background);

function change_color(element) {
    element.style.backgroundColor = 'var(--gray)';
}

/* To change btn_less_time text */
submit.onclick = () => {
  btn_less_time.textContent = `${input_destructivo.value}`;
}

btn_iniciar.onclick = () => {

  pause_or_continue ++;

  /* Checking if is even feminine or odd masculine */
  if (pause_or_continue % 2 === 0){
    btn_iniciar.textContent = "🏃Continuar Grindeo🏃";
    btn_iniciar.classList.add("btn-success");
  } else {
    btn_iniciar.textContent = "⏸️Pausar máquina⏸️";
    btn_iniciar.classList.remove( "btn-sucess");
    btn_iniciar.classList.add("btn-warning");
  }

 if (toggle) {
  cuenta_atras = !cuenta_atras;
 }
 cuenta_atras = !cuenta_atras;
 
 toggle = false;
}

btn_less_time.onclick = () => {

  matando_tiempo = !matando_tiempo;
  regrese_de_la_fumiada++;

  if (regrese_de_la_fumiada % 2 === 0){
    btn_less_time.textContent = `${input_destructivo.value}`;
  } else {
    btn_less_time.textContent = "Regresé";
  }
}
  
function start_timer() {

  let alarm = new Audio('assets/sounds/alarm.mp3');
  let go_to_sleep = new Audio('assets/sounds/sleep-spell.mp3')

  const timer = setInterval(function() {

    if (cuenta_atras && !toggle) {
        count--;
      } else  if (toggle && !cuenta_atras) {
        count++;
      }

    if (matando_tiempo) {
     count--;
     count--;
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

    aside.appendChild(counter).textContent = count;

  }, 1000);
}

start_timer();
