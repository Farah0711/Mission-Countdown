document.addEventListener('DOMContentLoaded', () => {
  const startTimeoutBtn = document.getElementById('start-timeout');
  const timeoutDisplay = document.getElementById('timeout-display');
  const startIntervalBtn = document.getElementById('start-interval');
  const intervalDisplay = document.getElementById('interval-display');

  let timeoutActive = false;
  let intervalActive = false;

  startTimeoutBtn.addEventListener('click', () => {
    if (timeoutActive) return;

    timeoutActive = true;
    timeoutDisplay.textContent = 'Getting ready...';
    timeoutDisplay.classList.remove('green');
    timeoutDisplay.classList.add('red');

    setTimeout(() => {
      timeoutDisplay.textContent = 'READY!';
      timeoutDisplay.classList.remove('red');
      timeoutDisplay.classList.add('green');
      timeoutActive = false;
    }, 5000);
  });

  startIntervalBtn.addEventListener('click', () => {
    if (intervalActive) return;

    intervalActive = true;
    let count = 5;
    intervalDisplay.textContent = count;

    const countdown = setInterval(() => {
      count--;
      if (count > 0) {
        intervalDisplay.textContent = count;
      } else if (count === 0) {
        intervalDisplay.textContent = 'GO!';
      } else {
        clearInterval(countdown);
        intervalActive = false;

        // ✅ Dynamically create and show 3 GO!s
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            const goElement = document.createElement('h2');
            goElement.textContent = 'GO!';
            goElement.classList.add('repeat-go', 'show');
            document.body.appendChild(goElement);
          }, i * 1000);
        }
      }
    }, 1000);
  });
});
