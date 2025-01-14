import {questions, answers} from './data/data.js';

new Promise((resolve) => {
  renderQuestions();
  resolve();
}).then(() => {
  document.querySelectorAll('.question')
    .forEach((question) => {
      question.addEventListener('click', () => {
        const {quesId} = question.dataset; 
        const ansElement = document.querySelector(`.ans-${quesId}`);
        
        if(ansElement.classList.contains('active')) {
            ansElement.classList.remove('active');
          }
          else {
            displayAns(quesId);
          }
      });
    });
});

function displayAns(quesId) {
  const ansElm = document.querySelector(`.ans-${quesId}`);
  
  if(ansElm.classList.contains('active')) {
    ansElm.classList.remove('active');
  }

  ansElm.classList.toggle('active');

};

function renderQuestions() {
  let html = '';

  questions.forEach((question, index) => {
    html += `
      <div class="qna-container">
        <button class="question" data-ques-id="${question.id}">
          <span>${question.context}</span>
          <i class="fa-solid fa-angle-down"></i>
        </button>
        <p class="answer ans-${question.id}">
          ${generateAns(index)}
        </p>
      </div>
    `;
  });

  document.querySelector('.qna-wrapper')
    .innerHTML = html;
}

function generateAns(index) {
  if(index < answers.length) {
    return answers[index].context;  
  }
  else {
    return 'Answer not available';
  }
}