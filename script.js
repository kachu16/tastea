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
   setTimeout(auto,3000);
}
