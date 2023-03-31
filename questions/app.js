const questionBtns = document.querySelectorAll('.question-btn');
const questionsText = document.querySelectorAll('.question-text');
const section = document.querySelector('.section-center');
const plusButton = document.querySelectorAll('.plus-icon');
const minusButton = document.querySelectorAll('.minus-icon');

// show text and minus button when plus button is clicked
plusButton.forEach((button) => {
  button.addEventListener('click', (e) => {

    //Show Text 
    let articles = section.querySelectorAll(".question-text")
    articles.forEach((article) => {
        article.classList.remove('show-text');
    });
    let question = e.currentTarget.parentElement.parentElement.parentElement.children[1];
    question.classList.add('show-text');

    //delete add button
    plusButton.forEach((btn) => {
        btn.classList.remove('hide-icon');
    });
    e.currentTarget.classList.add('hide-icon');

    // show minus button
    minusButton.forEach((btn) => {
        btn.classList.add('hide-icon');
    });
    e.currentTarget.parentElement.children[1].classList.remove('hide-icon'); 
  });
});

// hide text and show plus button when minus button is clicked
minusButton.forEach((button) => {
    button.addEventListener('click', (e) =>  {
        let question = e.currentTarget.parentElement.parentElement.parentElement.children[1];
        question.classList.remove('show-text');
        e.currentTarget.classList.add('hide-icon');
        e.currentTarget.parentElement.children[0].classList.remove('hide-icon');
    });
});