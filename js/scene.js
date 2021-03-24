import { game } from "./main.js";
import { Bee } from "./bee.js";

export class BeeScene extends Phaser.Scene {
    preload () {
        this.load.atlas("bee", "./assets/bee/bee.png", "./assets/bee/bee.json");
        this.load.image("shadow", "./assets/smallShadow.png");
    }

    create () {
        this.bees = [];
        this.targetZoom = 1;

        for (let i = 0; i < 100; i++) {
            const bee = new Bee({
                centerX: game.renderer.width / 2,
                centerY: game.renderer.height / 2
                //minXYRange: -500,
                //maxXYRange: 500
            });
            this.bees.push(bee);
        }
    }

    update (time, delta) {
        for(const bee of this.bees) {
            bee.update(time, delta);
        }

        // [START] ************ Extra ****************
        // set camera zoom
        var zoomInterpolated = Phaser.Math.Interpolation.Linear([this.cameras.main.zoom, this.targetZoom], 0.1)
        this.cameras.main.setZoom(zoomInterpolated);
        // [END] ************ Extra ****************
    }

    // [START] ************ Extra ****************
    onResize () {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            bee.centerX = game.renderer.width / 2;
            bee.centerY = game.renderer.height / 2;
        }
    }
    // [END] ************ Extra ****************
}