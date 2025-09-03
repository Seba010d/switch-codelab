let myAnsverInput = document.getElementById("answerOne");
let myAnsverButton = document.getElementById("answerButtonOne");

let myAnsverFeedbackElement = document.getElementById("answerFeedback");

// opgave 1 og 2

myAnsverButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.warn("opgave 1 og 2");
  /* din kode her.*/

  console.log("test: " + document.getElementById("InputOne").value);

  switch (document.getElementById("InputOne").value) {
    case "1":
      console.log("du har valgt 1");
      break;
    case "2":
      console.log("du har valgt 2");
      break;
    case "3":
      console.log("du har valgt 3");
      break;
    case "4":
      console.log("du har valgt 4");
      break;
    case "5":
      console.log("du har valgt 5");
      break;
    default:
      console.log("Kan du ikke fucking tælle din kæmpe retard");
      break;
  }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/

// opgave 3 og 4
myAnsverInput = document.getElementById("answerTwo");
myAnsverButton = document.getElementById("answerButtonTwo");

myAnsverFeedbackElement = document.getElementById("answerFeedbackTwo");

myAnsverButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.warn("opgave 3 og 4");
  /* din kode her.*/
  switch (document.getElementById("InputTwo").value) {
    case "1":
      console.log("du har valgt 1 som er januar");
      break;
    case "2":
      console.log("du har valgt 2 som er februar");
      break;
    case "3":
      console.log("du har valgt 3 som er marts");
      break;
    case "4":
      console.log("du har valgt 4 som er april");
      break;
    case "5":
      console.log("du har valgt 5 som er maj");
      break;
    case "6":
      console.log("du har valgt 6 som er juni");
      break;
    case "7":
      console.log("du har valgt 7 som er juli");
      break;
    case "8":
      console.log("du har valgt 8 som er august");
      break;
    case "9":
      console.log("du har valgt 9 som er september");
      break;
    case "10":
      console.log("du har valgt 10 som er oktober");
      break;
    case "11":
      console.log("du har valgt 11 som er november");
      break;
    case "12":
      console.log("du har valgt 12 som er december");
      break;
    default:
      console.log("Der er kun 12 måneder din fucking idiot");
      break;
  }
});

/* din view function her */

// opgave 5
myAnsverInput = document.getElementById("InputFive");
myAnsverButton = document.getElementById("answerButtonFive");

myAnsverFeedbackElement = document.getElementById("answerFeedbackFive");

myAnsverButton.addEventListener("click", (event) => {
  event.preventDefault();

  console.warn("opgave 5");

  workDays(myAnsverInput.value);
});

/* din kode her.*/

/* din view function her */
