/**
 * My MakeCode Arcade Game
 * 
 * Built on
 * 
 * MakeCode Arcade blocks template v. 2.2.2
 * 
 * Template last update: 26 Aug 2020 ak
 */
// My MakeCode Arcade Game
// 
// Built on
// 
// MakeCode Arcade blocks template v. 2.2.0
// 
// Template last update: 26 Aug 2020 ak
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
// Main game update function called by `on update` loop
function updateGame () {
	
}
let gameMode = 0
let mySplashScreen: SplashScreens = null
gameMode = -1
startAttractMode()
game.onUpdate(function () {
    if (gameMode == 0) {
        updateGame()
    } else {
        if (game.runtime() >= mySplashScreen.nextTime) {
            mySplashScreen.rotate()
        }
    }
})
