var date = new Date()
var hour = date.getHours()
var minutes = date.getMinutes()


var display = window.document.querySelector('p#time')

function clock(paramHour = 0, paramMinutes = 0, paramLetter = 'AM'){
    if (Number(hour.value) >= 0 || Number(hour.value) < 12){
        paramLetter = 'AM'
    }else {
        paramLetter = 'PM'
    }
    if (Number(minutes.value) < 10 ){
        display.innerHTML = `${hour}:0${minutes} ${paramLetter}`
    }else{
        display.innerHTML = `${hour}:${minutes} ${paramLetter}`
    }
}
