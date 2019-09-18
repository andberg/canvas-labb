// The function gets called when the window is fully loaded

window.onload = function() {
  console.log('main');

  const height = 200;
  let idGen = 1;

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  let intervalFn;

  function stopMeasurementInterval() {
    clearInterval(intervalFn);
  }

  function addData() {
    intervalFn = setInterval(() => {
      generateData();
    }, 10);
  }

  function getId() {
    idGen = idGen + 1;
    return idGen;
  }

  function createCanvasAndReturnId() {
    const id = getId();
    const currentCanvas = document.createElement('canvas');
    currentCanvas.height = height;
    currentCanvas.width = 1;
    currentCanvas.setAttribute('id', id);
    document.getElementById('canvas-container').appendChild(currentCanvas);
    return id;
  }

  function generateData() {
    const data = [];
    for (let i = 0; i < height; i++) {
      data.push(i / height);
    }
    drawLine(data);
    console.log(data);
  }

  function drawLine(dataArray) {
    const currentId = createCanvasAndReturnId();
    const currentCanvas = document.getElementById(currentId);
    console.log(currentCanvas.width);
    const currentContext = currentCanvas.getContext('2d');

    const x = 0;
    for (var i = 0; i < dataArray.length; i++) {
      currentContext.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      currentContext.fillRect(x, i, 1, 1);
    }
  }
};
