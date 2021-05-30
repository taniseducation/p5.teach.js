function setup() {
  createCanvas(400, 400);
  scene();
}

function draw() {
  background(220);
}

function scene() {
  let tex_1 = new TeX(
    '\\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}',
    50,
    175,
    300,
    50
  );
  let tex_2 = new TeX(
    '\\overrightarrow{F}_{12} = k_e \\frac{q_1 q_2}{r^2}',
    width / 2,
    height / 2
  );
  let text_1 = new Text('p5-teach is a superb library!!', 200, 200);

  //tex_1.play(); //DEFAULT: write
  play(tex_1,'all-at-once');
  //play(tex_1, 'appear', 500);
  //T_scale (text_1, 2);
  //play(text_1);
  //fadeIn(tex_2, 2000);
  //shift(tex_1, width / 2, 200);
  //tex_1.scale(2);
  //play(tex_1);
  //noLoop();
}
