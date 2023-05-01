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
    EnemyProjectile,
    Box,
    Button,
    Key,
    Misc
}

function makeSprites() {
    coolGuy = sprites.create(assets.image`swordGuy1`, SpriteKind.Player)
    coolGuy.z = 2
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
            enemyBurger.setPosition(200, 150)
            enemyBurger.z = 3
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if (curTilemap == 2) {
        if (enemiesLeft2) {
            numEnemies = 2
            tacoAlive = true
            enemyTaco2 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco2.setPosition(125, 200)
            enemyTaco2.z = 3
            enemyHealth2 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth2.attachToSprite(enemyTaco2)
            enemyHealth2.setColor(2, 0)
            enemyHealth2.max = 2
            enemyHealth2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger.setPosition(200, 150)
            enemyBurger.follow(coolGuy, 25)
            enemyBurger.z = 3
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if(curTilemap == 4) {
        if(enemiesLeft4) {
            numEnemies = 3
            tacoAlive = true
            enemyTaco = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco.setPosition(100, 150)
            enemyTaco.z = 3
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyTaco)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 2
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyTaco2 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco2.setPosition(150, 220)
            enemyTaco2.z = 3
            enemyHealth2 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth2.attachToSprite(enemyTaco2)
            enemyHealth2.setColor(2, 0)
            enemyHealth2.max = 2
            enemyHealth2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyTaco3 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco3.setPosition(200, 175)
            enemyTaco3.z = 3
            enemyHealth3 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth3.attachToSprite(enemyTaco3)
            enemyHealth3.setColor(2, 0)
            enemyHealth3.max = 2
            enemyHealth3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if (curTilemap == 5) {
        if(enemiesLeft5) {
            numEnemies = 1
            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger.z = 3
            tiles.placeOnTile(enemyBurger, tiles.getTileLocation(9, 7))
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if (curTilemap == 6) {
        if(enemiesLeft6) {
            numEnemies = 4
            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger.z = 3
            tiles.placeOnTile(enemyBurger, tiles.getTileLocation(10, 11))
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyBurger2 = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger2.z = 3
            tiles.placeOnTile(enemyBurger2, tiles.getTileLocation(2, 13))
            enemyHealth2 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth2.attachToSprite(enemyBurger2)
            enemyHealth2.setColor(2, 0)
            enemyHealth2.max = 3
            enemyHealth2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyTaco3 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco3.z = 3
            tiles.placeOnTile(enemyTaco3, tiles.getTileLocation(2, 6))
            enemyHealth3 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth3.attachToSprite(enemyTaco3)
            enemyHealth3.setColor(2, 0)
            enemyHealth3.max = 2
            enemyHealth3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyTaco4 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco4.z = 3
            tiles.placeOnTile(enemyTaco4, tiles.getTileLocation(5, 13))
            enemyHealth4 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth4.attachToSprite(enemyTaco4)
            enemyHealth4.setColor(2, 0)
            enemyHealth4.max = 2
            enemyHealth4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if (curTilemap == 8) {
        if (enemiesLeft8) {
            numEnemies = 3
            enemyBurger = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger.z = 3
            enemyBurger.follow(coolGuy, 25)
            tiles.placeOnTile(enemyBurger, tiles.getTileLocation(8, 4))
            enemyHealth = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth.attachToSprite(enemyBurger)
            enemyHealth.setColor(2, 0)
            enemyHealth.max = 3
            enemyHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyBurger2 = sprites.create(assets.image`smallBurger`, SpriteKind.Enemy)
            enemyBurger2.z = 3
            enemyBurger2.follow(coolGuy, 25)
            tiles.placeOnTile(enemyBurger2, tiles.getTileLocation(8, 12))
            enemyHealth2 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth2.attachToSprite(enemyBurger2)
            enemyHealth2.setColor(2, 0)
            enemyHealth2.max = 3
            enemyHealth2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)

            enemyTaco3 = sprites.create(assets.image`enemyTaco`, SpriteKind.Enemy)
            enemyTaco3.z = 3
            tiles.placeOnTile(enemyTaco3, tiles.getTileLocation(12, 8))
            enemyHealth3 = statusbars.create(20, 4, StatusBarKind.Health)
            enemyHealth3.attachToSprite(enemyTaco3)
            enemyHealth3.setColor(2, 0)
            enemyHealth3.max = 2
            enemyHealth3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        }
    }
    else if (curTilemap == 10) {
        bossPizza = sprites.create(assets.image`bossPizza`, SpriteKind.Enemy)
        bossPizza.z = 3
        tiles.placeOnTile(bossPizza, tiles.getTileLocation(6, 6))
        scaling.scaleToPercent(bossPizza, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        bossHealth = statusbars.create(60, 12, StatusBarKind.Health)
        bossHealth.attachToSprite(bossPizza)
        bossHealth.setColor(2, 0)
        bossHealth.max = 20
        bossHealth.setBarBorder(1, 15)
        bossHealth.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    }
}
function updateBoss() {
    if(!halfHealth && bossHealth.value != 0) {
        if(!dashing && !bossIsStunned) {
            dashing = true
            bossPizza.setImage(assets.image`bossPizzaDash`)
            let dx = coolGuy.x - bossPizza.x;
            let dy = coolGuy.y - bossPizza.y;
            let angleToTarget = Math.atan2(dy, dx);
            bossVx = Math.cos(angleToTarget) * 75;
            bossVy = Math.sin(angleToTarget) * 75;
            bossPizza.setVelocity(bossVx, bossVy)
        } 
        else if(dashing) {
            if (bossPizza.vx != bossVx || bossPizza.vy != bossVy) {
                bossPizza.setVelocity(0, 0)
                bossIsStunned = true
                dashing = false
            }
        } 
        else if(bossIsStunned) {
            bossPizza.setImage(assets.image`bossPizzaStunned`)
            timer.after(3000, function() {
                if(!halfHealth) {
                    bossPizza.setImage(assets.image`bossPizza`)
                } else {
                    bossPizza.setImage(assets.image`bossPizzaAngry`)
                }
                timer.after(500, function() {
                    bossIsStunned = false
                })
            })
        }
    } 
    else if (halfHealth && bossHealth.value != 0) {
        if (!dashing && !bossIsStunned && justUsedOrbs) {
            dashing = true
            bossPizza.setImage(assets.image`bossPizzaAngryDash`)
            let dx = coolGuy.x - bossPizza.x;
            let dy = coolGuy.y - bossPizza.y;
            let angleToTarget = Math.atan2(dy, dx);
            bossVx = Math.cos(angleToTarget) * 75;
            bossVy = Math.sin(angleToTarget) * 75;
            bossPizza.setVelocity(bossVx, bossVy)
        }
        else if (dashing) {
            if (bossPizza.vx != bossVx || bossPizza.vy != bossVy) {
                bossPizza.setVelocity(0, 0)
                bossIsStunned = true
                dashing = false
            }
        }
        else if (bossIsStunned) {
            bossPizza.setImage(assets.image`bossPizzaAngryStunned`)
            timer.after(3000, function () {
                bossPizza.setImage(assets.image`bossPizzaAngry`)
                timer.after(500, function () {
                    bossIsStunned = false
                    justUsedOrbs = false
                })
            })
        }
        else if (!justUsedOrbs && !shootingOrbs) {
            shootingOrbs = true
            let dx = coolGuy.x - bossPizza.x;
            let dy = coolGuy.y - bossPizza.y;
            let angleToTarget = Math.atan2(dy, dx);
            let targetTrajVx = Math.cos(angleToTarget) * 100;
            let targetTrajVy = Math.sin(angleToTarget) * 100;
            sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

            dx = coolGuy.x - bossPizza.x;
            dy = coolGuy.y - bossPizza.y;
            angleToTarget = Math.atan2(dy, dx);
            targetTrajVx = Math.cos(angleToTarget + 15) * 100;
            targetTrajVy = Math.sin(angleToTarget + 15) * 100;
            sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

            dx = coolGuy.x - bossPizza.x;
            dy = coolGuy.y - bossPizza.y;
            angleToTarget = Math.atan2(dy, dx);
            targetTrajVx = Math.cos(angleToTarget - 15) * 100;
            targetTrajVy = Math.sin(angleToTarget - 15) * 100;
            sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

            timer.after(100, function() {
                dx = coolGuy.x - bossPizza.x;
                dy = coolGuy.y - bossPizza.y;
                angleToTarget = Math.atan2(dy, dx);
                targetTrajVx = Math.cos(angleToTarget + 20) * 100;
                targetTrajVy = Math.sin(angleToTarget + 20) * 100;
                sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

                dx = coolGuy.x - bossPizza.x;
                dy = coolGuy.y - bossPizza.y;
                angleToTarget = Math.atan2(dy, dx);
                targetTrajVx = Math.cos(angleToTarget + 10) * 100;
                targetTrajVy = Math.sin(angleToTarget + 10) * 100;
                sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)
                
                dx = coolGuy.x - bossPizza.x;
                dy = coolGuy.y - bossPizza.y;
                angleToTarget = Math.atan2(dy, dx);
                targetTrajVx = Math.cos(angleToTarget - 10) * 100;
                targetTrajVy = Math.sin(angleToTarget - 10) * 100;
                sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

                dx = coolGuy.x - bossPizza.x;
                dy = coolGuy.y - bossPizza.y;
                angleToTarget = Math.atan2(dy, dx);
                targetTrajVx = Math.cos(angleToTarget - 20) * 100;
                targetTrajVy = Math.sin(angleToTarget - 20) * 100;
                sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

                timer.after(200, function() {
                    dx = coolGuy.x - bossPizza.x;
                    dy = coolGuy.y - bossPizza.y;
                    angleToTarget = Math.atan2(dy, dx);
                    targetTrajVx = Math.cos(angleToTarget) * 100;
                    targetTrajVy = Math.sin(angleToTarget) * 100;
                    sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

                    dx = coolGuy.x - bossPizza.x;
                    dy = coolGuy.y - bossPizza.y;
                    angleToTarget = Math.atan2(dy, dx);
                    targetTrajVx = Math.cos(angleToTarget + 15) * 100;
                    targetTrajVy = Math.sin(angleToTarget + 15) * 100;
                    sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)

                    dx = coolGuy.x - bossPizza.x;
                    dy = coolGuy.y - bossPizza.y;
                    angleToTarget = Math.atan2(dy, dx);
                    targetTrajVx = Math.cos(angleToTarget - 15) * 100;
                    targetTrajVy = Math.sin(angleToTarget - 15) * 100;
                    sprites.createProjectileFromSprite(assets.image`bossOrb`, bossPizza, targetTrajVx, targetTrajVy).setKind(SpriteKind.EnemyProjectile)
                    justUsedOrbs = true
                    shootingOrbs = false
                })
            })
        }
    }
}
function endGame() {
    sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
    guyVulnerable = false
    bossPizza.setImage(assets.image`bossPizzaDead`)
    story.printDialog("Congratulations! You beat the Evil Pizza!", 80, 90, 50, 150)
    game.gameOver(true)
}
function updateEnemies() {
    if(curTilemap == 2 && enemiesLeft2) {
        if (enemyHealth2.value != 0) {
            tacoBladeProj = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj.setBounceOnWall(true)
            tacoBladeProj.setPosition(enemyTaco2.x, enemyTaco2.y)
            animation.runImageAnimation(tacoBladeProj, assets.animation`throwBladeAnim`, 200, true)
            let dx = coolGuy.x - tacoBladeProj.x;
            let dy = coolGuy.y - tacoBladeProj.y;

            let angleToTarget = Math.atan2(dy, dx);

            let targetTrajVx = Math.cos(angleToTarget) * 75;
            let targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj.setVelocity(targetTrajVx, targetTrajVy)
        }
    }
    else if(curTilemap == 4 && enemiesLeft4) {
        if(enemyHealth.value != 0) {
            tacoBladeProj = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj.setBounceOnWall(true)
            tacoBladeProj.setPosition(enemyTaco.x, enemyTaco.y)
            animation.runImageAnimation(tacoBladeProj, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj.x;
            const dy = coolGuy.y - tacoBladeProj.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj.setVelocity(targetTrajVx, targetTrajVy)
        }
        if(enemyHealth2.value != 0) {
            tacoBladeProj2 = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj2.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj2.setBounceOnWall(true)
            tacoBladeProj2.setPosition(enemyTaco2.x, enemyTaco2.y)
            animation.runImageAnimation(tacoBladeProj2, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj2.x;
            const dy = coolGuy.y - tacoBladeProj2.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj2.setVelocity(targetTrajVx, targetTrajVy)
        }
        if(enemyHealth3.value != 0) {
            tacoBladeProj3 = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj3.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj3.setBounceOnWall(true)
            tacoBladeProj3.setPosition(enemyTaco3.x, enemyTaco3.y)
            animation.runImageAnimation(tacoBladeProj3, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj3.x;
            const dy = coolGuy.y - tacoBladeProj3.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj3.setVelocity(targetTrajVx, targetTrajVy)
        }
    }
    else if (curTilemap == 6 && enemiesLeft6) {
        if (enemyHealth3.value != 0) {
            tacoBladeProj = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj.setBounceOnWall(true)
            tacoBladeProj.setPosition(enemyTaco3.x, enemyTaco3.y)
            animation.runImageAnimation(tacoBladeProj, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj.x;
            const dy = coolGuy.y - tacoBladeProj.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj.setVelocity(targetTrajVx, targetTrajVy)
        }
        if (enemyHealth4.value != 0) {
            tacoBladeProj2 = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj2.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj2.setBounceOnWall(true)
            tacoBladeProj2.setPosition(enemyTaco4.x, enemyTaco4.y)
            animation.runImageAnimation(tacoBladeProj2, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj2.x;
            const dy = coolGuy.y - tacoBladeProj2.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj2.setVelocity(targetTrajVx, targetTrajVy)
        }
    }
    else if (curTilemap == 8 && enemiesLeft8) {
        if (enemyHealth3.value != 0) {
            tacoBladeProj = sprites.create(assets.image`throwBlade1`, SpriteKind.EnemyProjectile)
            tacoBladeProj.setFlag(SpriteFlag.AutoDestroy, true)
            tacoBladeProj.setBounceOnWall(false)
            tacoBladeProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            tacoBladeProj.setPosition(enemyTaco3.x, enemyTaco3.y)
            animation.runImageAnimation(tacoBladeProj, assets.animation`throwBladeAnim`, 200, true)
            const dx = coolGuy.x - tacoBladeProj.x;
            const dy = coolGuy.y - tacoBladeProj.y;

            const angleToTarget = Math.atan2(dy, dx);

            const targetTrajVx = Math.cos(angleToTarget) * 75;
            const targetTrajVy = Math.sin(angleToTarget) * 75;
            tacoBladeProj.setVelocity(targetTrajVx, targetTrajVy)
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
        if (curTilemap == 6) {
            enemiesLeft6 = false
        }
        if (curTilemap == 8) {
            enemiesLeft8 = false
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
    else if (curTilemap == 7 && !trapping) {
        if(interval == 1000) {
            if(intervalCounter) {
                intervalCounter = false
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(0, 2))
                sawProj.setVelocity(75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(0, 7))
                sawProj.setVelocity(75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(11, 3))
                sawProj.setVelocity(-75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(11, 8))
                sawProj.setVelocity(-75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            } else {
                intervalCounter = true
                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(0, 3))
                sawProj.setVelocity(75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(0, 8))
                sawProj.setVelocity(75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(11, 2))
                sawProj.setVelocity(-75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)

                sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
                tiles.placeOnTile(sawProj, tiles.getTileLocation(11, 7))
                sawProj.setVelocity(-75, 0)
                animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
                sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
                sawProj.setFlag(SpriteFlag.AutoDestroy, true)
            }
        } else if(interval == 2000) {
            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(2, 1))
            sawProj.setVelocity(0, 50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)

            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(9, 1))
            sawProj.setVelocity(0, 50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)

            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(2, 9))
            sawProj.setVelocity(0, -50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)

            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(9, 9))
            sawProj.setVelocity(0, -50)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)
        }
        scene.onOverlapTile(SpriteKind.TrapProjectile, assets.tile`treeMiddleTile`, function (sprite, location) {
            sprite.destroy()
        })
    }
    else if (curTilemap == 8 && !trapping) {
        if(interval == 1000) {
            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(14, 4))
            sawProj.setVelocity(-100, 0)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)

            sawProj = sprites.create(assets.image`sawblade1`, SpriteKind.TrapProjectile)
            tiles.placeOnTile(sawProj, tiles.getTileLocation(14, 12))
            sawProj.setVelocity(-100, 0)
            animation.runImageAnimation(sawProj, assets.animation`sawBladeAnim`, 250, true)
            sawProj.setFlag(SpriteFlag.GhostThroughWalls, true)
            sawProj.setFlag(SpriteFlag.AutoDestroy, true)
        }
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
    if (curTilemap == 6) {
        tileMap6Transitions()
    }
    if (curTilemap == 7) {
        tileMap7Transitions()
    }
    if (curTilemap == 8) {
        tileMap8Transitions()
    }
    if (curTilemap == 9) {
        tileMap9Transitions()
    }
}
function tileMap1Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        if(curTilemap == 1) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(192, 30)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap2Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
        if (curTilemap == 2) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel5`)
            curTilemap = 5
            coolGuy.setPosition(73, 25)
            scene.setBackgroundImage(assets.image`blueBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
            info.startCountdown(30)
            // changing the 2nd leaves tile in room 2 for room 5
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
        if (curTilemap == 2) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel1`)
            curTilemap = 1
            coolGuy.setPosition(192, 225)
            scene.setBackgroundImage(assets.image`forest1`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath3`, function (sprite, location) {
        if (curTilemap == 2 && location.row == 7) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath6`, function (sprite, location) {
        if (curTilemap == 2 && location.row == 8) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tilePath9`, function (sprite, location) {
        if (curTilemap == 2 && location.row == 9) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            coolGuy.setPosition(30, 152)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap3Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass1`, function (sprite, location) {
        if (curTilemap == 3 && location.col == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(230, 135)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`greenTile`, function (sprite, location) {
        if (curTilemap == 3 && location.col == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(230, 135)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if(curTilemap == 3 && location.col == 15) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel4`)
            curTilemap = 4
            tiles.placeOnTile(coolGuy, tiles.getTileLocation(1, 3))
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
            if(boxReachedEnd) {
                woodBox = sprites.create(assets.image`woodBox`, SpriteKind.Box)
                tiles.placeOnTile(woodBox, tiles.getTileLocation(13, 2))
                tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`buttonPressed`)
            } else {
                woodBox = sprites.create(assets.image`woodBox`, SpriteKind.Box)
                boxGoal = sprites.create(assets.image`nothing`, SpriteKind.Button)
                tiles.placeOnTile(woodBox, tiles.getTileLocation(6, 13))
                tiles.placeOnTile(boxGoal, tiles.getTileLocation(13, 2))
            }
            curLocationX = woodBox.tilemapLocation().column
            curLocationY = woodBox.tilemapLocation().row
        }
    })
}
function tileMap4Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if(curTilemap == 4 && location.col == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel3`)
            curTilemap = 3
            tiles.placeOnTile(coolGuy, tiles.getTileLocation(14,3))
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
            sprites.destroyAllSpritesOfKind(SpriteKind.Box)
            sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        }
    })
}
function tileMap5Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
        if(curTilemap == 5) {
            checkEnemiesAlive()
            info.stopCountdown()
            tiles.setCurrentTilemap(tilemap`ForestLevel2`)
            curTilemap = 2
            coolGuy.setPosition(73, 230)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileDarkGrass3`, function (sprite, location) {
        if(curTilemap == 5 && location.row == 15) {
            checkEnemiesAlive()
            info.stopCountdown()
            tiles.setCurrentTilemap(tilemap`ForestLevel6`)
            curTilemap = 6
            coolGuy.setPosition(184, 30)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap6Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`blueToGreenGrass`, function (sprite, location) {
        if(curTilemap == 6 && location.row == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel5`)
            curTilemap = 5
            coolGuy.setPosition(184, 230)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if (curTilemap == 6 && location.col == 15) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel7`)
            curTilemap = 7
            coolGuy.setPosition(30, 88)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap7Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if (curTilemap == 7 && location.col == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel6`)
            curTilemap = 6
            coolGuy.setPosition(230, 136)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`greenTile`, function (sprite, location) {
        if (curTilemap == 7 && location.col == 11) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel8`)
            curTilemap = 8
            coolGuy.setPosition(30, 140)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap8Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if (curTilemap == 8 && location.col == 0) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel7`)
            curTilemap = 7
            coolGuy.setPosition(162, 88)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`greenTile`, function (sprite, location) {
        if (curTilemap == 8 && location.row == 0) {
            checkEnemiesAlive()
            if(boxReachedEnd) {
                tiles.setCurrentTilemap(tilemap`ForestLevel9Unlocked`)
            } else {
                tiles.setCurrentTilemap(tilemap`ForestLevel9Locked`)
            }
            curTilemap = 9
            coolGuy.setPosition(88, 146)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
            sprites.destroyAllSpritesOfKind(SpriteKind.TrapProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
function tileMap9Transitions() {
    scene.onOverlapTile(SpriteKind.Player, assets.tile`tileGrass2`, function (sprite, location) {
        if (curTilemap == 9 && location.row == 10) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevel8`)
            curTilemap = 8
            coolGuy.setPosition(136, 30)
            scene.setBackgroundImage(assets.image`greenBackground`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`BossGateLeft`, function (sprite, location) {
        if (curTilemap == 9 && boxReachedEnd) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevelBoss`)
            curTilemap = 10
            coolGuy.setPosition(88, 146)
            scene.setBackgroundImage(assets.image`forest1`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`BossGateUnlocked`, function (sprite, location) {
        if (curTilemap == 9 && boxReachedEnd) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevelBoss`)
            curTilemap = 10
            coolGuy.setPosition(88, 146)
            scene.setBackgroundImage(assets.image`forest1`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
    scene.onOverlapTile(SpriteKind.Player, assets.tile`BossGateRight`, function (sprite, location) {
        if (curTilemap == 9 && boxReachedEnd) {
            checkEnemiesAlive()
            tiles.setCurrentTilemap(tilemap`ForestLevelBoss`)
            curTilemap = 10
            coolGuy.setPosition(88, 146)
            scene.setBackgroundImage(assets.image`forest1`)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.EnemyProjectile)
            enemiesSlain = 0
            makeEnemy()
        }
    })
}
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (enemyVulnerable) {
        if(otherSprite == enemyTaco || otherSprite == enemyBurger) {
            enemyHealth.value += -1
        } else if (otherSprite == enemyTaco2 || otherSprite == enemyBurger2) {
            enemyHealth2.value += -1
        } else if (otherSprite == enemyTaco3 || otherSprite == enemyBurger3) {
            enemyHealth3.value += -1
        } else if (otherSprite == enemyTaco4 || otherSprite == enemyBurger4) {
            enemyHealth4.value += -1
        }
        if(otherSprite == bossPizza) {
            bossHealth.value += -1
        }
        enemyVulnerable = false
        timer.after(400, function () {
            enemyVulnerable = true
        })
    }
    if (enemyHealth.value == 0 && (otherSprite == enemyTaco || otherSprite == enemyBurger)) {
        otherSprite.destroy()
    } else
    if(curTilemap == 2) {
        if (enemyHealth2.value == 0 && otherSprite == enemyTaco2) {
            otherSprite.destroy()
        }
    } else if(curTilemap == 4) {
        if (enemyHealth2.value == 0 && otherSprite == enemyTaco2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        }
    } else if (curTilemap == 6) {
        if (enemyHealth2.value == 0 && otherSprite == enemyBurger2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        } else if (enemyHealth4.value == 0 && otherSprite == enemyTaco4) {
            otherSprite.destroy()
        }
    } else if (curTilemap == 8) {
        if (enemyHealth2.value == 0 && otherSprite == enemyBurger2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        }
    } else if (curTilemap == 10) {
        if (bossHealth.value == 0) {
            endGame()
        }
    }
})
sprites.onOverlap(SpriteKind.TrapProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (enemyVulnerable) {
        if(otherSprite == enemyTaco || otherSprite == enemyBurger) {
            enemyHealth.value += -1
        } else if (otherSprite == enemyTaco2 || otherSprite == enemyBurger2) {
            enemyHealth2.value += -1
        } else if (otherSprite == enemyTaco3 || otherSprite == enemyBurger3) {
            enemyHealth3.value += -1
        } else if (otherSprite == enemyTaco4 || otherSprite == enemyBurger4) {
            enemyHealth4.value += -1
        }
        enemyVulnerable = false
        timer.after(500, function () {
            enemyVulnerable = true
        })
    }
    if (enemyHealth.value == 0 && (otherSprite == enemyTaco || otherSprite == enemyBurger)) {
        otherSprite.destroy()
    } else
    if(curTilemap == 2) {
        if (enemyHealth2.value == 0 && otherSprite == enemyTaco2) {
            otherSprite.destroy()
        }
    } else if(curTilemap == 4) {
        if (enemyHealth2.value == 0 && otherSprite == enemyTaco2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        }
    } else if (curTilemap == 6) {
        if (enemyHealth2.value == 0 && otherSprite == enemyBurger2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        } else if (enemyHealth4.value == 0 && otherSprite == enemyTaco4) {
            otherSprite.destroy()
        }
    } else if (curTilemap == 8) {
        if (enemyHealth2.value == 0 && otherSprite == enemyBurger2) {
            otherSprite.destroy()
        } else if (enemyHealth3.value == 0 && otherSprite == enemyTaco3) {
            otherSprite.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.Box, function (sprite, box) {
    if(!boxReachedEnd && !boxMoving) {
        boxMoving = true
        box.z = 1
        if (isSwingRight) {
            tiles.placeOnTile(box, tiles.getTileLocation(curLocationX + 1, curLocationY))
        } else if (isSwingLeft) {
            tiles.placeOnTile(box, tiles.getTileLocation(curLocationX - 1, curLocationY))
        } else if (isSwingUp) {
            tiles.placeOnTile(box, tiles.getTileLocation(curLocationX, curLocationY - 1))
        } else if (isSwingDown) {
            tiles.placeOnTile(box, tiles.getTileLocation(curLocationX, curLocationY + 1))
        }
        curLocationX = box.tilemapLocation().column
        curLocationY = box.tilemapLocation().row
        timer.after(250, function() {
            boxMoving = false
        })
    }
    if(woodBox.tilemapLocation().column == boxGoal.tilemapLocation().column && woodBox.tilemapLocation().row == boxGoal.tilemapLocation().row) {
        tiles.setTileAt(tiles.getTileLocation(13, 2), assets.tile`buttonPressed`)
        boxReachedEnd = true
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.EnemyProjectile, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    otherSprite.destroy()
    hasKey = true
    keySprite = sprites.create(assets.image`silverKey`, SpriteKind.Misc)
    keySprite.setFlag(SpriteFlag.RelativeToCamera, true)
})
sprites.onOverlap(SpriteKind.Weapon, SpriteKind.TrapProjectile, function (sprite, otherSprite) {
    if(isSwingRight) {
        otherSprite.setVelocity(75, 0)
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
        music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
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
let tacoBladeProj: Sprite
let tacoBladeProj2: Sprite
let tacoBladeProj3: Sprite
let woodBox: Sprite
let boxGoal: Sprite
let guyWalk: animation.Animation
let swordGuyWalk: animation.Animation
let enemyBurger: Sprite
let enemyBurger2: Sprite
let enemyBurger3: Sprite
let enemyBurger4: Sprite
let enemyTaco: Sprite
let enemyTaco2: Sprite
let enemyTaco3: Sprite
let enemyTaco4: Sprite
let enemyHealth: StatusBarSprite
let enemyHealth2: StatusBarSprite
let enemyHealth3: StatusBarSprite
let enemyHealth4: StatusBarSprite
let bossPizza: Sprite
let bossHealth: StatusBarSprite
let halfHealth = false
let dashing = false
let bossIsStunned = false
let justUsedOrbs = false
let shootingOrbs = false
let bossVx: number
let bossVy: number
let tacoTarget: Sprite
let keySprite: Sprite
let guyVulnerable = true
let enemyVulnerable = true
let moving = false
let swinging = false
let isSwingUp = false
let isSwingDown = false
let isSwingLeft = false
let isSwingRight = false
let trapping = false
let boxReachedEnd = false
let enemiesLeft1 = true
let enemiesLeft2 = true
let enemiesLeft3 = true
let enemiesLeft4 = true
let enemiesLeft5 = true
let enemiesLeft6 = true
let enemiesLeft8 = true
let notFollowing1 = true
let notFollowing5 = true
let notFollowing6 = true
let boxMoving = false
let tacoAlive = false
let hasKey = false
let curTilemap = 1
let enemiesSlain = 0
let numEnemies: Number
let intervalCounter = false

let curLocationX = 0 
let curLocationY = 0


makeSprites()
makeEnemy()
makeGuyAnimations()
coolGuy.setPosition(20, 92)
controller.moveSprite(coolGuy, 65, 65)
scene.setBackgroundImage(assets.image`forest1`)
scene.cameraFollowSprite(coolGuy)
info.setLife(10)
tiles.setCurrentTilemap(tilemap`ForestLevel1`)
game.onUpdate(function () {
    rightSword.setPosition(coolGuy.x + 10, coolGuy.y)
    upSword.setPosition(coolGuy.x, coolGuy.y - 12)
    downSword.setPosition(coolGuy.x, coolGuy.y + 12)
    leftSword.setPosition(coolGuy.x - 10, coolGuy.y)
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, coolGuy)
    }
    if(coolGuy.x >= 100 && curTilemap == 1 && notFollowing1) {
        enemyBurger.follow(coolGuy, 25)
        notFollowing1 = false
    } else if(coolGuy.y >= 100 && curTilemap == 5 && notFollowing5) {
        enemyBurger.follow(coolGuy, 25)
        notFollowing5 = false
    } else if(coolGuy.y >= 100 && curTilemap == 6 && notFollowing6) {
        enemyBurger.follow(coolGuy, 25)
        enemyBurger2.follow(coolGuy, 25)
        notFollowing6 = false
    }
    if(curTilemap == 10 && bossHealth.value < bossHealth.max / 2 && !halfHealth) {
        halfHealth = true
    }
    
})
game.onUpdateInterval(250, function() {
    if (curTilemap == 10) {
        updateBoss()
    }
})
game.onUpdateInterval(2000, function () {
    if(curTilemap == 5 || curTilemap == 7 || curTilemap == 8) {
        makeTraps(2000)
    }
    if(curTilemap == 2 || curTilemap == 4 || curTilemap == 6 || curTilemap == 8) {
        updateEnemies()
    }
})
game.onUpdateInterval(1000, function () {
    if (curTilemap != 10) {
        tilemapTransitions()
    }
    if (curTilemap == 5 || curTilemap == 7 || curTilemap == 8) {
        makeTraps(1000)
    }
})