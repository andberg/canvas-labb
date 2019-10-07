// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('imageData');

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  let intervalFn;

  const maxWidth = 300;
  const width = maxWidth;
  const height = 500;

  const canvas = document.getElementById('canvas-image-data');
  canvas.width = width;
  canvas.height = height;

  let currentX = 0;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);

  function draw(traceData) {
    let imageData = ctx.getImageData(currentX, 0, 1, height);

    const dataFromImage = imageData.data;

    for (var i = 0; i < dataFromImage.length; i++) {
      dataFromImage[i] = traceData[i];
    }
    ctx.putImageData(imageData, currentX, 0);
  }

  function stopMeasurementInterval() {
    clearInterval(intervalFn);
  }

  function addData() {
    intervalFn = setInterval(() => {
      generateData();
    }, 10);
  }

  function generateData() {
    const traceData = [];
    for (let i = 0; i < height; i++) {
      const int = getRandomInt();
      for (var j = 0; j < 4; j++) {
        traceData.push(int);
      }
    }

    if (currentX === maxWidth - 1) {
      // shift everything to the left:
      var imageData = ctx.getImageData(
        1,
        0,
        ctx.canvas.width - 1,
        ctx.canvas.height
      );
      ctx.putImageData(imageData, 0, 0);
      // now clear the right-most pixels:
      ctx.clearRect(ctx.canvas.width - 1, 0, 1, ctx.canvas.height);
    } else {
      currentX = currentX + 1;
    }
    draw(traceData);
  }

  function getRandomInt() {
    // min and max included
    const int = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    if (int === 0) {
      return 255;
    }
    return int;
  }
};
