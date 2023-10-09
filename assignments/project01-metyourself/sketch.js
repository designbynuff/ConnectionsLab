let canvas;

function setup() {
  // Make a fullscreen bg canvas
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  background(27, 28, 33);
}

function draw() {
  // Create Flow Fields using Perlin Noise (I Let Copilot do this for me and tweaked some variables)
  let xoff = 0;
  for (let x = 0; x < width; x += 100) {
    let yoff = 0;
    for (let y = 0; y < height; y += 100) {
      let angle = noise(xoff, yoff, frameCount * 0.005) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      stroke(191, 208, 252, 2);
      push();
      translate(x, y);
      rotate(v.heading());
      line(0, 0, 300, 0);
      pop();
      yoff += 0.1;
    }
    xoff += 0.1;
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}