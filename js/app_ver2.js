//define all constant variables that are needed for future functions 
const submitButton = document.querySelector(".js-submit-button");
const audioPlayer = document.querySelector("#speakers");

//these variables will change depending on their signs 
let sign =""; 
let audio = ""; 

function displayAll(){
   getAssets(sign); 
   audio.play(); 
}

//date input -> results 
submitButton.addEventListener("click", function (event) {
  // This will prevent the default behavior
  event.preventDefault();
  const divElement = document.querySelector("[data-content-area]");
  const dateInput = document.querySelector(".js-date-input");
  let birthDate = new Date(dateInput.value);
  let month = birthDate.getMonth() + 1;
  let day = birthDate.getDate() + 1;
 
 /* 
  const s_aries = new Audio('audio/ariesAudio.mp3');
  const s_taurus = new Audio('audio/taurusAudio.wav');
  const s_gemini = new Audio('audio/geminiAudio.mp3');
  const s_cancer = new Audio('audio/cancerAudio.mp3');
  const s_leo = new Audio('audio/leoAudio.mp3');
  const s_virgo = new Audio('audio/virgoAudio.wav');
  const s_libra = new Audio('audio/libraAudio.mp3');
  const s_scorpio = new Audio('audio/scorpioAudio.wav');
  const s_saggit = new Audio('audio/saggitAudio.wav');
  const s_capri = new Audio('audio/capriAudio.mp3');
  const s_aqua = new Audio('audio/aquaAudio.mp3');
  const s_pisces = new Audio('audio/piscesAudio.wav');*/

   if ((month == 3) && (day > 20) || (month == 4) && (day < 20)) {
       sign = "Aries"; 
    }
    else if ((month == 4) && (day > 19) || (month == 5) && (day < 21)) {
       sign = "Taurus";
    }
    else if ((month == 5) && (day > 20) || (month == 6) && (day < 22)) {
      sign = "Gemini";
   }
   else if ((month == 6) && (day > 20) || (month == 6) && (day < 22)) {
      sign = "Cancer";
   }
   else if ((month == 7) && (day > 22) || (month == 8) && (day < 23)) {
      sign = "Leo"; 
   }
   else if ((month == 8) && (day > 22) || (month == 9) && (day < 23)) {
      sign = "Virgo";
   }
   else if ((month == 9) && (day > 22) || (month == 10) && (day < 24)) {
      sign = "Libra"; 
   }
   else if ((month == 10) && (day > 23) || (month == 11) && (day < 22)) {
      sign = "Scorpio";
   }
   else if ((month == 11) && (day > 21) || (month == 12) && (day < 22)) {
      sign = "Sagittarius";
   }
   else if ((month == 12) && (day > 21) || (month == 1) && (day < 20)) {
      sign = "Capricorn";
   }
   else if ((month == 1) && (day > 19) || (month == 2) && (day < 19)) {
      sign = "Aquarius"; 
   }
   else if ((month == 2) && (day > 18) || (month == 3) && (day < 21)) {
      sign = "Pisces";
   }
   displayAll();
       });

   function getAssets (sign){
      if (sign == "Aries"){
         window.location.href="html/aries.html";
         console.log(sign)
         audio = new Audio('../audio/ariesAudio.mp3');

      } else if (sign == "Taurus"){
         window.location.href="html/taurus.html";
         console.log(sign)
         audio = new Audio('audio/taurusAudio.wav');
      
      } else if (sign == "Gemini"){
         window.location.href="html/gemini.html";
         console.log(sign)
         audio = new Audio('../audio/geminiAudio.mp3');
      }
      else if (sign == "Cancer"){
         window.location.href="html/cancer.html";
         console.log(sign)
         audio = new Audio('audio/cancerAudio.mp3');
      }
      else if (sign == "Leo"){
         window.location.href="html/leo.html";
         console.log(sign)
         audio = new Audio('audio/leoAudio.mp3');
      }
      else if (sign == "Virgo"){
         window.location.href="html/virgo.html";
         console.log(sign)
         audio = new Audio('audio/virgoAudio.wav');
      }
      else if (sign == "Libra"){
         window.location.href="html/libra.html";
         console.log(sign)
         audio = new Audio('audio/libraAudio.mp3');
      }
      else if (sign == "Scorpio"){
         window.location.href="html/scorpio.html";
         console.log(sign)
         audio = new Audio('audio/scorpioAudio.wav');
      }
      else if (sign == "Sagittarius"){
         window.location.href="html/saggit.html";
         console.log(sign)
         audio = new Audio('audio/saggitAudio.wav');
      }
      else if (sign == "Capricorn"){
         window.location.href="html/capri.html";
         console.log(sign)
         audio = new Audio('audio/capriAudio.mp3');
      }
      else if (sign == "Aquarius"){
         window.location.href="html/aqua.html";
         console.log(sign)
         audio = new Audio('audio/aquaAudio.mp3');
      }
      else if (sign == "Pisces"){
         window.location.href="html/pisces.html";
         console.log(sign)
         audio = new Audio('audio/piscesAudio.wav');
      }
   }

