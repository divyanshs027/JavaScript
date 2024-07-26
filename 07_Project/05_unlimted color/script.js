const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let interval;
  const startChnageColor = function () {
    if (!interval) {
      interval = setInterval(changeBgColor, 100);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChnageColor = function () {
    clearInterval(interval);
    interval = null;
  };
  document.querySelector('#start').addEventListener('click', startChnageColor);
  document.querySelector('#stop').addEventListener('click', stopChnageColor);
  