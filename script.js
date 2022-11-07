setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')
function setClock() {
const currentDate = new Date()
const secondsRatio = currentDate.getSeconds() / 60
const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 1
const hoursRatio =(minutesRatio + currentDate.getHours()) / 12

setRotation(secondhand, secondsRatio)
setRotation(minutehand, minutesRatio)
setRotation(hourHand, hoursRatio)
 
}
function setRotation(element, rotationRatio){
element.style.setProperty('--rotation', rotationRatio + 360)
}
setClock()
 