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
    Trap,
    TrapProjectile
}

function makeSprites() {
    coolGuy = sprites.create(assets.image`swordGuy1`, SpriteKind.Player)
    leftSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    rightSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    upSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
    downSword = sprites.create(assets.image`nothing`, SpriteKind.Weapon)
}
function makeEnemy() {
    if (curTilemap == 1) {
        if (enemiesLeft1) {
            numEnemies = 1
            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger.setPosition(150, 150)
            enemyBurger.follow(coolGuy, 10)
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
}
function checkEnemiesAlive() {
    if (numEnemies == enemiesSlain && enemiesSlain != 0) {
        if (curTilemap == 1) {
            enemiesLeft1 = false
        }
        if (curTilemap == 2) {
            enemiesLeft2 = false
        }
        if (curTilemap == 3) {
            enemiesLeft3 = false
        }
        if (curTilemap == 4) {
            enemiesLeft4 = false
        }
        if (curTilemap == 5) {
            enemiesLeft5 = false
        }
    }
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    enemiesSlain += 1
})
function makeTraps(interval: Number) {
    if (curTilemap == 5 && !trapping) {
        if (firstCycle) {
            sawTrap1 = sprites.create(assets.image`blueDownDartTrap`, SpriteKind.Trap)
            sawTrap2 = sprites.create(assets.image`blueDownDartTrap`, SpriteKind.Trap)
            sawTrap3 = sprites.create(assets.image`purpleDownDartTrap`, SpriteKind.Trap)
            sawTrap4 = sprites.create(assets.image`blueRightDartTrap`, SpriteKind.Trap)
            sawTrap5 = sprites.create(assets.image`blueUpDartTrap`, SpriteKind.Trap)
            sawTrap6 = sprites.create(assets.image`blueUpDartTrap`, SpriteKind.Trap)
            tiles.placeOnTile(sawTrap1, tiles.getTileLocation(7, 1))
            tiles.placeOnTile(sawTrap2, tiles.getTileLocation(11, 1))
            tiles.placeOnTile(sawTrap3, tiles.getTileLocation(1, 4))
            tiles.placeOnTile(sawTrap4, tiles.getTileLocation(0, 7))
            tiles.placeOnTile(sawTrap5, tiles.getTileLocation(6, 14))
            tiles.placeOnTile(sawTrap6, tiles.getTileLocation(8, 14))
            firstCycle = false
        }
        if (interval == 1000) {
            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap1, 0, 100)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)

            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap2, 0, 100)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)

            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap3, 0, 50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)

            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap5, 0, -50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)

            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap6, 0, -50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)

        }
        if (interval == 2000) {
            sawProj = sprites.createProjectileFromSprite(assets.image`sawblade1`, sawTrap4, 75, 0)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, false)
            sawProj.setKind(SpriteKind.TrapProjectile)
        }
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`treeLeftTile`, function (sprite, location) {
            sprite.destroy()
        })
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`treeMiddleTile`, function (sprite, location) {
            sprite.destroy()
        })
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`purpleWaterTile`, function (sprite, location) {
            sprite.destroy()
        })
    }
}
function makeGuyAnimations() {
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
            50,
            false
            )
            pause(200)
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
            assets.animation`SliceRight`,
            50,
            false
            )
            pause(200)
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
            assets.animation`SliceDown`,
            50,
            false
            )
            pause(200)
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
            assets.animation`SliceUp`,
            50,
            false
            )
            pause(200)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
function tilemapTransitions() {
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
function tileMap1Transitions () {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel2`)
        curTilemap = 2
        coolGuy.setPosition(192, 30)
        scene.setBackgroundImage(assets.image`greenBackground`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        enemiesSlain = 0
        makeEnemy()
    })
}
function tileMap2Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel5`)
        curTilemap = 5
        coolGuy.setPosition(73, 25)
        scene.setBackgroundImage(assets.image`blueBackground`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        firstCycle = true
        enemiesSlain = 0
        makeEnemy()
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
        tiles.setCurrentTilemap(tilemap`ForestLevel1`)
        curTilemap = 1
        coolGuy.setPosition(192, 225)
        scene.setBackgroundImage(assets.image`forest1`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        enemiesSlain = 0
        makeEnemy()
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath3`, function (sprite, location) {
        if (location.row == 7) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath6`, function (sprite, location) {
        if (location.row == 8) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath9`, function (sprite, location) {
        if (location.row == 9) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
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
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`greenTile`, function (sprite, location) {
        if (location.col == 0) {
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(230, 135)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
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
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
        sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
        enemiesSlain = 0
        makeEnemy()
    })
}

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
sprites.onOverlap(SpriteKind.Player, SpriteKind.TrapProjectile, function (sprite, otherSprite) {
    if (guyVulnerable) {
        info.player1.setLife(info.life() - 1)
        guyVulnerable = false
        timer.after(1000, function () {
            guyVulnerable = true
        })
    }
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (guyVulnerable) {
        info.player1.setLife(info.life() - 1)
        guyVulnerable = false
        timer.after(1000, function () {
            guyVulnerable = true
        })
    }
})
function regMovement() {
    controller.moveSprite(coolGuy, 50, 50)
}
function slowMovement() {
    controller.moveSprite(coolGuy, 5, 5)
}

let coolGuy: Sprite
let upSword: Sprite
let downSword: Sprite
let rightSword: Sprite
let leftSword: Sprite
let sawTrap1: Sprite
let sawTrap2: Sprite
let sawTrap3: Sprite
let sawTrap4: Sprite
let sawTrap5: Sprite
let sawTrap6: Sprite
let sawProj: Sprite
let guyWalk: animation.Animation
let swordGuyWalk: animation.Animation
let enemyBurger: Sprite
let enemyHealth: StatusBarSprite
let guyVulnerable = true
let enemyVulnerable = true
let moving = false
let swinging = false
let trapping = false
let firstCycle = true
let enemiesLeft1 = true
let enemiesLeft2 = true
let enemiesLeft3 = true
let enemiesLeft4 = true
let enemiesLeft5 = true
let curTilemap = 1
let enemiesSlain = 0
let numEnemies: Number

makeSprites()
makeEnemy()
makeGuyAnimations()
coolGuy.setPosition(20, 92)
controller.moveSprite(coolGuy, 100, 100)
scene.setBackgroundImage(assets.image`forest1`)
scene.cameraFollowSprite(coolGuy)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`ForestLevel1`)
game.onUpdate(function () {
    rightSword.setPosition(coolGuy.x + 10, coolGuy.y)
    upSword.setPosition(coolGuy.x, coolGuy.y - 10)
    downSword.setPosition(coolGuy.x, coolGuy.y + 10)
    leftSword.setPosition(coolGuy.x - 10, coolGuy.y)
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, coolGuy)
    }
    if (firstCycle) {
        makeTraps(1)
    }
    checkEnemiesAlive()
})
game.onUpdateInterval(2000, function () {
    makeTraps(2000)
})
game.onUpdateInterval(1000, function () {
    tilemapTransitions()
    makeTraps(1000)
})
