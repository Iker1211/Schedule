const btn = document.querySelectorAll(".button-3");
const hour = document.querySelectorAll(".hour");

let toggle = false;
let array = Array.from(hour);
let current_index = 0;
let count = 3600;

function change_color(element) {
    element.style.backgroundColor = 'var(--gray)';
}

btn.forEach( element => {
  element.addEventListener('click', (event) => {
    toggle = !toggle;
  });
});

function start_timer() {

  let alarm = new Audio('assets/sounds/alarm.mp3');
  let go_to_sleep = new Audio('assets/sounds/sleep-spell.mp3')

  const timer = setInterval(function() {
    if (!toggle) {
      count--;
    } else {
      count++;
    }
    console.log(count); //see

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
  }, 1000);
}

start_timer();

