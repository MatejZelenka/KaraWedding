export const addLoadingAnimation = (form) => {
  const spinner = form.querySelector('svg');
  const inputs = [...form.querySelectorAll('input')].concat([form.querySelector('textarea')]);
  spinner.classList.remove('hidden');
  spinner.classList.add('inline');
  inputs.length >= 0 && inputs.forEach(item => item.disabled = true);
}

export const showAlert = (isSucessfullRequest, form, alerts) => {
  form.classList.add('hidden');
  alerts.classList.remove('hidden');
  alerts.classList.add('grid');
  if (isSucessfullRequest) {
    alerts.querySelector('#alert-success').classList.remove('hidden');
  } else {
    alerts.querySelector('#alert-failure').classList.remove('hidden');
  }
}


export const resendForm = (form, alerts) => {
  const spinner = form.querySelector('svg');

  if (form.classList.contains('hidden'))
  {
    form.classList.remove('hidden');
    form.classList.add('grid');
    alerts.classList.remove('grid');
    alerts.classList.add('hidden');
    spinner.classList.remove('inline');
    spinner.classList.add('hidden');
  }
}
