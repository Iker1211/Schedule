
const hour = document.querySelectorAll(".hour");
let array = Array.from(hour);

let current_index = 0;
let count = 3600;

let alarm = new Audio('assets/sounds/funny-alarm.mp3');
alarm.play();

function change_color(element) {
    element.style.backgroundColor = 'var(--gray)';
}

function start_timer() {

  const timer = setInterval(function() {
    count--;
    console.log(count); //see

    if (count === 0) {
      change_color(array[current_index]);

      current_index++;

      count = 3600;
  
      if (current_index >= array.length) {
        clearInterval(timer);
        alert('Duerma mamita');
      }
    }
  }, 1000);
}

start_timer();

