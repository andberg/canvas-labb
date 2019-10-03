// The function gets called when the window is fully loaded
window.onload = function() {
  console.log('main');

  const height = 500;
  let idGen = 1;
  const numberOfAllowedDOMElements = 1024;

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  const readMeasurementBtn = document.getElementById('readDataFromFile');
  readMeasurementBtn.addEventListener('click', readMeasurementData);

  const addFilterBtn = document.getElementById('addFilter');
  addFilterBtn.addEventListener('click', addFilter);

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
    document
      .getElementById('canvas-container')
      .appendChild(currentCanvas)
      .scrollIntoView();
    return id;
  }

  function generateData() {
    const data = [];
    for (let i = 0; i < height; i++) {
      const number = Math.floor(Math.random() * Math.floor(100));
      data.push(number / height);
    }
    //console.log(data);
    drawLine(data);
  }

  function drawLine(dataArray) {
    const currentId = createCanvasAndReturnId();
    const currentCanvas = document.getElementById(currentId);
    const currentContext = currentCanvas.getContext('2d');

    const x = 0;
    for (var i = 0; i < dataArray.length; i++) {
      currentContext.fillStyle = 'rgba(1,1,1,' + dataArray[i] + ')';
      currentContext.fillRect(x, i, 1, 1);
    }
    deleteElements();
  }

  function deleteElements() {
    const canvasElement = document.getElementsByTagName('canvas');
    const maxNumberOfElements =
      canvasElement.length === numberOfAllowedDOMElements;

    if (maxNumberOfElements) {
      canvasElement[0].remove();
    }
  }

  function readMeasurementData() {
    for (var i = 0; i < window.measuredData.length; i++) {
      drawLine(window.measuredData[i]);
    }
  }

  function createOneCanvas() {
    const canvasElement = document.getElementsByTagName('canvas');
    const newCanvas = document.createElement('canvas');
    newCanvas.height = height;
    newCanvas.width = canvasElement.length;

    const newContext = newCanvas.getContext('2d');
    newContext.filter = 'opacity(0.5)';

    for (var i = 0; i < canvasElement.length; i++) {
      newContext.drawImage(canvasElement[i], i, 0);
    }

    console.log(newContext);
    document.getElementById('canvas-filter').appendChild(newCanvas);
  }

  function addFilter() {
    createOneCanvas();
    console.log('add filter ');
  }
};
