'use strict';

const QUESTIONS = [
  {
    question: 'What is the name of Tom Haverfords alcoholic beverage?',
    answers: ['Lemon Sexy', 'Tommy Fresh', 'Snake Juice', 'Cobra Venom' ],
    correctAnswer: 'Snake Juice'
  },
  {
    question: 'What kind of car does Donna drive?',
    answers: ['Jaguar', 'Rolls Royce', 'Mercedes Benz', 'Ferrari'],
    correctAnswer: 'Mercedes Benz'
  },
  {
    question: 'What is Andy Dwyers alter ego?',
    answers: ['Burt Macklin, FBI', 'Randy Handler, CIA', 'Jack Thrifty, DEA', 'Paula Hart, PTA'],
    correctAnswer: 'Bert Macklin, FBI'
  },
  {
    question: 'Where was Leslie Knopp born?',
    answers: ['Eagleton', 'Pawnee', 'Indianapolis', 'Washington D.C.'],
    correctAnswer: 'Eagleton'
  },
  {
    question: 'What is Bens terrible choice of favorite food?',
    answers: ['Mini muffins', 'Calzones', 'Pop-Tarts', 'Hot-Pockets'],
    correctAnswer: 'Calzones'
  },
  {
    question: 'Who is Leslie Knopps teenage nemesis?',
    answers: ['Gary Finklestein', 'Greg Pikitus', 'George Patticus', 'Ginny Weasley'],
    correctAnswer: 'Greg Pikitus'
  }
];

const STORE = {

};

//Template generators
function generateAnswerList(answers) {

}

//Rendering functions
function renderQuestionText() {

}

//Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrive answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

$(function(){
  handleAnswerSubmitted();
});