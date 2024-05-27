import "/style.css";
import "add-to-calendar-button";
import "@fortawesome/fontawesome-free/js/all.js";
import IMask from "imask";

const addLoadingAnimation = (form) => {
  const spinner = form.querySelector("svg");
  form.querySelector(".inner-button-text").innerHTML = "Odesílání formuláře...";
  spinner.classList.replace("hidden", "inline");
};

const showAlert = (isSuccessfulRequest, form) => {
  const spinner = form.querySelector("svg");
  const innerForm = form.querySelector(".inner-button-text");
  if (isSuccessfulRequest) {
    spinner.classList.replace("inline", "hidden");
    innerForm.innerHTML = `Formulář byl odeslán!
    <i class="fa-solid fa-check text-green-500 text-xl pl-2"></i>`;

    const inputs = [...form.querySelectorAll("input")];
    const textareas = [...form.querySelectorAll("textarea")];

    disableInputs(inputs);
    disableInputs(textareas);
  } else {
    spinner.classList.replace("inline", "hidden");
    innerForm.innerHTML = `Nepovedlo se to!
    <i class="fa-solid fa-xmark text-red-500 text-xl pl-2"></i>`;
  }
};

const disableInputs = (inputArray) => {
  return inputArray.map((item) => (item.disabled = true));
};

const toggleTextAreaState = () => {
  [...document.querySelectorAll("#accomodation input")].map((item) => {
    item.addEventListener("click", (e) => {
      e.target.value === "Pokoj v hotelu"
        ? toggleAccomodationTextArea(false)
        : toggleAccomodationTextArea(true);
    });
  });
};
const toggleAccomodationTextArea = (value) => {
  return (document.querySelector("#accomodation-message").disabled = value);
};

//url used from Google sheet app
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzdvq2PZsd3W6Mw8XZRFQTpA8FweHGrhHQ-_bo4eFuRKntc4bh_2XuDy8y_fSD7r6-BGQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addLoadingAnimation(form);

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      showAlert(true, form);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      showAlert(false, form);
    });
});

const countdownInit = () => {
  const countdownDiv = document.querySelector("#countdown");
  const countdownDate = new Date("Sep 14, 2024 17:00:00").getTime();
  const timeInterval = setInterval(function () {
    let dateNow = new Date().getTime();
    let timeRemaining = countdownDate - dateNow;
    countdownDiv.innerHTML = `${getDays(timeRemaining)}  ${getHours(
      timeRemaining
    )}  ${getMinutes(timeRemaining)}  ${getSeconds(timeRemaining)}`;
    timeRemaining < 0 && clearInterval(timeInterval);
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

const switchContactCards = () => {
  const anickaContactCard = document.querySelector("#anda-contact");
  const honzaContactCard = document.querySelector("#honza-contact");
  const jakubContactCard = document.querySelector("#jakub-contact");

  const today = new Date();
  const dateOfWedding = new Date(today.getFullYear(), 8, 14);

  if (today < dateOfWedding) {
    anickaContactCard.classList.remove("hidden");
    honzaContactCard.classList.remove("hidden");
  } else {
    jakubContactCard.classList.remove("hidden");
  }
};

const phoneInput = document.querySelector("#phone");
const maskOptions = {
  mask: "+{42\\0} 000-000-000",
};
const mask = IMask(phoneInput, maskOptions);

countdownInit();
toggleTextAreaState();
switchContactCards();
