let passwordInput = document.querySelector('.password');
let progressBar = document.querySelector('.progress .bar');

passwordInput.addEventListener('keyup', () => {
  let strength = 0;

  if (passwordInput.value.match(/([a-z].*[A-Z])|(A-Z).*[a-z]/)) {
    renderRule('.low-upper-case', true);
  } else {
    renderRule('.low-upper-case', false);
  }
});

function renderRule(ruleClass, valid) {
  let ruleArea = document.querySelector(ruleClass);

  ruleArea.querySelector('.valid-point')
    .style.backgroundColor = valid ? "green" : "red";
};