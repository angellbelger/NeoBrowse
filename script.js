var date = new Date()
var hour = date.getHour()
var minutes = date.getMinutes()


var display = window.document.querySelector('p#time')

function clock(paramHour = 0, paramMinutes = 0){
    display.innerHTML = `${hour}:${minutes}`
}
