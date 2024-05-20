function alarm(hour, minutes) {
  minutes += 15;

  if (minutes >= 60) {
    hour += 1;
    minutes -= 60;
  }
  if (hour >= 24) {
    hour -= 24;
  }

  let formatedHour = hour < 10 ? "0" + hour : hour;
  let formatedMinutes = minutes < 10 ? "0" + minutes : minutes;

  console.log(`${formatedHour} : ${formatedMinutes}`);
}

alarm(0, 2);
