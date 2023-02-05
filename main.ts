enum ActionKind {
    NormalWalking,
    SwordWalking,
    Idle,
    SwingRight,
    SwingLeft,
    SwingUp,
    SwingDown,
    Jumping,
    Walking
}
enum SpriteKind {
    Weapon,
    Trap
}
function makeSprites() {
    coolGuy = sprites.create(assets.image`swordGuy1`, SpriteKind.Player)
    leftSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    rightSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    upSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    downSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
}
function makeEnemies() {
    enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
    enemyBurger.follow(coolGuy, 10)
    enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
    enemyHealth.attachToSprite(enemyBurger)
    enemyHealth.setColor(2, 0)
    enemyHealth.max = 3
    enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
function makeTraps() {
    if(curTilemap == 5) {
        trapping = true
        let dartTrap1 = sprites.create(assets.image`blueDartTrap`, SpriteKind.Trap)
        let dartTrap2 = sprites.create(assets.image`blueDartTrap`, SpriteKind.Trap)
        let dartProj1: Sprite
        let dartProj2: Sprite
        tiles.placeOnTile(dartTrap1, tiles.getTileLocation(7, 0))
        tiles.placeOnTile(dartTrap2, tiles.getTileLocation(11, 0))
        for (let i = 0; i < 5; i++) {
            timer.after(1000, function() {
                dartProj1 = sprites.createProjectileFromSprite(assets.image`dart`, dartTrap1, 0, 100)
                dartProj2 = sprites.createProjectileFromSprite(assets.image`dart`, dartTrap2, 0, 100)
            })
            
        }

        // while(curTilemap == 5) {
        //     pause(1000)
        //     let dartProj1 = sprites.createProjectileFromSprite(assets.image`dart`, dartTrap1, 0, 10)
        //     let dartProj2 = sprites.createProjectileFromSprite(assets.image`dart`, dartTrap2, 0, 10)
        // }
        trapping = false
    }
    
}
function makeGuyAnimations () {
    swordGuyWalk = animation.createAnimation(ActionKind.SwordWalking, 200)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy1`)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy2`)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy3`)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy4`)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy3`)
    swordGuyWalk.addAnimationFrame(assets.image`swordGuy2`)
    animation.attachAnimation(coolGuy, swordGuyWalk)
    guyWalk = animation.createAnimation(ActionKind.NormalWalking, 200)
    guyWalk.addAnimationFrame(assets.image`guy`)
    guyWalk.addAnimationFrame(assets.image`guy2`)
    guyWalk.addAnimationFrame(assets.image`guy3`)
    guyWalk.addAnimationFrame(assets.image`guy4`)
    guyWalk.addAnimationFrame(assets.image`guy3`)
    guyWalk.addAnimationFrame(assets.image`guy2`)
    animation.attachAnimation(coolGuy, guyWalk)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed()) {
        if (controller.left.isPressed()) {
            slowMovement()
            swinging = true
            animation.setAction(coolGuy, ActionKind.NormalWalking)
            animation.runImageAnimation(
            leftSword,
            assets.animation`SliceLeft`,
            75,
            false
            )
            pause(250)
            leftSword.destroy()
            leftSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
            animation.setAction(coolGuy, ActionKind.SwordWalking)
            swinging = false
            regMovement()
        } else if (controller.right.isPressed()) {
            slowMovement()
            swinging = true
            animation.setAction(coolGuy, ActionKind.NormalWalking)
            animation.runImageAnimation(
            rightSword,
            assets.animation`SliceRight0`,
            100,
            false
            )
            pause(350)
            rightSword.destroy()
            rightSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
            animation.setAction(coolGuy, ActionKind.SwordWalking)
            swinging = false
            regMovement()
        } else if (controller.down.isPressed()) {
            slowMovement()
            swinging = true
            animation.setAction(coolGuy, ActionKind.NormalWalking)
            animation.runImageAnimation(
            downSword,
            assets.animation`SliceDown0`,
            100,
            false
            )
            pause(350)
            downSword.destroy()
            downSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
            animation.setAction(coolGuy, ActionKind.SwordWalking)
            swinging = false
            regMovement()
        } else if (controller.up.isPressed()) {
            slowMovement()
            swinging = true
            animation.setAction(coolGuy, ActionKind.NormalWalking)
            animation.runImageAnimation(
            upSword,
            assets.animation`SliceUp0`,
            100,
            false
            )
            pause(350)
            upSword.destroy()
            upSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
            animation.setAction(coolGuy, ActionKind.SwordWalking)
            swinging = false
            regMovement()
        } else {
        	
        }
        pause(150)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(swinging)) {
        animation.setAction(coolGuy, ActionKind.SwordWalking)
    } else {
        animation.setAction(coolGuy, ActionKind.NormalWalking)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(swinging)) {
        animation.setAction(coolGuy, ActionKind.SwordWalking)
    } else {
        animation.setAction(coolGuy, ActionKind.NormalWalking)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(swinging)) {
        animation.setAction(coolGuy, ActionKind.SwordWalking)
    } else {
        animation.setAction(coolGuy, ActionKind.NormalWalking)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(swinging)) {
        animation.setAction(coolGuy, ActionKind.SwordWalking)
    } else {
        animation.setAction(coolGuy, ActionKind.NormalWalking)
    }
})
function tilemapTransitions () {
    if (curTilemap == 1) {
        tileMap1Transitions()
    } 
    if (curTilemap == 2) {
        tileMap2Transitions()
    }
    if (curTilemap == 3) {
        tileMap3Transitions()
    }
    if (curTilemap == 4) {
        tileMap4Transitions()
    }
    if (curTilemap == 5) {
        tileMap5Transitions()
    }
}
function tileMap1Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel2`)
        curTilemap = 2
        coolGuy.setPosition(192, 30)
        scene.setBackgroundImage(assets.image`greenBackground`)
    })
}
function tileMap2Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel5`)
        curTilemap = 5
        coolGuy.setPosition(73, 25)
        scene.setBackgroundImage(assets.image`blueBackground`)
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel1`)
        curTilemap = 1
        coolGuy.setPosition(192, 225)
        scene.setBackgroundImage(assets.image`forest1`)
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath3`, function (sprite, location) {
        if (location.row == 7) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath6`, function (sprite, location) {
        if (location.row == 8) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath9`, function (sprite, location) {
        if (location.row == 9) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
        }
    })
} 
function tileMap3Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass1`, function (sprite, location) {
        if (location.col == 0) {
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(230, 135)
            scene.setBackgroundImage(assets.image`greenBackground`)
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`greenTile`, function (sprite, location) {
        if (location.col == 0) {
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(230, 135)
            scene.setBackgroundImage(assets.image`greenBackground`)
        }
    })
}
function tileMap4Transitions() {

}
function tileMap5Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel2`)
        curTilemap = 2
        coolGuy.setPosition(73, 230)
        scene.setBackgroundImage(assets.image`greenBackground`)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (guyVulnerable) {
        info.player1.setLife(info.life() - 1)
        guyVulnerable = false
        timer.after(1000, function () {
            guyVulnerable = true
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, function (sprite, otherSprite) {
    if (guyVulnerable) {
        info.player1.setLife(info.life() - 1)
        guyVulnerable = false
        timer.after(1000, function () {
            guyVulnerable = true
        })
    }
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (enemyVulnerable) {
        enemyHealth.value += -1
        enemyVulnerable = false
        timer.after(500, function () {
            enemyVulnerable = true
        })
    }
    if (enemyHealth.value == 0) {
        otherSprite.destroy()
    }
})
function regMovement() {
    controller.moveSprite(coolGuy, 50, 50)
}
function slowMovement () {
    controller.moveSprite(coolGuy, 5, 5)
}

let coolGuy: Sprite
let upSword: Sprite
let downSword: Sprite
let rightSword: Sprite
let leftSword: Sprite
let guyWalk: animation.Animation
let swordGuyWalk: animation.Animation
let enemyBurger: Sprite
let enemyHealth: StatusBarSprite
let swinging = false
let enemyVulnerable = true
let guyVulnerable = true
let moving = false
let trapping = false
let curTilemap = 1

makeSprites()
makeEnemies()
makeTraps()
makeGuyAnimations()
coolGuy.setPosition(20, 92)
controller.moveSprite(coolGuy, 100, 100)

scene.setBackgroundImage(assets.image`forest1`)
scene.cameraFollowSprite(coolGuy)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`ForestLevel1`)

game.onUpdateInterval(1, function () {
    rightSword.setPosition(coolGuy.x + 10, coolGuy.y)
    upSword.setPosition(coolGuy.x, coolGuy.y - 10)
    downSword.setPosition(coolGuy.x, coolGuy.y + 10)
    leftSword.setPosition(coolGuy.x - 10, coolGuy.y)
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!moving) {
        animation.stopAnimation(animation.AnimationTypes.All, coolGuy)
    }
})
game.onUpdateInterval(500, function() {
    tilemapTransitions()
    if (!trapping) {
        makeTraps()
    }
})
