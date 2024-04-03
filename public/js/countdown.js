export const countdownInit = () => {
  const countdownDiv = document.querySelector("#countdown");
  const countdownDate = new Date("Sep 25, 2024 17:00:00").getTime();
  const timeInterval = setInterval(function () {
    let dateNow = new Date().getTime();
    let timeRemaining = countdownDate - dateNow;
    countdownDiv.innerHTML = `${getDays(timeRemaining)} ${getHours(
      timeRemaining
    )} ${getMinutes(timeRemaining)} ${getSeconds(timeRemaining)}`;
    timeRemaining < 0 ?? clearInterval(timeInterval);
  }, 1000);
};

const getDays = (distance) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  return days + getUnitInflection(days, "dnů", "dny", "den");
};
const getHours = (distance) => {
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return hours + getUnitInflection(hours, "hodin", "hodiny", "hodina");
};
const getMinutes = (distance) => {
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  return minutes + getUnitInflection(minutes, "minut", "minuty", "minuta");
};
const getSeconds = (distance) => {
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return seconds + getUnitInflection(seconds, "sekund", "sekundy", "sekunda");
};

const getUnitInflection = (count, five, two, one) => {
  let unit = five;
  if (count > 1 && count < 5) {
    unit = two;
  } else if (count === 1) {
    unit = one;
  }
  return "&nbsp;" + unit;
};
