import * as cocoSsd from '@tensorflow-models/coco-ssd';

const vid = document.getElementById('vid');
const title = document.getElementById('title');
const btn = document.getElementById('btn');
let model;
async function init () {

  // Load the model.
  model = await cocoSsd.load();
}


init()

function write (str) {
  title.innerText = str
}

async function run () {

  // Classify the image.
  const predictions = await model.detect(vid);

  console.log('Predictions: ');
  console.log(predictions);
  if (predictions[0] && predictions[0].class) {
    write(predictions[0].class)
  }

}

// setInterval(run, 100);

let isRun = false;
function btnClick() {
  if (isRun) return;
  isRun = true;
  vid.play();
  setInterval(run, 100);
};
btn.addEventListener('click', btnClick)