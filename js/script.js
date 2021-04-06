
function numberGenerator(min, max) {
  let localMin = min;
  let localMax = max - min + 1;
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
} // END OF FUNCTION numberGenerator
// -----------------------------------------------------------------------------

function dayOfTheWeek() {

  let day;
  switch (new Date().getDay()) { // GetDay gives back a number (from 1 to 7 depending on the day)
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case  6:
    day = "Saturday";

  } // END OF SWITCH

  // WEEKEND CHECK
  if ( day == "Friday" || day == "Saturday" || day == "Sunday") {
    document.getElementById("lallero").innerHTML = "Select how many days are left to the next weekend";
  } else {
    document.getElementById("lallero").innerHTML = "Select how many days are left to the weekend";
  }

  // THIS MAKES THE DAY OF THE WEEK APPEAR
  document.getElementById("lol").innerHTML = "Today is " + day;



} // END OF FUNCTION dayOfTheWeek

// -----------------------------------------------------------------------------

// Modificare il codice appena condiviso per stampare all'interno dell'h1 il contatore di click fatti dall'utente sul bottone

function initVue() {

  new Vue({

    el: "#containerId",
    data: {
      "h1title": 0
    }, // END OF DATA

    methods: {
      increase: function() {
        this.h1title++;
      }, // END OF INCREASE

      decrease: function() {
      this.h1title--;
      } // END OF DECREASE

    } // END OF METHODS

  }); // END OF VUE

} // END OF FUNCTION initVue
// -----------------------------------------------------------------------------

// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img


// -----------------------------------------------------------------------------

function init() {
  dayOfTheWeek();
  initVue();
} // END OF FUNCTION init

$(init);

// -----------------------------------------------------------------------------
