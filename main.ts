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
    TrapProjectile,
    Box
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
    if (curTilemap == 5) {
        if (enemiesLeft5) {
            numEnemies = 1
            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            tiles.placeOnTile(enemyBurger, tiles.getTileLocation(9, 7))
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
        if (interval == 1000) {
            if (coolGuy.y <= 100) {
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(7, 1))
                sawProj.setVelocity(0, 100)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(11, 1))
                sawProj.setVelocity(0, 100)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            } else if (coolGuy.y >= 100 && coolGuy.y <= 170) {
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(1, 4))
                sawProj.setVelocity(0, 100)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            } else if (coolGuy.y >= 170) {
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(6, 14))
                sawProj.setVelocity(0, -100)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(8, 14))
                sawProj.setVelocity(0, -100)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            } else {
                sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            }
        }
        if (interval == 2000) {
            if (coolGuy.y >= 100 && coolGuy.y <= 200) {
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(0, 7))
                sawProj.setVelocity(75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            }
        }
        if (sprites.allOfKind(SpriteKind.TrapProjectile).length >= 5) {
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
        }
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`treeLeftTile`, function (sprite, location) {
            //animation.stopAnimation(animation.AnimationTypes.All, sprite)
            sprite.destroy()
        })
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`treeMiddleTile`, function (sprite, location) {
            //animation.stopAnimation(animation.AnimationTypes.All, sprite)
            sprite.destroy()
        })
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`purpleWaterTile`, function (sprite, location) {
            //animation.stopAnimation(animation.AnimationTypes.All, sprite)
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
            isSwingLeft = true
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
            isSwingLeft = false
            regMovement()
        } else if (controller.right.isPressed()) {
            slowMovement()
            swinging = true
            isSwingRight = true
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
            isSwingRight = false
            regMovement()
        } else if (controller.down.isPressed()) {
            slowMovement()
            swinging = true
            isSwingDown = true
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
            isSwingDown = false
            regMovement()
        } else if (controller.up.isPressed()) {
            slowMovement()
            swinging = true
            isSwingUp = true
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
            isSwingUp = false
            regMovement()
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
function tileMap1Transitions() {
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
        enemiesSlain = 0
        makeEnemy()
        info.startCountdown(30)
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
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if(location.col == 15) {
            tiles.setCurrentTilemap(tilemap`ForestLevel4`)
            curTilemap = 4
            tiles.placeOnTile(coolGuy, tiles.getTileLocation(1, 3))
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            enemiesSlain = 0
            makeEnemy()
            woodBox = sprites.create(assets.image`woodBox`, SpriteKind.Box)
            tiles.placeOnTile(woodBox, tiles.getTileLocation(6, 13))
        }
    })
}
function tileMap4Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if(location.col == 0) {
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            tiles.placeOnTile(coolGuy, tiles.getTileLocation(14,3))
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            //need to create a default state of the box being on the button when completed
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap5Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        info.stopCountdown()
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
sprites.onOverlap(SpriteKind.TrapProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Box, function (sprite, otherSprite) {
    boxReachedEnd = false
    boxFollower = sprites.create(assets.image`nothing`, SpriteKind.Box)
    if (isSwingRight) {
        tiles.placeOnTile(boxFollower, tiles.getTileLocation(woodBox.tilemapLocation().x + 1, woodBox.tilemapLocation().y))
    } else if (isSwingLeft) {
        tiles.placeOnTile(boxFollower, tiles.getTileLocation(woodBox.tilemapLocation().x - 1, woodBox.tilemapLocation().y))
    } else if (isSwingUp) {
        tiles.placeOnTile(boxFollower, tiles.getTileLocation(woodBox.tilemapLocation().x, woodBox.tilemapLocation().y - 1))
    } else if (isSwingDown) {
        tiles.placeOnTile(boxFollower, tiles.getTileLocation(woodBox.tilemapLocation().x, woodBox.tilemapLocation().y + 1))
    }
    woodBox.follow(boxFollower, 80)
})
// sprites.onCreated(SpriteKind.Box, function(sprite) {
//     if (sprites.allOfKind(SpriteKind.Box).length >= 4) {
//         sprite.destroy()
//     }
// })
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.TrapProjectile, function (sprite, otherSprite) {
    if(isSwingRight) {
        otherSprite.setVelocity(75,0)
    } else if(isSwingLeft) {
        otherSprite.setVelocity(-75, 0)
    } else if(isSwingUp) {
        otherSprite.setVelocity(0, -75)
    } else if(isSwingDown) {
        otherSprite.setVelocity(0, 75)
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
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
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
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    if(info.life() != 0) {
        tiles.setCurrentTilemap(tilemap`ForestLevel2`)
        curTilemap = 2
        coolGuy.setPosition(73, 230)
        scene.setBackgroundImage(assets.image`greenBackground`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
        sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
        enemiesSlain = 0
        makeEnemy()
    }
})
function regMovement() {
    controller.moveSprite(coolGuy, 65, 65)
}
function slowMovement() {
    controller.moveSprite(coolGuy, 5, 5)
}
function noMovement() {
    controller.moveSprite(coolGuy, 0, 0)
}


let coolGuy: Sprite
let upSword: Sprite
let downSword: Sprite
let rightSword: Sprite
let leftSword: Sprite
let sawProj: Sprite
let woodBox: Sprite
let boxFollower: Sprite
let guyWalk: animation.Animation
let swordGuyWalk: animation.Animation
let enemyBurger: Sprite
let enemyHealth: StatusBarSprite
let guyVulnerable = true
let enemyVulnerable = true
let moving = false
let swinging = false
let isSwingUp = false
let isSwingDown = false
let isSwingLeft = false
let isSwingRight = false
let trapping = false
let boxReachedEnd = true
let enemiesLeft1 = true
let enemiesLeft2 = true
let enemiesLeft3 = true
let enemiesLeft4 = true
let enemiesLeft5 = true
let notFollowing5 = true
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
    checkEnemiesAlive()
    if (coolGuy.y >= 100 && curTilemap == 5 && notFollowing5) {
        enemyBurger.follow(coolGuy, 10)
        notFollowing5 = false
    }
    // if (sprites.allOfKind(SpriteKind.Box).length == 3) {
    //     if (woodBox.x == boxFollower.x && woodBox.y == boxFollower.y) {
    //         boxReachedEnd = true
    //         boxFollower.destroy()
    //     }
    // }
    
})
game.onUpdateInterval(2000, function () {
    makeTraps(2000)
})
game.onUpdateInterval(1000, function () {
    tilemapTransitions()
    makeTraps(1000)
})
// game.onUpdateInterval(5000, function () {
//     control.heapSnapshot()
// })