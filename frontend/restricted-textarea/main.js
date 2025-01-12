const textareaElm = document.querySelector('.js-textarea');
const wordCountElm = document.querySelector('.word-count');
const maxLimit = 250;

textareaElm.addEventListener('input', (e) => {
  const words = textareaElm.value.length; 

  wordCountElm.textContent = `${words} / 250`;

  if (words >= maxLimit) {
    textareaElm.classList.add('limit-reached');
    wordCountElm.classList.add('limit-reached');
  }
  else {
    textareaElm.classList.remove('limit-reached');
    wordCountElm.classList.remove('limit-reached');
  }
});

textareaElm.addEventListener('keydown', (e) => {
 const words = textareaElm.value.length;

 if (words >= 250) {
  e.preventDefault();
 }
})
