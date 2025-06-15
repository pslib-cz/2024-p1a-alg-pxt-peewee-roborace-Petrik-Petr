radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
let zprava = 0
let uh = 2
let nuh = 2
let tuňák = convertToText(zprava)
basic.forever(function () {
    let tuňák = convertToText(zprava)
    console.log(tuňák)
    basic.pause(0)
    input.onButtonPressed(Button.A, function () {
        if (uh == 2) {
            zprava = 1
            uh = 1
            nuh = 2
            control.inBackground(function () {
                basic.showNumber(zprava, 0.01)
            })
        } else if (uh == 1) {
            zprava = 2
            uh = 2
            control.inBackground(function () {
                basic.showNumber(zprava, 0.01)
            })
        }
        let tuňák = convertToText(zprava)
    })
    input.onButtonPressed(Button.B, function () {
        if (nuh == 2) {
            zprava = 3
            nuh = 1
            uh = 2
            control.inBackground(function () {
                basic.showNumber(zprava, 0.01)
            })
        } else if (nuh == 1) {
            zprava = 4
            nuh = 2
            uh = 2
            control.inBackground(function () {
                basic.showNumber(zprava, 0.01)
            })
        }
    })
    input.onButtonPressed(Button.AB, function () {
        radio.sendString(tuňák)
    })
})
