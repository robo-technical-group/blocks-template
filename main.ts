/**
 * My MakeCode Arcade Game
 * 
 * Built on
 * 
 * MakeCode Arcade blocks template v. 2.1.2
 * 
 * Template last update: 03 Aug 2020 ak
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
    }
})
function startGame () {
    gameMode = 0
    mySplashScreen.release()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
    }
})
function startAttractMode () {
    gameMode = 1
    showSplashScreen()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameMode == 1) {
        startGame()
    } else {
    	
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
