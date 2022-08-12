import * as TimePicker from "./TimePicker.js";

const unaviableTimes = [{
    timeOfAppointment:[{
        hour: "",
        minute: "",
        meridiem: "",
    }],
},]

TimePicker.activate();
while( TimePicker.activate()){
    function confirmAppointment(){
        const chosenTime = document.querySelector('.time-pickable');
        document.querySelector('.bite').innerHTML = chosenTime;
        unaviableTimes.push(chosenTime.value);
        console.log(unaviableTimes);
        console.log(chosenTime);
        console.log(1+1);
    };

}


