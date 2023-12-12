let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.hide();
  // cam.size(320, 480);
  noLoop();
}
function draw() {
  background('white');
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  // iamge(cam, 0, 0, width, (cam.height / width) * height);
  // cam.loadPixels();
  // console.log('width', cam.width);
  // console.log('height', cam.height);
  // console.log('pixles', cam.pixels[0]);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = cam.width * y + x;
      const color = cam.pixels[idx];
      const b = brightness(color);
      ellipse(x, y, (b / 255) * 20);
      // const red =red(color);
      // cam.pixels[idx];
      // 캠 안의 각각의 모든 픽셀에 접근 가능
    }
  }
  updatePixels();
}
