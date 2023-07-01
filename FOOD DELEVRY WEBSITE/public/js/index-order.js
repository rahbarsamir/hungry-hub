const theme = document.querySelector(".mode")
const sidebar = document.querySelector('.sideitem')
const foodname = document.getElementById("food_name");
const foodprice = document.getElementById("price");
const foood = document.getElementById("food");
const item = document.getElementById("itm");
var total = document.getElementById("amount")
var container = document.getElementById("container")
const main = document.getElementById("main")
const google = document.getElementById("google")
const section=document.getElementById("section")
var tb = 1;


theme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  theme.querySelector('span:nth-child(1)').classList.toggle('active');
  theme.querySelector('span:nth-child(2)').classList.toggle('active');
})


const tot=total.innerHTML;
if(tot==0){
  console.log("zero")
  section.classList.add("dis-block")
  localStorage.removeItem('targetTime')

}
else{
  section.classList.remove("dis-block")
// script.js

// Check if a target time is already stored in the local storage
let targetTime = localStorage.getItem('targetTime');

// If no target time is stored, calculate the target time 30 minutes from now and store it
if (!targetTime) {
  targetTime = new Date();
  targetTime.setTime(targetTime.getTime() + 30 * 60 * 1000);
  localStorage.setItem('targetTime', targetTime.getTime());
} else {
  targetTime = new Date(parseInt(targetTime));
}

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Find the time remaining between now and the target date
  const timeRemaining = targetTime - now;

  // Calculate minutes and seconds
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("timer").innerHTML = `${minutes}m ${seconds}s`;

  // If the countdown is finished, display a message and remove the stored target time
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Countdown expired!";
    localStorage.removeItem('targetTime');
  }
}, 1000);
}

const cancel=()=>{
  const data={

  }
  localStorage.removeItem('targetTime');

  fetch('/cancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log('Data sent successfully');
    })
    .catch(error => {
      console.error('Error sending data:', error);
      
    });
    alert("cancel")
    window.location.href = "http://localhost:1111/";

}






















