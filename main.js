function startTimer() {
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;
  
    if (seconds > 59 || minutes < 0 || seconds < 0 || minutes > 59) {
      alert('Invalid input! Please enter valid minutes (0-59) and seconds (0-59).');
      return;
    }
  
    let totalSeconds = minutes * 60 + seconds;
    let timerInterval = setInterval(updateTimer, 1000);
  
    function updateTimer() {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerText = '00:00';
        return;
      }
  
      let minutes = Math.floor(totalSeconds / 60);
      let remainingSeconds = totalSeconds % 60;
  
      document.getElementById('timer').innerText = `${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
      totalSeconds--;
    }
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  }
  