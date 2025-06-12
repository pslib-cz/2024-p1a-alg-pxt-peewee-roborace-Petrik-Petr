radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
let packet: string
type zolik = {
    x: Number,
    y: Number
}
let gril = 0
let f = 0
let kolik: zolik = { x: 0, y: 0 }
let zprava: string
let zprva: string

basic.forever(function () {
    input.onButtonPressed(Button.A, function () {
        kolik.x = 1
    })
    input.onButtonPressed(Button.B, function () {
        kolik.y = 1
    })
    kolik.y = input.acceleration(Dimension.Y)
    zprva = convertToText((kolik.x))
    zprava = convertToText((kolik.y))
    basic.pause(10)
    radio.sendString(zprava + ',' + zprva)
    basic.pause(10)
})
