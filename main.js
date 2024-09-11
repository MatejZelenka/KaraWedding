import "/style.css";

const countdownInit = () => {
  const countdownDiv = document.querySelector("#countdown");
  const countdownDate = new Date("Sep 14, 2024 12:30:00").getTime();
  const timeInterval = setInterval(function () {
    let dateNow = new Date().getTime();
    let timeRemaining = countdownDate - dateNow;
    countdownDiv.innerHTML =
      timeRemaining > 0 ?
      `${getDays(timeRemaining)}  ${getHours(
      timeRemaining 
    )}  ${getMinutes(timeRemaining)}  ${getSeconds(timeRemaining)}`
        : '<div>Pan a paní Vařečkovi<div class="text-4xl">🤵🏻‍♂️ 👰🏼‍♀️</div></div>'
    ;
    timeRemaining < 0 && clearInterval(timeInterval);
  }, 1000);
};

const getDays = (distance) => Math.floor(distance / (1000 * 60 * 60 * 24)) + " d";
const getHours = (distance) => Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
) + " h";
const getMinutes = (distance) => Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " min";
const getSeconds = (distance) => Math.floor((distance % (1000 * 60)) / 1000) + " s";

countdownInit();
