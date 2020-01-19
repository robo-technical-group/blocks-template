/**
 * My MakeCode Arcade Game
 * 
 * Built on
 * 
 * MakeCode Arcade blocks template v. 2.0.0
 * 
 * Template last update: 13 Jun 2019 ak
 */
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
function startGame () {
    gameMode = 0
    mySplashScreen.release()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
function showSplashScreen () {
    mySplashScreen = infoScreens.createSplashScreen()
    mySplashScreen.setTitles(["My MakeCode", "Arcade Game"])
    mySplashScreen.addHeadlines(["My Game is", "(C) 20XX"])
    mySplashScreen.addHeadlines(["Programmed in", "MakeCode Arcade"])
    mySplashScreen.addHeadlines(["by", "Me"])
    mySplashScreen.addInstructionsList(["Left/Right = Action", "Up = Action", "Down = Action", "A = Action", "B = Action"])
    mySplashScreen.build()
}
function startAttractMode () {
    gameMode = 1
    showSplashScreen()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    }
})
let mySplashScreen: SplashScreens = null
let gameMode = 0
gameMode = -1
startAttractMode()
game.onUpdate(function () {
    if (gameMode == 0) {
    	
    } else {
        if (game.runtime() >= mySplashScreen.nextTime) {
            mySplashScreen.rotate()
        }
    }
})
