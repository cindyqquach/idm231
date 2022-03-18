const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", function (event) {
  // This will prevent the default behavior
  event.preventDefault();
  const divElement = document.querySelector("[data-content-area]");
  const dateInput = document.querySelector(".js-date-input");
  let birthDate = new Date(dateInput.value);
  let month = birthDate.getMonth() + 1;
  let day = birthDate.getDate() + 1;

    if ((month == 3) && (day > 20) || (month == 4) && (day < 20)) {
       window.location.href="html/aries.html";
    }
    else if ((month == 4) && (day > 19) || (month == 5) && (day < 21)) {
        window.location.href="html/taurus.html";
    }
    else if ((month == 5) && (day > 20) || (month == 6) && (day < 22)) {
      window.location.href="html/gemini.html";
   }
   else if ((month == 6) && (day > 20) || (month == 6) && (day < 22)) {
      window.location.href="html/cancer.html";
   }
   else if ((month == 7) && (day > 22) || (month == 8) && (day < 23)) {
      window.location.href="html/leo.html";
   }
   else if ((month == 8) && (day > 22) || (month == 9) && (day < 23)) {
      window.location.href="html/virgo.html";
   }
   else if ((month == 9) && (day > 22) || (month == 10) && (day < 24)) {
      window.location.href="html/libra.html";
   }
   else if ((month == 10) && (day > 23) || (month == 11) && (day < 22)) {
      window.location.href="html/scorpio.html";
   }
   else if ((month == 11) && (day > 21) || (month == 12) && (day < 22)) {
      window.location.href="html/saggit.html";
   }
   else if ((month == 12) && (day > 21) || (month == 1) && (day < 20)) {
      window.location.href="html/capri.html";
   }
   else if ((month == 1) && (day > 19) || (month == 2) && (day < 19)) {
      window.location.href="html/aqua.html";
   }
   else if ((month == 2) && (day > 18) || (month == 3) && (day < 21)) {
      window.location.href="html/pisces.html";
   }
       });