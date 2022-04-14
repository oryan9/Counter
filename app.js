
let count = 0

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
   btn.addEventListener("click",function(e){
       const sytles = e.currentTarget.classList;

       if(sytles.contains("decrease")){
           count--
       }
       else if (sytles.contains("increase")){
           count++;
       }
       else{
           count = 0;
       }
  

    if(count < 0){
        value.style.color = 'green'
    }

 
 
       value.textContent = count

   });

});



