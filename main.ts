let knobValue = 0
let maxScale = 0
let myStrip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    maxScale = 1024
    knobValue = pins.analogReadPin(AnalogPin.P1)
    myStrip.showBarGraph(knobValue, maxScale)
    basic.pause(100)
    basic.pause(1)
})
