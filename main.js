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
    const textAreas = [...form.querySelectorAll("textarea")];
    const sendButton = [...form.querySelectorAll("button")];

    disableInputs(inputs);
    disableInputs(sendButton);
    disableInputs(textAreas);
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
        ? toggleAccommodationTextArea(false)
        : toggleAccommodationTextArea(true);
    });
  });
};
const toggleAccommodationTextArea = (value) => {
  return (document.querySelector("#accomodation-message").disabled = value);
};
const disableInputGroup = () => {
  const inputElements = [
    ...document.querySelectorAll("#accomodation-day input"),
    ...document.querySelectorAll("#accomodation input"),
  ];

  const messageElement = document.querySelector("#accomodation-message");
  const allElements = [...inputElements, messageElement];
  const ubytovaniRadioButtons = document.querySelectorAll('input[name="Ubytovani"]');
  ubytovaniRadioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", () => {
      if (radioButton.value === "Ano") {
        allElements.forEach(element => element.disabled = false);
      } else {
        allElements.forEach(element => element.disabled = true);
      }
    });
  });
};

//url used from Google sheet app
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzdvq2PZsd3W6Mw8XZRFQTpA8FweHGrhHQ-_bo4eFuRKntc4bh_2XuDy8y_fSD7r6-BGQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addLoadingAnimation(form);

  fetch(scriptURL, {method: "POST", body: new FormData(form)})
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

const getDays = (distance) => Math.floor(distance / (1000 * 60 * 60 * 24)) + " d";
const getHours = (distance) => Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
) + " h";
const getMinutes = (distance) => Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " min";
const getSeconds = (distance) => Math.floor((distance % (1000 * 60)) / 1000) + " s";

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
disableInputGroup();
