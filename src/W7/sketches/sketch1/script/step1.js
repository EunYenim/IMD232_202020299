let dom;
let htmlDom;
let cW = 600;
let cH = 400;

function setup() {
  dom = select('#canvas'); // 지역변수
  htmlDom = document.querySelector('#canvas');
  let canvas = createCanvas(cW, cH);
  canvas.parent(dom);
  // console.log('p5 sdom', dom); //
  // console.log('p5 sdom', dom.width); //

  // console.log('querySeletor', htmlDom); //
  // console.log('querySeletor', htmlDom.clientWidth); // 가로 구하기
  background('white');
}

function draw() {}

function windowResized() {
  console, log('리사이즈');
  if (htmlDom.clientWidth < cW) {
    resizeCanvas(htmlDom.clientWidth, (htmlDom.clientWidth * cH) / cW);
    background('white');
  } else if (width !== cW) {
    resizeCanvas(cW, cH);
    background('white');
  }
  // dom = select('#canvas'); // 지역변수

  // console.log('p5 sdom', dom);
}
