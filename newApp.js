var countDownDuration = 25;

document.getElementById("addMins").addEventListener("click", function() {
  countDownDuration += 1;
  document.getElementById("displayTime").innerHTML = `${countDownDuration}:00`;
  //alert("this works");
});

document.getElementById("removeMins").addEventListener("click", function() {
  countDownDuration -= 1;
  document.getElementById("displayTime").innerHTML = `${countDownDuration}:00`;
  //alert("this works");
});

document.getElementById("displayTime").innerHTML = `${countDownDuration}:00`;

function disableButton(btn) {
  document.getElementById("startBtn").disabled = true;
  alert("Button has been disabled.");
}

document
  .getElementById("startBtn")
  .addEventListener("click", function countDown(minutes) {
    minutes = countDownDuration;
    minutes--;
    let seconds = 60;
    document.getElementById("displayTime").innerHTML = `${minutes}:${seconds}`;
    let interval = setInterval(() => {
      seconds--;

      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if ((seconds == 0) & (minutes == 0)) {
        clearInterval(interval);
        alert("Session is over.Take a break before restarting!");
      }

      console.log(`${minutes}:${seconds}`);
      document.getElementById(
        "displayTime"
      ).innerHTML = `${minutes}:${seconds}`;
    }, 10);
  });

/*document.getElementById("pauseBtn").addEventListener("click", () => {
  minutes = minutes;
  seconds = seconds;
});*/
