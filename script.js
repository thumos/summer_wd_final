// Array objects. Each has a question, which has an array of answers.

// TODO: Make this work.
// function startQuiz() {
//     document.querySelector("#readyPlayerOne").getElementsByClassName.zIndex = "-1000";
//     document.querySelector("#question1").getElementsByClassName.zIndex = "1000";
// }
// function moveToQ2() {
//     document.querySelector("#question1").getElementsByClassName.zIndex = "-1000";
//     document.querySelector("#question2").getElementsByClassName.zIndex = "1000";
// }
// function moveToQ3() {
//     document.querySelector("#question2").getElementsByClassName.zIndex = "-1000";
//     document.querySelector("#question3").getElementsByClassName.zIndex = "1000";
// }
// function submitQuiz() {
//     document.querySelector("#question3").getElementsByClassName.zIndex = "-1000";
//     document.querySelector("#results").getElementsByClassName.zIndex = "1000";
// }
// TODO: Make modal(s). Move the IDs and positions like with the carousel in HW
// positioning of div, then change positions for modals.

// TODO: Calculate the score & insert to HTML/page.
// const form = {
//     a1: document.getElementById('a1'),
//     a2: document.getElementById('a2'),
//     a3: document.getElementById('a3')
// };

// Need a true false to get 

// function calculateScore() {
//     console.log(petSelect.value);
//     const question1 = document.querySelector("#pet-select");
//     if (question1.value == "correct") {
//         points++;
// }

// if (points > 0) {
//     console.log("Yay you win");
//     } else {
//         console.log("Boo you suck");
//     }
// }
// TODO: Get this to reset when the quiz is over.
let points = 0;

// The modal.
function displayModal() {
    // use getElementByID to grab the id="close" element and assign it to a variable called modalClose
    const modalClose = document.getElementById("close");
    // use getElementByID to grab the id="modal" element and assign it to a variable called modal
    const modal = document.getElementById("modal");
    // Set modal to display block to show it
    modal.style.display = "block";
    
    // When the user clicks on the modalClose <span> (x), 
    modalClose.onclick = function() {
        // set modal to diplay none
        modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          
          if (event.target === modal) {
            // update modal style to display none
            modal.style.display = "none";
          }
      };
    }
    

  // Adds score to screen.
  function addStatsToModal() {
    // Access the modal content div
    const statsParent = document.querySelector(".modal-content");
    // Create three different paragraphs
    for (let i = 1; i <= 3; i++) {
      // Create a new Paragraph
      const statsElement = document.createElement('p');
      // Add a class to the new Paragraph
      statsElement.classList.add('stats');
      
      // Add the new created <p> tag to the modal content
      statsParent.appendChild(statsElement);
    }
    // Select all p tags with the class of stats and update the content
    let p = statsParent.querySelectorAll("p.stats");
    // Set the new <p> to have the content of stats (time, moves and star rating)
    p[0].innerHTML = "You got " + points + " out of 10 correct!";
  }

function calculate() {
    const questionOne = document.getElementsByName("questionOne");
    let selectedAnswerOne;
    for (let i = 0; i < questionOne.length; i++) {
      if (questionOne[i].checked == true) {
        selectedAnswerOne = questionOne[i];
      }
    }
    if (selectedAnswerOne.id == "a1") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionTwo = document.getElementsByName("questionTwo");
    let selectedAnswerTwo;
    for (let i = 0; i < questionTwo.length; i++) {
      if (questionTwo[i].checked == true) {
        selectedAnswerTwo = questionTwo[i];
      }
    }
    if (selectedAnswerTwo.id == "a2") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }

    const questionThree = document.getElementsByName("questionThree");
    let selectedAnswerThree;
    for (let i = 0; i < questionThree.length; i++) {
      if (questionThree[i].checked == true) {
        selectedAnswerThree = questionThree[i];
      }
    }
    if (selectedAnswerThree.id == "a3") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionFour = document.getElementsByName("questionFour");
    let selectedAnswerFour;
    for (let i = 0; i < questionFour.length; i++) {
      if (questionFour[i].checked == true) {
        selectedAnswerFour = questionFour[i];
      }
    }
    if (selectedAnswerFour.id == "a4") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionFive = document.getElementsByName("questionFive");
    let selectedAnswerFive;
    for (let i = 0; i < questionFive.length; i++) {
      if (questionFive[i].checked == true) {
        selectedAnswerFive = questionFive[i];
      }
    }
    if (selectedAnswerFive.id == "a5") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionSix = document.getElementsByName("questionSix");
    let selectedAnswerSix;
    for (let i = 0; i < questionSix.length; i++) {
      if (questionSix[i].checked == true) {
        selectedAnswerSix = questionSix[i];
      }
    }
    if (selectedAnswerSix.id == "a6") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionSeven = document.getElementsByName("questionSeven");
    let selectedAnswerSeven;
    for (let i = 0; i < questionSeven.length; i++) {
      if (questionSeven[i].checked == true) {
        selectedAnswerSeven = questionSeven[i];
      }
    }
    if (selectedAnswerSeven.id == "a7") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionEight = document.getElementsByName("questionEight");
    let selectedAnswerEight;
    for (let i = 0; i < questionEight.length; i++) {
      if (questionEight[i].checked == true) {
        selectedAnswerEight = questionEight[i];
      }
    }
    if (selectedAnswerEight.id == "a8") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionNine = document.getElementsByName("questionNine");
    let selectedAnswerNine;
    for (let i = 0; i < questionNine.length; i++) {
      if (questionNine[i].checked == true) {
        selectedAnswerNine = questionNine[i];
      }
    }
    if (selectedAnswerNine.id == "a9") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    const questionTen = document.getElementsByName("questionTen");
    let selectedAnswerTen;
    for (let i = 0; i < questionTen.length; i++) {
      if (questionTen[i].checked == true) {
        selectedAnswerTen = questionTen[i];
      }
    }
    if (selectedAnswerTen.id == "a10") {
      points++;
    }
    if (points > 0) {
      console.log("Yay you win");
    } else {
      console.log("Boo you suck");
    }
    displayModal();
    addStatsToModal();
  }
