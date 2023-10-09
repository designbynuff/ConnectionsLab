let canvas;

function setup() {
  // Make a fullscreen bg canvas
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

function draw() {
  // Draw a random color background
  let r = random(255);
  let g = random(255);
  let b = random(255);

  background(r, g, b)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}