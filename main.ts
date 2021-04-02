radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        if (receivedNumber == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        } else if (receivedNumber == 2) {
            basic.showLeds(`
                . # # . .
                . . . # .
                . . # . .
                . # . . .
                . # # # .
                `)
        } else if (receivedNumber == 3) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . # . .
                . . . # .
                . # # # .
                `)
        } else if (receivedNumber == 4) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (receivedNumber == 5) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . . . # .
                . # # # .
                `)
        } else if (receivedNumber == 6) {
            basic.showLeds(`
                . # # # .
                . # . . .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (receivedNumber == 7) {
            basic.showLeds(`
                . # # # .
                . . . # .
                . . . # .
                . . . # .
                . . . # .
                `)
        } else if (receivedNumber == 8) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # # # .
                `)
        } else if (receivedNumber == 9) {
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . . . # .
                . . . # .
                `)
        } else if (receivedNumber == 10) {
            basic.showLeds(`
                . # # # #
                # # # . #
                . # # . #
                . # # . #
                # # # # #
                `)
        } else if (receivedNumber == 11) {
            basic.showLeds(`
                . # . . #
                # # . # #
                . # . . #
                . # . . #
                # # . # #
                `)
        } else if (receivedNumber == 12) {
            basic.showLeds(`
                # . # # #
                # . . . #
                # . # # #
                # . # . .
                # . # # #
                `)
        } else if (receivedNumber == 13) {
            basic.showLeds(`
                # . # # #
                # . . . #
                # . # # #
                # . . . #
                # . # # #
                `)
        } else if (receivedNumber == 14) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # . # # #
                # . . . #
                # . . . #
                `)
        } else if (receivedNumber == 15) {
            basic.showLeds(`
                # . # # #
                # . # . .
                # . # # #
                # . . . #
                # . # # #
                `)
        } else if (receivedNumber == 16) {
            basic.showLeds(`
                # . # # #
                # . # . .
                # . # # #
                # . # . #
                # . # # #
                `)
        } else if (receivedNumber == 17) {
            basic.showLeds(`
                # . # # #
                # . . . #
                # . . # .
                # . . # .
                # . . # .
                `)
        } else if (receivedNumber == 18) {
            basic.showLeds(`
                # . # # #
                # . # . #
                # . # # #
                # . # . #
                # . # # #
                `)
        } else if (receivedNumber == 19) {
            basic.showLeds(`
                # . # # #
                # . # . #
                # . # # #
                # . . . #
                # . . . #
                `)
        } else if (receivedNumber == 20) {
            basic.showLeds(`
                # # # # #
                . # # . #
                # # # . #
                # . # . #
                # # # # #
                `)
        }
    }
})
basic.forever(function () {
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
    radio.setGroup(125)
    radio.sendNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
})
