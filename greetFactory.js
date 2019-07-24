function greetFactory(list) {

    var names = list;

    function greetNameEntered(username, lang)
    {   

        // before you do anything check the username
        // if it is blank or undefined do nothing
        if(username === "" && lang === undefined)
        {
            return "Please fill out name and  select a language";
        }
        // set error message
        // else clear error message and procee
        // also check language
        if(lang === undefined)
        {
            return "Please select language";
        }
        
        var theName = username.toLowerCase();
        var gotNumber = /\d.*\d.*/.test(theName);
        if(theName){
        if (!names.includes(theName) && !gotNumber)
        {
            names.push(theName);
        }
        if(gotNumber)
        {
            return "No numbers allowed";
        }

        if (lang === "English")
        {
            return "Hello, " + username;
        } 
        else if (lang === "IsiXhosa") 
        {
            return "Molo, " + username;
        } 
        else if (lang === "Afrikaans") 
        {
            return "Hallo, " + username;
        }
    }else{
        return "Please enter name"
    }
}

    function getNames()
    {
        return names;
    }

    function getCounter()
    {
        return names.length;
    }

    function clear () {
        names = [];
    };

    return {
        greetNameEntered,
        getCounter,
        getNames,
        clear
    }
}