input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        led.plot(2, 2)
        basic.pause(500)
        led.unplot(2, 2)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(0)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index2 = 0; index2 <= 255; index2++) {
        led.setBrightness(index2)
        basic.pause(20)
    }
    basic.pause(500)
    for (let index2 = 0; index2 <= 255; index2++) {
        led.setBrightness(255 - index2)
        basic.pause(20)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 255; index++) {
        led.plotBrightness(2, 2, index)
        basic.pause(3)
    }
    basic.pause(1000)
    for (let index = 0; index <= 255; index++) {
        led.plotBrightness(2, 2, 255 - index)
        basic.pause(3)
    }
})
music.playTone(988, music.beat(BeatFraction.Whole))
let maximumbrightness = 124
let pausesbetweensteps = 5
basic.forever(function () {
	
})
