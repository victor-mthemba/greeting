function greetFactory(nameList) {


    var namesGreeted = nameList || {};
    //    var counter = 0



    function greetNameEntered(Username, lang) {
    var str = Username.toUpperCase();
        if (namesGreeted[str] === undefined) {
            namesGreeted[str] = 0;
        }

             else {
                 namesGreeted[str] = Username;
             }

         if (lang === "English") {
                return "Hello, " + Username;
        }
        else if (lang === "IsiXhosa") {
            return "Molo, " + Username;
        }
        else if (lang === "Afrikaans") {
            return "Hallo, " + Username;
        }
    }

    function greeted() {
        return namesGreeted;
    }

    function counter() {
        var c = Object.keys(namesGreeted).length
        return c;
    }
    console.log(namesGreeted);
    return {
        greetNameEntered,
        greetedPeople,
        greeted,
        counter
    }
}