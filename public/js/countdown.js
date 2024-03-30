export const countdown = (endDate) => {
  const countdownDiv = document.querySelector("#countdown");
  const dateNow = new Date().getTime();

  const timeLeft = endDate - dateNow;

  if (timeLeft < 0) {
    clearInterval();
    return (countdownDiv.innerHTML = "Uz jsme se vzali");
  };   

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownDiv.innerHTML = `${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund` 
}