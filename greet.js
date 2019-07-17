var nameInput = document.querySelector(".inputName");
var greetBtn = document.querySelector(".greetBtn");
var radioType = document.querySelectorAll(".languageType");
var output = document.querySelector(".greet-message")
 var counter = document.querySelector(".counterOutPut");

 var instance = greetFactory();

 localStorage.getItem("Name");

function greetPerson(name) {
   for (let i = 0; i < radioType.length; i++) {
       if (radioType[i].checked){
            var theLanguage = radioType[i].value;
       };
       
   }
   var namez = instance.greetNameEntered(nameInput.value, theLanguage);
 if (nameInput.value.length != "" && theLanguage != undefined){
   output.innerHTML = namez;
   counterCheck()   
}

 localStorage.setItem("Name",JSON.stringify(instance.greeted()))
 nameInput.value = "";
    // localStorage['Names'] = instance.object();
    // instance.onlyLetters(nameInput.value)
}
greetBtn.addEventListener('click', greetPerson)


function clear()
{
  
}

function counterCheck() {
     instance.greetedPeople();
    counter.innerHTML = instance.counter();
}