function setup() {
  setCanvasContainer('p5-canvas', 100, 100, true);
  background('white');
}

function draw() {
  background('#AA98B2');
  colorMode(HSB);

  noStroke();
  fill('#a9a9a9');
  rect(0, 0, width, height * 0.03);
  fill('#696969');
  rect(0, (85 * height) / 100, width, height * 0.015);
  fill('#250053');
  rect(0, (86 * height) / 100, width * 1, height * 0.28);

  fill('#6a5acd');
  rect((84 * width) / 100, (30 * height) / 100, width * 0.5, height * 0.28);
  fill('#c0c0c0');
  rect((82 * width) / 100, (30 * height) / 100, width * 0.5, height * 0.02);
  rect((82 * width) / 100, (30 * height) / 100, width * 0.02, height * 0.3);
  rect((82 * width) / 100, (58 * height) / 100, width * 0.5, height * 0.02);

  //풍경이 보이는 창문
  //풍경
  fill('#090909');
  rect(0, (20 * height) / 100, width * 0.17, height * 0.45);
  fill('#1F6108');
  rect(0, (50 * height) / 100, width * 0.17, height * 0.15);
  fill('yellow');
  circle((2 * width) / 100, (25 * height) / 100, width * 0.027);
  fill(58, 100, 100, 0.2);
  circle((2 * width) / 100, (25 * height) / 100, width * 0.045);
  fill(58, 100, 100, 0.1);
  circle((2 * width) / 100, (25 * height) / 100, width * 0.06);
  //집
  fill('#D1DBFF');
  rect(0, (32 * height) / 100, width * 0.06, height * 0.18);
  fill('#D1DBFF');
  rect((10 * width) / 100, (32 * height) / 100, width * 0.07, height * 0.18);
  // fill('#BAA2BA');
  // rect((9 * width) / 100, (32 * height) / 100, width * 0.1, height * 0.18);
  fill('yellow');
  rect(0, (38 * height) / 100, width * 0.02, height * 0.02);
  fill(58, 100, 100, 0.3);
  rect(0, (37 * height) / 100, width * 0.03, height * 0.035);
  fill('yellow');
  rect(0, (44 * height) / 100, width * 0.02, height * 0.02);
  fill(58, 100, 100, 0.3);
  rect(0, (44 * height) / 100, width * 0.03, height * 0.035);
  fill('yellow');
  rect((13 * width) / 100, (38 * height) / 100, width * 0.02, height * 0.02);
  fill(58, 100, 100, 0.3);
  rect((13 * width) / 100, (37 * height) / 100, width * 0.03, height * 0.035);
  fill('yellow');
  rect((13 * width) / 100, (44 * height) / 100, width * 0.02, height * 0.02);
  fill(58, 100, 100, 0.3);
  rect((13 * width) / 100, (44 * height) / 100, width * 0.03, height * 0.035);
  // fill('#3E3E3E');
  // rect((5 * width) / 100, (30 * height) / 100, width * 0.03, height * 0.04);
  // fill('#5B5B5B');
  // rect((9 * width) / 100, (32 * height) / 100, width * 0.1, height * 0.07);
  // fill('#5B5B5B');
  // triangle(
  //   0,
  //   (32 * height) / 100,
  //   (9 * width) / 100,
  //   (32 * height) / 100,
  //   (9 * width) / 100,
  //   (39 * height) / 100
  // );

  //창문틀
  fill('#696969');
  rect(0, (20 * height) / 100, width * 0.17, height * 0.02);
  rect(0, (42 * height) / 100, width * 0.17, height * 0.015);
  rect((17 * width) / 100, (20 * height) / 100, width * 0.02, height * 0.47);
  fill('#696969');
  rect((5.5 * width) / 100, (19.8 * height) / 100, width * 0.02, height * 0.5);
  fill('#C3C3C3');
  rect(0, (65 * height) / 100, width * 0.21, height * 0.02);
  fill('#5C5C5C');
  rect(0, (67 * height) / 100, width * 0.19, height * 0.05);
  fill('#505050');
  rect(0, (67 * height) / 100, width * 0.19, height * 0.02);
  fill('#272727');
  rect(0, (22 * height) / 100, width * 0.21, height * 0.008);
  fill('#272727');
  circle((21 * width) / 100, (22.5 * height) / 100, width * 0.025);
  //커튼
  fill(0, 0, 100, 0.5);
  rect((11 * width) / 100, (22 * height) / 100, width * 0.08, height * 0.4);

  //책꽃이
  fill('#2F0404');
  rect((34 * width) / 100, (50 * height) / 100, width * 0.4, height * 0.01);
  fill('#838FFA');
  rect(
    (38 * width) / 100,
    (40 * height) / 100,
    width * 0.03,
    height * 0.1,
    20,
    20,
    0,
    0
  );
  fill('#7D054D');
  rect(
    (43 * width) / 100,
    (40 * height) / 100,
    width * 0.03,
    height * 0.1,
    20,
    20,
    0,
    0
  );
  fill('#410027');
  rect(
    (46 * width) / 100,
    (40 * height) / 100,
    width * 0.03,
    height * 0.1,
    20,
    20,
    0,
    0
  );
  fill('white');
  rect(
    (41 * width) / 100,
    (41 * height) / 100,
    width * 0.01,
    height * 0.09,
    20,
    20,
    0,
    0
  );
  fill('#BABABA');
  rect(
    (42 * width) / 100,
    (41 * height) / 100,
    width * 0.01,
    height * 0.09,
    20,
    20,
    0,
    0
  );

  //전등
  fill(0, 0, 100);
  circle((65 * width) / 100, (48.5 * height) / 100, width * 0.05);
  fill(0, 0, 100, 0.2);
  circle((65 * width) / 100, (48.5 * height) / 100, width * 0.065);
  fill(0, 0, 100, 0.18);
  circle((65 * width) / 100, (48.5 * height) / 100, width * 0.08);
  fill(0, 0, 100, 0.13);
  circle((65 * width) / 100, (48.5 * height) / 100, width * 0.095);
  fill(0, 0, 100, 0.1);
  circle((65 * width) / 100, (48.5 * height) / 100, width * 0.12);
  fill(0, 0, 15, 1);
  rect((65 * width) / 100, 0, width * 0.005, height * 0.45);
  rect(
    (60 * width) / 100,
    (42 * height) / 100,
    width * 0.1,
    height * 0.07,
    25,
    25,
    0,
    0
  );

  //의자
  fill('#ff69b4');
  rect(
    (26 * width) / 100,
    (62 * height) / 100,
    width * 0.6,
    height * 0.2,
    10,
    10,
    0,
    0
  );
  fill('#DADADA');
  rect(
    (26 * width) / 100,
    (80 * height) / 100,
    width * 0.02,
    height * 0.1,
    0,
    0,
    3,
    3
  );
  rect(
    (84 * width) / 100,
    (80 * height) / 100,
    width * 0.02,
    height * 0.1,
    0,
    0,
    3,
    3
  );
  fill('#6E6E6E');
  rect(
    (26 * width) / 100,
    (88 * height) / 100,
    width * 0.02,
    height * 0.02,
    0,
    0,
    3,
    3
  );
  rect(
    (84 * width) / 100,
    (88 * height) / 100,
    width * 0.02,
    height * 0.02,
    0,
    0,
    3,
    3
  );
  fill('#DADADA');
  rect((26 * width) / 100, (80 * height) / 100, width * 0.6, height * 0.02);
  fill('#B0B0B0');
  rect((26 * width) / 100, (80 * height) / 100, width * 0.6, height * 0.01);

  //탁자
  fill('#D08A39');
  rect((48 * width) / 100, (68 * height) / 100, width * 0.43, height * 0.015);
  rect((53 * width) / 100, (69 * height) / 100, width * 0.325, height * 0.02);
  fill('#B3752D');
  rect(
    (53 * width) / 100,
    (69.5 * height) / 100,
    width * 0.325,
    height * 0.008
  );
  fill('#A66C2A');
  rect((68 * width) / 100, (70 * height) / 100, width * 0.03, height * 0.2);
  fill('#7B4A12');
  triangle(
    (68 * width) / 100,
    (87 * height) / 100,
    (61 * width) / 100,
    (90 * height) / 100,
    (68 * width) / 100,
    (90 * height) / 100
  );
  fill('#7B4A12');
  triangle(
    (71 * width) / 100,
    (87 * height) / 100,
    (77 * width) / 100,
    (90 * height) / 100,
    (71 * width) / 100,
    (90 * height) / 100
  );
  fill('#610D63');
  rect(
    (26 * width) / 100,
    (72 * height) / 100,
    width * 0.06,
    height * 0.08,
    10,
    10,
    0,
    0
  );
  fill('#610D63');
  rect(
    (80 * width) / 100,
    (72 * height) / 100,
    width * 0.06,
    height * 0.08,
    10,
    10,
    0,
    0
  );

  //탁자 위 물건
  fill('#D8913E');
  circle((52 * width) / 100, (62 * height) / 100, width * 0.05);
  fill('#D8913E');
  circle((58 * width) / 100, (62 * height) / 100, width * 0.05);
  fill('#FFB053');
  circle((56 * width) / 100, (62 * height) / 100, width * 0.05);
  fill('#0498EB');
  arc(
    (55 * width) / 100,
    (62 * height) / 100,
    width * 0.12,
    height * 0.12,
    0,
    PI
  );
  fill('#2e8b57');
  circle((59 * width) / 100, (60.5 * height) / 100, width * 0.008);
  fill('#217445');
  circle((51 * width) / 100, (61 * height) / 100, width * 0.008);
  circle((55 * width) / 100, (60.5 * height) / 100, width * 0.008);

  fill('#0453EB');
  rect((47 * width) / 100, (62 * height) / 100, width * 0.15, height * 0.01, 3);
  fill(0, 0, 90, 0.5);
  rect((72 * width) / 100, (59 * height) / 100, width * 0.06, height * 0.09);
  fill(330, 38, 26, 0.7);
  rect((73 * width) / 100, (62 * height) / 100, width * 0.04, height * 0.05);
  //
  fill(0, 0, 90, 0.5);
  rect((64 * width) / 100, (59 * height) / 100, width * 0.06, height * 0.09);
  fill(330, 38, 26, 0.7);
  rect((65 * width) / 100, (64 * height) / 100, width * 0.04, height * 0.03);

  //의자 2
  fill('#65324C');
  rect(
    (65 * width) / 100,
    (80 * height) / 100,
    width * 0.15,
    height * 0.02,
    10,
    10,
    0,
    0
  );
  fill('#DADADA');
  rect(
    (65 * width) / 100,
    (82 * height) / 100,
    width * 0.02,
    height * 0.1,
    0,
    0,
    3,
    3
  );
  rect(
    (78 * width) / 100,
    (82 * height) / 100,
    width * 0.02,
    height * 0.1,
    0,
    0,
    3,
    3
  );
  fill('#6E6E6E');
  rect(
    (65 * width) / 100,
    (90 * height) / 100,
    width * 0.02,
    height * 0.02,
    0,
    0,
    3,
    3
  );
  rect(
    (78 * width) / 100,
    (90 * height) / 100,
    width * 0.02,
    height * 0.02,
    0,
    0,
    3,
    3
  );
  fill('#DADADA');
  rect((65 * width) / 100, (82 * height) / 100, width * 0.15, height * 0.02);
  fill('#B0B0B0');
  rect((65 * width) / 100, (82 * height) / 100, width * 0.15, height * 0.01);

  //액자 속 그림
  fill('#EF909E');
  ellipse((95 * width) / 100, (48 * height) / 100, width * 0.1, height * 0.12);
  ellipse((90 * width) / 100, (51 * height) / 100, width * 0.06, height * 0.06);
  ellipse(
    (100 * width) / 100,
    (51 * height) / 100,
    width * 0.06,
    height * 0.06
  );
  ellipse((88 * width) / 100, (42 * height) / 100, width * 0.04, height * 0.06);
  ellipse((93 * width) / 100, (38 * height) / 100, width * 0.04, height * 0.06);
  ellipse((99 * width) / 100, (39 * height) / 100, width * 0.04, height * 0.06);
}
