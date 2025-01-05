const cookieElement = document.querySelector('.cookie-consent');

new Promise((resolve) => {
  setTimeout(() => {
    makeActive();
  }, 2000);
  resolve();
}).then(() => {
  const acceptBtn = document.querySelector('.accept-btn');
  acceptBtn.addEventListener('click', () => {
    cookieElement.classList.remove('active');
  })
});


function makeActive() {
  cookieElement.classList.remove('active');

  if (!cookieElement.classList.contains('active')) {
    cookieElement.classList.add('active');
    cancelConsent();
  }
}

function cancelConsent() {
  const cancelBtn = document.querySelector('.cancel-btn');
  cancelBtn.addEventListener('click', () => {
    cookieElement.classList.remove('active');
  })
}


