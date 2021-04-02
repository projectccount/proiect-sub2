radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 30) {
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(125)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 102)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 152)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 152)
        basic.showIcon(IconNames.No)
    }
    radio.sendNumber(input.temperature())
    radio.sendValue("name", maqueen.Ultrasonic(PingUnit.Centimeters))
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (value == 2) {
        basic.showLeds(`
            . # # . .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
    } else if (value == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . # .
            . # # # .
            `)
    } else if (value == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (value == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    } else if (value == 6) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (value == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (value == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    } else if (value == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    } else if (value == 10) {
        basic.showLeds(`
            . # # # #
            # # # . #
            . # # . #
            . # # . #
            # # # # #
            `)
    } else if (value == 11) {
        basic.showLeds(`
            . # . . #
            # # . # #
            . # . . #
            . # . . #
            # # . # #
            `)
    } else if (value == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (value == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (value == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (value == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (value == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (value == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (value == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (value == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (value == 20) {
        basic.showLeds(`
            # # # # #
            . # # . #
            # # # . #
            # . # . #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
