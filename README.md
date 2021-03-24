# PhaserBees
Simple customizable bee swarms.  
Demo: https://machineman1357.github.io  
  
- Clearly marked areas in code that are extra so that you can strip the project down to the bare bees.

Bee class options:  
{  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;centerX: 0, // center x position of bees  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;centerY: 0, // center y position of bees  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minXRange: -200,  // The minimum x distance from centerX the bee will acquire a new target point  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxXRange: 200,   // Max x  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minYRange: -200,  // Min y  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxYRange: 200,   // Max y  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minScale: 0.03,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxScale: 0.07,  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;targetLinearPercentage: 0.005,  // The rate at which the bee moves towards its target position  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;targetAngleLerp: 0.05,          // the rate at which the bee rotates towards its target position  
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scene: game.scene.scenes[0] // The scene to add the bee images and container to  
}  
  
[Imgur](https://imgur.com/9AdbZ5L)
