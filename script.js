const btn_iniciar = document.getElementById("btn");
const container = document.querySelector(".container");
const hour = document.querySelectorAll(".hour");

let counter = document.createElement('b');
counter.style.fontSize = '2rem';

let array = Array.from(hour);
let current_index = 0;
let pause_or_continue = 0;
let count = 3600;
let toggle = false;
let cuenta_atras = false;

function change_color(element) {
    element.style.backgroundColor = 'var(--gray)';
}

btn_iniciar.onclick = () => {

  pause_or_continue ++;

  if (pause_or_continue % 2 === 0){
    btn_iniciar.textContent = "🏃Continuar Grindeo🏃";
    btn_iniciar.classList.add("button-41");
  } else {
    btn_iniciar.textContent = "⏸️Pausar máquina⏸️";
    btn_iniciar.classList.remove("button-41");
    btn_iniciar.classList.add("button-42");
  }

 if (toggle) {
  cuenta_atras = !cuenta_atras;
 }
 cuenta_atras = !cuenta_atras;
 
 toggle = false;
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

