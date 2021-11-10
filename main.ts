let startTime = 0
let buttonpressed = false
let moleposition = 0
basic.showString("3-2-1")
let gamerunning = true
while (gamerunning) {
    moleposition = randint(0, 1)
    buttonpressed = false
    basic.pause(300)
    if (moleposition == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    startTime = input.runningTime()
    while (buttonpressed == false) {
        if (input.runningTime() - startTime > 1000) {
            game.gameOver()
        }
        if (moleposition == 0 && input.buttonIsPressed(Button.A)) {
            buttonpressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (moleposition == 0 && input.buttonIsPressed(Button.B)) {
            buttonpressed = true
            game.gameOver()
        } else if (moleposition == 1 && input.buttonIsPressed(Button.B)) {
            buttonpressed = true
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            game.addScore(1)
        } else if (moleposition == 1 && input.buttonIsPressed(Button.A)) {
            buttonpressed = true
            game.gameOver()
        } else {
        	
        }
    }
}
basic.forever(function () {
	
})
