var index = 0;
var i=0;
var slider = document.getElementsByClassName("slider");

auto();

function show(n){
   for (i = 0; i < slider.length; i++) {//slider.length = 3
       slider[i].style.display = "none";        
   } 
   slider[n-1].style.display=("flex");
} 

function auto(){
   index++;
   if(index>slider.length){//to move from last slide to first slide
       index=1;
   }
   show(index);
   setTimeout(auto,1000);
}


const submit_button = document.getElementById("submit-btn");
const rest_button = document.getElementById("reset-btn");

submit_button.addEventListener("click", displayTea);
rest_button.addEventListener('click',remove_help);

function displayTea() {
  const checkbox = document.getElementsByClassName("form-check-input");
  const checkedArr = [];
  let j = 0;
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      checkedArr[j] = checkbox[i].value;
      j++;
    }
  }
  const tea = document.getElementsByClassName("tea");

  const help_div = document.getElementById("help-div");

  if (checkedArr.length !==0 && document.getElementById("help_heading")===null) {
    const heading = document.createElement("h3");
    heading.style.fontWeight = "bold";
    heading.style.color = "#9f476a";
    heading.innerText = "Suggested Teas for you";
    heading.setAttribute("class", "my-5 text-center");
    heading.setAttribute("id", "help_heading");
    help_div.appendChild(heading);
  }

  let count=0;
  for (let k = 0; k < tea.length; k++) {
    const ele = tea[k];
    let teaClasses = ele.className.split(/\s+/).filter((ele) => ele !== "");
    for (let i = 0; i < checkedArr.length; i++) {
      const cl = checkedArr[i];
      for (let j = 0; j < teaClasses.length; j++) {
        if (cl === teaClasses[j]) {
          ele.className = ele.className.replace("d-none", "");
          count = count + 1;
          if (count==4) {
            return;
          }
        }
      }
    }
  }
}

function remove_help() {
  window.location.reload();
}
