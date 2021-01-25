import React, { useRef, useEffect, useCallback} from 'react';

const types = {
    tank: "tank",
    map: "map",
    ammunition: "ammunition",
    explosion: "explosion",
    enemy: "enemy",
    enemy_explosion: "enemy_explosion",
    enemy_ammunition: "enemy_ammunition",
};

let battlefield = {
    player: "ammunition-1.png",
    enemy: "ammunition-2.png",
    explosion: "explosion.png",
    enemyTank: "widower.png",
    enemyExplosion: "tank-explosion.png",
};

function Canvas(props) {
    const {destroyed, damage, gameResult, ...restProps} = props;

    /* coordinates of pictures */
    let xCoordinate;
    let yCoordinate;
    /* tank dimensions */
    let tankHeight = props.game.height;
    let tankWidth = props.game.width;
    /* tank movement speed */
    let speed = 8;
    /* tank gun direction */
    let gunDirection = props.game.pos;
    /* tank shot */
    let shot = false;
    let xBulletCoordinate;
    let yBulletCoordinate;
    let bulletHeight = 10;
    let bulletWidth = 50;
    let gunBulletDirection = "";
    let disadvantage = 2;
    let bulletSpeed = 5;
    let bulletBox = [];
    /* explosion */
    let explosion = false;
    let xExplosionCoordinate;
    let yExplosionCoordinate;
    let explosionHeight = 50;
    let explosionWidth = 50;
    /* enemy */
    let engine = false;
    let enemyGunDirection = props.game.ePos || ["p-0-", "p-1-", "p-2-", "p-3-"][Math.round(Math.random()*3)];
    let xEnemyCoordinate;
    let yEnemyCoordinate;
    let enemyHeight = props.game.eHeight || 70;
    let enemyWidth = props.game.eWidth || 130;
    /* hit */
    let hit = false;
    let xEnemyExplosionCoordinate;
    let yEnemyExplosionCoordinate;
    let enemyExplosionHeight = 110;
    let enemyExplosionWidth = 110;
    /* enemy shot */
    let shotEnemy = false;
    let xEnemyBulletCoordinate;
    let yEnemyBulletCoordinate;
    let enemyGunBulletDirection = "";
    let enemyBulletHeight = 10;
    let enemyBulletWidth = 50;
    let enemyBulletBox = [];

    /* create the main canvas */
    const canvasRef = useRef(null);

    /* Part for drawing our objects on canvas */
    const draw = (ctx, data) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        xCoordinate = xCoordinate ? xCoordinate : props.game.x;
        yCoordinate = yCoordinate ? yCoordinate : props.game.y;
        /* enemy*/
        xEnemyCoordinate = xEnemyCoordinate ? xEnemyCoordinate
            : Math.floor(Math.random() * ((ctx.canvas.width - enemyWidth) - enemyWidth) + enemyWidth);
        yEnemyCoordinate = yEnemyCoordinate ? yEnemyCoordinate
            : Math.floor(Math.random() * ((ctx.canvas.height - enemyHeight) - enemyHeight) + enemyHeight);

        /* main map */
        createImage(ctx, types.map, data.map, 0, 0);

        /* player tank */
        createImage(ctx, types.tank, data.tank, xCoordinate, yCoordinate);

        /* bullet player */
        if(shot){
            createImage(ctx, types.ammunition, data.player, xBulletCoordinate, yBulletCoordinate);
        }

        /* giving bullet movement */
        if(bulletBox.length === 1){
            moveBullet(ctx.canvas.width, ctx.canvas.height);
        }

        /* fire on shot */
        if(explosion){
            createImage(ctx, types.explosion, data.explosion, xExplosionCoordinate, yExplosionCoordinate);
        }

        /* enemy tank */
        if(props.game.life > 0 && props.game.enemy > 0){
            if(!hit){
                moveEnemy(ctx.canvas.height, ctx.canvas.width);
                checkHit();
                createImage(ctx, types.enemy, data.enemyTank, xEnemyCoordinate, yEnemyCoordinate);
                if(enemyBulletBox.length === 0) {
                    automaticShot();
                    shotEnemy = true;
                }
            }
            if(enemyBulletBox.length === 1){
                moveEnemyBullet(ctx.canvas.width, ctx.canvas.height);
                checkPlayerHit();
            }
        }

        /* enemy explosion */
        if(hit){
            xEnemyExplosionCoordinate = xEnemyCoordinate;
            yEnemyExplosionCoordinate = yEnemyCoordinate;
            createImage(ctx, types.enemy_explosion, data.enemyExplosion, xEnemyExplosionCoordinate, yEnemyExplosionCoordinate);
        }

        /* bullet enemy */
        if(shotEnemy){
            createImage(ctx, types.enemy_ammunition, data.enemy, xEnemyBulletCoordinate, yEnemyBulletCoordinate);
        }
    }

    /* part for adding images */
    const createImage = (ctx, type = "", path = "", x, y) => {
        let sizeHeight;
        let sizeWidth;
        const image = new Image();
        if(type === types.tank){
            image.src = `./images/tanks/${gunDirection}${path}`;
            sizeHeight = tankHeight;
            sizeWidth = tankWidth;
        }else if(type === types.map){
            image.src = `./images/maps/${path}`;
            sizeHeight = ctx.canvas.height;
            sizeWidth = ctx.canvas.width;
        }else if(type === types.ammunition){
            image.src = `./images/ammunition/${gunDirection}${path}`;
            sizeHeight = bulletHeight;
            sizeWidth = bulletWidth;
        }else if(type === types.explosion){
            image.src = `./images/ammunition/${path}`;
            sizeHeight = explosionHeight;
            sizeWidth = explosionWidth;
        }else if(type === types.enemy){
            image.src = `./images/tanks/${enemyGunDirection}${path}`;
            sizeHeight = enemyHeight;
            sizeWidth = enemyWidth;
        }else if(type === types.enemy_explosion){
            image.src = `./images/ammunition/${path}`;
            sizeHeight = enemyExplosionHeight;
            sizeWidth = enemyExplosionWidth;
        }else if(type === types.enemy_ammunition){
            image.src = `./images/ammunition/${enemyGunDirection}${path}`;
            sizeHeight = enemyBulletHeight;
            sizeWidth = enemyBulletWidth;
        }

        image.onload = (function (ctx, img) {
            ctx.drawImage(img, x, y, sizeWidth, sizeHeight);
        })(ctx, image);
    }

    const escFunction = useCallback((event) => {
        event.preventDefault();

        if(event.keyCode === 32) {
            /* space */
            /* defining bullet parameters */
            if(bulletBox.length === 0){
                shot = true;
                explosion = true;
                gunBulletDirection = gunDirection;
                if(gunDirection === "p-0-"){
                    if(bulletWidth < bulletHeight){
                        [bulletHeight, bulletWidth] = [bulletWidth, bulletHeight];
                    }
                    xBulletCoordinate = xCoordinate + tankWidth;
                    yBulletCoordinate = yCoordinate + (tankHeight-bulletHeight)/2;
                    xExplosionCoordinate = xCoordinate + tankWidth;
                    yExplosionCoordinate = yCoordinate +(tankHeight-explosionHeight)/2;
                }else if(gunDirection === "p-1-"){
                    if(bulletWidth > bulletHeight){
                        [bulletHeight, bulletWidth] = [bulletWidth, bulletHeight];
                    }
                    xBulletCoordinate = xCoordinate + (tankWidth-bulletWidth+disadvantage)/2;
                    yBulletCoordinate = yCoordinate + tankHeight;
                    xExplosionCoordinate = xCoordinate;
                    yExplosionCoordinate = yCoordinate + tankHeight;
                }else if(gunDirection === "p-2-"){
                    if(bulletWidth < bulletHeight){
                        [bulletHeight, bulletWidth] = [bulletWidth, bulletHeight];
                    }
                    xBulletCoordinate = xCoordinate - bulletWidth;
                    yBulletCoordinate = yCoordinate + (tankHeight-bulletHeight)/2;
                    xExplosionCoordinate = xCoordinate - explosionWidth;
                    yExplosionCoordinate = yCoordinate;
                }else if(gunDirection === "p-3-"){
                    if(bulletWidth > bulletHeight){
                        [bulletHeight, bulletWidth] = [bulletWidth, bulletHeight];
                    }
                    xBulletCoordinate = xCoordinate + (tankWidth-bulletWidth-disadvantage)/2;
                    yBulletCoordinate = yCoordinate - bulletHeight;
                    xExplosionCoordinate = xCoordinate;
                    yExplosionCoordinate = yCoordinate - explosionHeight;
                }
                bulletBox.push({
                    x: xBulletCoordinate,
                    y: yBulletCoordinate,
                    height: bulletHeight,
                    width: bulletWidth,
                });

                shotSound();
                setTimeout(function () {
                    explosion = false;
                },300);
            }
        }else if(event.keyCode === 37){
            /* left */
            if(xCoordinate >= 4){
                xCoordinate -= speed;
            }
            if(gunDirection !== "p-2-"){
                gunDirection = "p-2-";
                if(tankHeight > tankWidth){
                    [tankHeight, tankWidth] = [tankWidth, tankHeight];
                }
            }
            if(!engine){
                engineSound();
            }
        }else if(event.keyCode === 38){
            /* up */
            if(yCoordinate >= 4){
                yCoordinate -= speed;
            }
            if(gunDirection !== "p-3-"){
                gunDirection = "p-3-";
                if(tankHeight < tankWidth){
                    [tankHeight, tankWidth] = [tankWidth, tankHeight];
                }
            }
            if(!engine){
                engineSound();
            }
        }else if(event.keyCode === 39){
            /* right */
            if(xCoordinate <= props.height - tankWidth + tankHeight){
                xCoordinate += speed;
            }
            if(gunDirection !== "p-0-"){
                gunDirection = "p-0-";
                if(tankHeight > tankWidth){
                    [tankHeight, tankWidth] = [tankWidth, tankHeight];
                }
            }
            if(!engine){
                engineSound();
            }
        }else if(event.keyCode === 40){
            /* down */
            if(yCoordinate <= props.height - tankHeight){
                yCoordinate += speed;
            }
            if(gunDirection !== "p-1-"){
                gunDirection = "p-1-";
                if(tankHeight < tankWidth){
                    [tankHeight, tankWidth] = [tankWidth, tankHeight];
                }
            }
            if(!engine){
                engineSound();
            }
        }
    }, [draw]);

    const moveBullet = (width, height) => {
        if(gunBulletDirection === "p-0-"){
            bulletBox[0].x += bulletSpeed;
            xBulletCoordinate = bulletBox[0].x;
            if(xBulletCoordinate > width){
                bulletBox.pop();
                shot = false;
            }
        }else if(gunBulletDirection === "p-1-"){
            bulletBox[0].y += bulletSpeed;
            yBulletCoordinate = bulletBox[0].y;
            if(yBulletCoordinate > height){
                bulletBox.pop();
                shot = false;
            }
        }else if(gunBulletDirection === "p-2-"){
            bulletBox[0].x -= bulletSpeed;
            xBulletCoordinate = bulletBox[0].x;
            if(xBulletCoordinate <= -bulletWidth){
                bulletBox.pop();
                shot = false;
            }
        }else if(gunBulletDirection === "p-3-"){
            bulletBox[0].y -= bulletSpeed;
            yBulletCoordinate = bulletBox[0].y;
            if(yBulletCoordinate < -bulletHeight){
                bulletBox.pop();
                shot = false;
            }
        }
    }

    const moveEnemy = (height, width) => {
        if(enemyGunDirection === "p-0-"){
            if(xEnemyCoordinate < width - enemyWidth){
                xEnemyCoordinate += 1;
            } else {
                const turn = Math.round(Math.random()*2);
                enemyGunDirection = ["p-1-", "p-2-", "p-3-"][turn];
            }
            if(enemyHeight > enemyWidth){
                [enemyWidth, enemyHeight] = [enemyHeight, enemyWidth];
            }
        }else if(enemyGunDirection === "p-1-"){
            if(yEnemyCoordinate < height - enemyHeight){
                yEnemyCoordinate += 1;
            } else {
                const turn = Math.round(Math.random()*2);
                enemyGunDirection = ["p-0-", "p-2-", "p-3-"][turn];
            }
            if(enemyHeight < enemyWidth){
                [enemyWidth, enemyHeight] = [enemyHeight, enemyWidth];
            }
        }else if(enemyGunDirection === "p-2-"){
            if(xEnemyCoordinate > enemyWidth){
                xEnemyCoordinate -= 1;
            } else {
                const turn = Math.round(Math.random()*2);
                enemyGunDirection = ["p-0-", "p-1-", "p-3-"][turn];
            }
            if(enemyHeight > enemyWidth){
                [enemyWidth, enemyHeight] = [enemyHeight, enemyWidth];
            }
        }else if(enemyGunDirection === "p-3-"){
            if(yEnemyCoordinate > enemyHeight){
                yEnemyCoordinate -= 1;
            } else {
                const turn = Math.round(Math.random()*2);
                enemyGunDirection = ["p-0-", "p-1-", "p-2-"][turn];
            }
            if(enemyHeight < enemyWidth){
                [enemyWidth, enemyHeight] = [enemyHeight, enemyWidth];
            }
        }
    };

    const moveEnemyBullet = (width, height) => {
        if(enemyGunBulletDirection === "p-0-"){
            enemyBulletBox[0].x += bulletSpeed;
            xEnemyBulletCoordinate = enemyBulletBox[0].x;
            if(xEnemyBulletCoordinate > width){
                enemyBulletBox.pop();
                shotEnemy = false;
            }
        }else if(enemyGunBulletDirection === "p-1-"){
            enemyBulletBox[0].y += bulletSpeed;
            yEnemyBulletCoordinate = enemyBulletBox[0].y;
            if(yEnemyBulletCoordinate > height){
                enemyBulletBox.pop();
                shotEnemy = false;
            }
        }else if(enemyGunBulletDirection === "p-2-"){
            enemyBulletBox[0].x -= bulletSpeed;
            xEnemyBulletCoordinate = enemyBulletBox[0].x;
            if(xEnemyBulletCoordinate <= -enemyBulletWidth){
                enemyBulletBox.pop();
                shotEnemy = false;
            }
        }else if(enemyGunBulletDirection === "p-3-"){
            enemyBulletBox[0].y -= bulletSpeed;
            yEnemyBulletCoordinate = enemyBulletBox[0].y;
            if(yEnemyBulletCoordinate < -enemyBulletHeight){
                enemyBulletBox.pop();
                shotEnemy = false;
            }
        }
    }

    const checkHit = () => {
        if((xBulletCoordinate > xEnemyCoordinate && xBulletCoordinate < (xEnemyCoordinate + enemyWidth))
            && (yBulletCoordinate > yEnemyCoordinate && yBulletCoordinate < (yEnemyCoordinate + enemyHeight))){
            hit = true;
            shot = false;
            bulletBox.pop();
            soundTankExplosion();
            if(props.game.enemy === 1){
                gameResult("player");
                return true;
            }
            setTimeout(function () {
                destroyed(xCoordinate, yCoordinate, gunDirection, tankHeight, tankWidth,
                    undefined, undefined, undefined, undefined, undefined);
            }, 2000);
            return true;
        }
    }

    const checkPlayerHit = () => {
        if((xEnemyBulletCoordinate > xCoordinate && xEnemyBulletCoordinate < (xCoordinate + tankWidth))
            && (yEnemyBulletCoordinate > yCoordinate && yEnemyBulletCoordinate < (yCoordinate + tankHeight))){
            shotEnemy = false;
            enemyBulletBox.pop();
            soundTankExplosion();
            if(props.game.life === 25){
                gameResult("enemy");
                return true;
            }

            damage(xCoordinate, yCoordinate, gunDirection, tankHeight, tankWidth,
                xEnemyCoordinate, yEnemyCoordinate, enemyGunDirection, enemyHeight, enemyWidth);
            return true;
        }
    }

    const automaticShot = () => {
        shotEnemy = true;
        enemyGunBulletDirection = enemyGunDirection;
        if(enemyGunBulletDirection === "p-0-"){
            if(enemyBulletWidth < enemyBulletHeight){
                [enemyBulletHeight, enemyBulletWidth] = [enemyBulletWidth, enemyBulletHeight];
            }
            xEnemyBulletCoordinate = xEnemyCoordinate + enemyWidth;
            yEnemyBulletCoordinate = yEnemyCoordinate + (enemyHeight-enemyBulletHeight)/2;
        }else if(enemyGunBulletDirection === "p-1-"){
            if(enemyBulletWidth > enemyBulletHeight){
                [enemyBulletHeight, enemyBulletWidth] = [enemyBulletWidth, enemyBulletHeight];
            }
            xEnemyBulletCoordinate = xEnemyCoordinate + (enemyWidth-enemyBulletWidth+disadvantage)/2;
            yEnemyBulletCoordinate = yEnemyCoordinate + enemyHeight;
        }else if(enemyGunBulletDirection === "p-2-"){
            if(enemyBulletWidth < enemyBulletHeight){
                [enemyBulletHeight, enemyBulletWidth] = [enemyBulletWidth, enemyBulletHeight];
            }
            xEnemyBulletCoordinate = xEnemyCoordinate - enemyBulletWidth;
            yEnemyBulletCoordinate = yEnemyCoordinate + (enemyHeight-enemyBulletHeight)/2;
        }else if(enemyGunBulletDirection === "p-3-"){
            if(enemyBulletWidth > enemyBulletHeight){
                [enemyBulletHeight, enemyBulletWidth] = [enemyBulletWidth, enemyBulletHeight];
            }
            xEnemyBulletCoordinate = xEnemyCoordinate + (enemyWidth-enemyBulletWidth-disadvantage)/2;
            yEnemyBulletCoordinate = yEnemyCoordinate - enemyBulletHeight;
        }
        enemyBulletBox.push({
            x: xEnemyBulletCoordinate,
            y: yEnemyBulletCoordinate,
            height: enemyBulletHeight,
            width: enemyBulletWidth,
        });
    }

    const shotSound = () => {
        return new Audio('./audio/shot-2.mp3').play();
    }

    const soundTankExplosion = () => {
        return new Audio('./audio/shot-7.mp3').play();
    }

    const engineSound = () => {
        setTimeout(function () {
            engine = false;
        }, 102500); // sound duration  102 seconds

        engine = true;
        return new Audio('./audio/engine-sound-2.mp3').play();
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;

        battlefield = {
            ...battlefield,
            main: props.data,
            map: props.map,
            tank: props.tank,
        };
        // Our draw starts from here
        const render = () => {
            draw(context, battlefield);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();
        document.addEventListener("keydown", escFunction, false);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            document.removeEventListener("keydown", escFunction, false);
        }
    }, [draw]);

    return <canvas ref={canvasRef} {...restProps}/>
}

export default Canvas;