// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('imageData');

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  let intervalFn;

  const width = window.innerWidth;
  const height = 500;

  const canvas = document.getElementById('canvas-image-data');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  function draw() {
    let imageData = ctx.getImageData(0, 0, width, height);
    const dataFromImage = imageData.data;

    for (var j = 0; j< data.length; j++){
        dataFromImage[j] = data[j]
    }
    // for (var i = 0; i < dataFromImage.length; i += 4) {
    //   dataFromImage[i] = 255; // red
    //   dataFromImage[i + 1] = 0; // green
    //   dataFromImage[i + 2] = 0; // blue
    //   dataFromImage[i + 3] = 255; // opavity
    // }
    console.log(imageData);

    ctx.putImageData(imageData, 0, 0);
  }

  function stopMeasurementInterval() {
    clearInterval(intervalFn);
  }

  function addData() {
    intervalFn = setInterval(() => {
      generateData();
    }, 500);
  }

  const data = [];
  function generateData() {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < 4; j++) {
        if (j < 3) {
          data.push(0);
        } else {
          data.push(255);
        }
      }
    }
    console.log(data);
    draw();
  }
};

const exampleData = [
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08,
  0.15,
  0.105,
  0.115,
  0.255,
  0.09,
  0.135,
  0.135,
  0.07,
  0.205,
  0.08
];
