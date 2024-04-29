import "/style.css";
import "add-to-calendar-button";

const addLoadingAnimation = (form) => {
  const spinner = form.querySelector("svg");
  const inputs = [...form.querySelectorAll("input")].concat([
    form.querySelector("textarea"),
  ]);
  spinner.classList.remove("hidden");
  spinner.classList.add("inline");
  inputs.length >= 0 && inputs.forEach((item) => (item.disabled = true));
};

const showAlert = (isSuccesfullRequest, form, alerts) => {
  form.classList.add("hidden");
  alerts.classList.remove("hidden");
  alerts.classList.add("grid");
  if (isSuccesfullRequest) {
    alerts.querySelector("#alert-success").classList.remove("hidden");
  } else {
    alerts.querySelector("#alert-failure").classList.remove("hidden");
  }
};

const resendForm = (form, alerts) => {
  const spinner = form.querySelector("svg");

  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    form.classList.add("grid");
    alerts.classList.remove("grid");
    alerts.classList.add("hidden");
    spinner.classList.remove("inline");
    spinner.classList.add("hidden");
  }
};

//url used from Google sheet app
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzbDfFWxtlIoHcN_RTPxITDw6ilWTOcB4Qp85QOZeWMvtAcgkBET4oy3fQlHVwM-B2cqw/exec";
const form = document.forms["submit-to-google-sheet"];
const alerts = document.querySelector("#alerts-menu");
const resendFormButton = alerts.querySelector("#new-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addLoadingAnimation(form);

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      showAlert(true, form, alerts);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      showAlert(false, form, alerts);
    });
});

resendFormButton.addEventListener("click", () => resendForm(form, alerts));

const countdownInit = () => {
  const countdownDiv = document.querySelector("#countdown");
  const countdownDate = new Date("Sep 25, 2024 17:00:00").getTime();
  const timeInterval = setInterval(function () {
    let dateNow = new Date().getTime();
    let timeRemaining = countdownDate - dateNow;
    countdownDiv.innerHTML = `${getDays(timeRemaining)}  ${getHours(
      timeRemaining
    )}  ${getMinutes(timeRemaining)}  ${getSeconds(timeRemaining)}`;
    if (timeRemaining > 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
};

const getDays = (distance) => {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  return days + getUnitInflection(days, "d", "d", "d");
};
const getHours = (distance) => {
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return hours + getUnitInflection(hours, "h", "h", "h");
};
const getMinutes = (distance) => {
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  return minutes + getUnitInflection(minutes, "min", "min", "min");
};
const getSeconds = (distance) => {
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return seconds + getUnitInflection(seconds, "s", "s", "s");
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

countdownInit();
document
  .querySelector("#menuButton")
  .addEventListener("click", () =>
    document.querySelector("#menu").classList.toggle("hidden")
  );
