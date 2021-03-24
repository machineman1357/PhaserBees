import { BeeScene } from "./scene.js";

const config = {
	"type": Phaser.WEBGL,
	"disableContextMenu": true,
	"pixelArt": true,
	"scale": {
		"mode": Phaser.Scale.RESIZE,
		"parent": "game"
	},
	"scene": [
		BeeScene
	],
	"backgroundColor": 0xf5f5f5
};

export const game = new Phaser.Game(config);

// [START] ************ Extra ****************
function onResize () {
	game.scene.scenes[0].onResize();
}

function onWheel (event) {
	let scene = game.scene.scenes[0]
	
	if(game.scene.scenes[0]) {
		let mainCam = scene.cameras.main;
		let newZoom = mainCam.zoom;
		if(event.deltaY > 0) {
			newZoom -= 0.2;
		} else if(event.deltaY < 0) {
			newZoom += 0.2;
		}
	
		scene.targetZoom = Math.max(0.1, newZoom);
	} else {
		console.log("Can't zoom because no scene");
	}
};

window.addEventListener("resize", onResize);
window.addEventListener('wheel', onWheel);
// [END] ************ Extra ****************
