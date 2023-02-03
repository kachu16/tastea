const submit_button = document.getElementById("submit-btn");
const rest_button = document.getElementById("reset-btn");

submit_button.addEventListener("click", displayTea);
rest_button.addEventListener("click", remove_help);

let j = 0;
let checkedArr = [];

function checklist(para) {
  document.getElementById(para).checked = true;
  checkedArr[j] = para;
  j++;
}

function showTea(tea){
  let count = 0;
  for (let k = 0; k < tea.length; k++) {
    const ele = tea[k];
    let teaClasses = ele.className.split(/\s+/).filter((ele) => ele !== "");
    teaClasses = teaClasses.splice(5);
    for (let i = 0; i < checkedArr.length; i++) {
      const cl = checkedArr[i];
      for (let j = 0; j < teaClasses.length; j++) {
        if (cl === teaClasses[j]) {
          ele.style.display = "block";
          count = count + 1;
          if (count == 4) {
            return;
          }
        }
      }
    }
  }
}


function displayTea() {
  const tea = document.getElementsByClassName("tea");
  for (let a = 0; a < tea.length; a++) {
    tea[a].style.display = "none";
  }

  const suggested_tea = document.getElementById("suggested_tea");

  if (
    checkedArr.length !== 0 &&
    document.getElementById("help_heading") === null
  ) {
    const heading = document.createElement("h3");
    heading.style.fontWeight = "bold";
    heading.style.color = "#9f476a";
    heading.innerText = "Suggested Teas for you";
    heading.setAttribute("class", "my-5 text-center");
    heading.setAttribute("id", "help_heading");
    suggested_tea.prepend(heading);
  }

  showTea(tea);

  checkedArr.forEach(ele => {
    document.getElementById(ele).checked = false;
  });
  
  checkedArr = [];
  j=0;
}

function remove_help() {
  window.location.reload();
}



// Slider Code

var index = 0;
var i = 0;
var slider = document.getElementsByClassName("slider");

auto();

function show(n) {
  for (i = 0; i < slider.length; i++) {
    //slider.length = 3
    slider[i].style.display = "none";
  }
  slider[n - 1].style.display = "flex";
}

function auto() {
  index++;
  if (index > slider.length) {
    //to move from last slide to first slide
    index = 1;
  }
  show(index);
  setTimeout(auto, 4000);
}


