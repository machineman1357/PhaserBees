# PhaserBees
Simple customizable bee swarms.

- Clearly marked areas in code that are extra so that you can strip the project down to the bare bees.

Bee class options:
{
  centerX: 0, // center x position of bees
  centerY: 0, // center y position of bees

  minXRange: -200,  // The minimum x distance from centerX the bee will acquire a new target point
  maxXRange: 200,   // Max x
  minYRange: -200,  // Min y
  maxYRange: 200,   // Max y

  minScale: 0.03,
  maxScale: 0.07,

  targetLinearPercentage: 0.005,  // The rate at which the bee moves towards its target position
  targetAngleLerp: 0.05,          // the rate at which the bee rotates towards its target position

  scene: game.scene.scenes[0] // The scene to add the bee images and container to
}
