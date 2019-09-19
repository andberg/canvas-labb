// The function gets called when the window is fully loaded
window.onload = function() {
  console.log('draw data on one canvas');

  const height = 500;

  const addDataButton = document.getElementById('addDataBtn');
  addDataButton.addEventListener('click', addData);

  const stopMeasurmentBtn = document.getElementById('stopMeasurement');
  stopMeasurmentBtn.addEventListener('click', stopMeasurementInterval);

  let intervalFn;

  const dataArray = [];

  const currentCanvas = document.getElementById('viewport');
  const currentContext = currentCanvas.getContext('2d');

  function stopMeasurementInterval() {
    clearInterval(intervalFn);
  }

  function addData() {
    intervalFn = setInterval(() => {
      generateData();
    }, 10);
  }

  function generateData() {
    for (let i = 0; i < height; i++) {
      const number = Math.floor(Math.random() * Math.floor(100));
      dataArray.push(number / height);
    }
    //console.log(data);
    drawLine(dataArray);
  }

  function drawLine(dataArray) {
    currentContext.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
    const numberOfLines = dataArray.length / height;
    console.log('number of lines', numberOfLines);
    const dataArrayClone = Array.from(dataArray);
    for (var j = 0; j < numberOfLines; j++) {
      const linesData = dataArrayClone.splice(0, height);
      for (var i = 0; i < linesData.length; i++) {
        currentContext.fillStyle = 'rgba(1,1,1,' + linesData[i] + ')';
        currentContext.fillRect(j, i, 1, 1);
      }
    }
  }
};
