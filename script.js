let display = document.querySelector("span")


function timeLoad() {
const newDate = new Date()
let hours = newDate.getHours()
let minutes = newDate.getMinutes()
let seconds = newDate.getSeconds()
let time = "AM";
let session;

switch(true){
    case (hours < 10):
        hours = "0" + hours;
    case (minutes < 10):
        minutes = "0" + minutes;
    case (seconds < 10):
        seconds = "0" + seconds;
    case (hours > 12):
        hours -= 12;   
}
    if(hours <= 12){
        session = "PM"
    } else {
        session = "AM"
    }


 time = `${hours}:${minutes}:${seconds} ${session}`;
display.textContent = time
, setTimeout(timeLoad, 1000)}

timeLoad()