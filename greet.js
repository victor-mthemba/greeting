var nameInput = document.querySelector(".inputName");
var greetBtn = document.querySelector(".greetBtn");
var radioType = document.querySelectorAll(".languageType");
var output = document.querySelector(".greet-message")
var counter = document.querySelector(".counterOutPut");
var resetbutton = document.querySelector(".resetBtn")
//creating an instance
var instance = greetFactory();


if (localStorage['Name'] !== undefined) {
    var keepNames = JSON.parse(localStorage['Name']);
} else {
    keepNames = [];
}
var instance = greetFactory(keepNames);

function greet() {

    for (let i = 0; i < radioType.length; i++) {
        if (radioType[i].checked) {
            var theLanguage = radioType[i].value;
        }
    }


    var theGreet = instance.greetNameEntered(nameInput.value, theLanguage);
    output.innerHTML = theGreet;
    counter.innerHTML = instance.getCounter();
    localStorage['Name'] = JSON.stringify(instance.getNames());
    nameInput.value = "";
}
greetBtn.addEventListener('click', greet);

resetbutton.addEventListener('click', function () {
    localStorage.clear();
    instance.clear();
    counter.innerHTML = instance.getCounter();
});

window.onload = function () {
    counter.innerHTML = instance.getCounter();
};