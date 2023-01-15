window.onscroll = function () {
  scrolling();
};

let myHeader = document.getElementById("topBar");
let mybutton = document.getElementById("topButton");
let scroll = myHeader.offsetTop;

function scrolling() {
  if (window.scrollY >= scroll + 350) {
    myHeader.style.backgroundColor = "white";
    mybutton.style.backgroundColor = "#1a8917";
  } else {
    myHeader.style.backgroundColor = "#ffc017";
    mybutton.style.backgroundColor = "black";
  }
}

let divG = document.querySelectorAll("#fatherG > g");
let arrayG = Array.from(divG);
function mModifier() {
  let indexM1 = Math.floor(Math.random() * 560);
  let indexM2 = Math.floor(Math.random() * 560);

  if (arrayG[indexM1].style.opacity == "0") {
    arrayG[indexM1].style.opacity = "1";
  } else {
    arrayG[indexM1].style.opacity = "0";
  }

  if (arrayG[indexM2].style.opacity == "0") {
    arrayG[indexM2].style.opacity = "1";
  } else {
    arrayG[indexM2].style.opacity = "0";
  }
}

setInterval(mModifier, 100);
mModifier();
