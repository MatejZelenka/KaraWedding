import "/style.css";
import { countdownInit } from "public/js/countdown.js?url";
import "add-to-calendar-button";

countdownInit();

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
