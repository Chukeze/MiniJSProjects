const unaviableTimes = [{
    timeOfAppointment:[{
        hour: "",
        minute: "",
        meridiem: "",
    }],
},];


function confirmAppointment(){
    const chosenTime = document.querySelector('.time-pickable');
    document.querySelector('.bite').innerHTML = chosenTime;
    unaviableTimes.push(chosenTime.value);
    console.log(unaviableTimes);
    console.log(chosenTime);
    console.log(1+1);
};






//Variable for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

//varible for time value
let seconds = 0;
let minutes = 0;
let hours = 0;

//variable for leading zero
let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;

//variable set ineterva and timer status
let timerInterval = null;
let timerStatus = "stopped";

//deal with increment and display
function stopWatch(){

    seconds++
    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1 ){
            minutes = 0;
            hours++
        }
    }

    if(seconds < 10){

        leadingSec = "0" + seconds.toString();
    }else{
        leadingSec = seconds;
    }

    if(minutes < 10){

        leadingMin = "0" + minutes.toString();
    }else{
        leadingMin = minutes;
    }

    if(hours < 10){

        leadingHr = "0" + hours.toString();
    }else{
        leadingHr = hours;
    }
    let displayTimer = document.getElementById('timer').innerText = leadingHr + ":" + leadingMin + ":" + leadingSec;
}

//
startStopBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"><i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"><i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener("click", function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00"
})