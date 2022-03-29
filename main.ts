radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        nummer = maqueen.Ultrasonic(PingUnit.Centimeters)
        radio.sendValue("name", nummer)
    }
})
let nummer = 0
radio.setGroup(169)
