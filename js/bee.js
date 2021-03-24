import { game } from "./main.js";

export class Bee {
    constructor (_options) {
        _options = _options || {};

        this.centerX = _options.centerX || 0;
        this.centerY = _options.centerY || 0;

        this.minXRange = _options.minXRange || -200;
        this.maxXRange = _options.maxXRange || 200;
        this.minYRange = _options.minYRange || -200;
        this.maxYRange = _options.maxYRange || 200;

        this.minScale = _options.minScale || 0.03;
        this.maxScale = _options.maxScale || 0.07;

        this.targetLinearPercentage = 0.005;
        this.targetAngleLerp = 0.05;

        let scene = _options.scene || game.scene.scenes[0];

        this.body = scene.add.image(0, 0, 'bee', "body.png");
        this.wingL = scene.add.image(-80, 0, 'bee', "wing.png");
        this.wingR = scene.add.image(80, 0, 'bee', "wing.png");
        this.shadow = scene.add.image(0, 0, 'shadow').setAlpha(0.25).setDepth(11);

        this.beesScale = Phaser.Math.FloatBetween(this.minScale, this.maxScale);

        var _x = Phaser.Math.FloatBetween(this.minXRange, this.maxXRange);
        var _y = Phaser.Math.FloatBetween(this.minYRange, this.maxYRange);
        this.container = scene.add.container(_x + this.centerX, _y + this.centerY).add([this.body, this.wingL, this.wingR]);
        this.container.setDepth(11).setRotation(Math.PI * 2 * Math.random());
        this.container.setSize(100, 100);

        this.targetX = Phaser.Math.FloatBetween(this.minXRange, this.maxXRange) + this.centerX;
        this.targetY = Phaser.Math.FloatBetween(this.minYRange, this.maxYRange) + this.centerY;

        this.currentTimeBefore_newTarget = 0;
        this.minTimeBefore_newTarget = 500;
        this.maxTimeBefore_newTarget = 1000;

        this.randomExtraTime = Phaser.Math.Between(0, 1000);

        this.currentTimeBefore_wingsFlicker = 0;
        this.minTimeBefore_wingsFlicker = 25;
        this.maxTimeBefore_wingsFlicker = 50;
    }

    newTarget () {
        this.targetX = Phaser.Math.FloatBetween(this.minXRange, this.maxXRange) + this.centerX;
        this.targetY = Phaser.Math.FloatBetween(this.minYRange, this.maxYRange) + this.centerY;
    }

    update (_time, _delta) {
        var _xInterp = Phaser.Math.Interpolation.Linear([this.container.x, this.targetX], this.targetLinearPercentage);
        var _yInterp = Phaser.Math.Interpolation.Linear([this.container.y, this.targetY], this.targetLinearPercentage);
        this.container.x = _xInterp;
        this.container.y = _yInterp;

        this.container.scale = Math.abs(Math.sin((_time + this.randomExtraTime) / 1000)) * (this.beesScale / 2) + this.beesScale;

        var _targetAngle = Phaser.Math.Angle.Between(this.container.x, this.container.y, this.targetX, this.targetY);
        var _targetAngleLerped = Phaser.Math.Angle.RotateTo(this.container.rotation, _targetAngle - (Math.PI / 2), this.targetAngleLerp);
        this.container.rotation = _targetAngleLerped;

        this.currentTimeBefore_newTarget -= _delta;
        if(this.currentTimeBefore_newTarget <= 0) {
            this.currentTimeBefore_newTarget = Phaser.Math.Between(this.minTimeBefore_newTarget, this.maxTimeBefore_newTarget);
            this.newTarget();
        }

        // wings flicker
        this.currentTimeBefore_wingsFlicker -= _delta;
        if(this.currentTimeBefore_wingsFlicker <= 0) {
            this.currentTimeBefore_wingsFlicker = Phaser.Math.Between(this.minTimeBefore_wingsFlicker, this.maxTimeBefore_wingsFlicker);

            this.wingL.visible = !this.wingL.visible;
            this.wingR.visible = !this.wingR.visible;
        }

        // shadow
        this.shadow.setPosition(this.container.x - 5 - (this.container.scale * 10), this.container.y + 5 + (this.container.scale * 10));
        this.shadow.scale = (this.beesScale / this.container.scale) / 2;
    }
}