describe('Name entered and Language selected', function () {

    it('should greet name entered  in the selected language which is English', function () {
        var nameEntered = greetFactory();
        assert.deepEqual(nameEntered.greetNameEntered('Victor', 'English'), 'Hello, Victor');

    });
    it('should greet name entered  in the selected language which is Isixhosa', function () {
        var nameEntered = greetFactory();
        assert.deepEqual(nameEntered.greetNameEntered('Sibusiso', 'IsiXhosa'), 'Molo, Sibusiso');

    });


    it('should greet name entered  in the selected language which is Afrikaans', function () {
        var nameEntered = greetFactory();
        assert.deepEqual(nameEntered.greetNameEntered('Sesethu', 'Afrikaans'), 'Hallo, Sesethu');

    });

    it('should keep track of one name entered', function () {
        var nameEntered = greetFactory();
        nameEntered.greetNameEntered("Victor", "English");
        assert.deepEqual(["victor"], nameEntered.getNames());

    });

    it('should keep track of two names entered', function () {
        var nameEntered = greetFactory();
        nameEntered.greetNameEntered("Victor", "English");
        nameEntered.greetNameEntered("Sbu", "Isixhosa");
        assert.deepEqual(["victor", "sbu"], nameEntered.getNames());

    });

    it('should not greet if name is blank', function () {
        var nameEntered = greetFactory();
        nameEntered.greetNameEntered();
        assert.deepEqual([], nameEntered.getNames());
        assert.deepEqual(0, nameEntered.getCounter());
    });

    it('should not keep track of names with numbers entered', function () {
        var nameEntered = greetFactory();
        nameEntered.greetNameEntered("Victor123");
        assert.deepEqual([], nameEntered.getNames());

    });

    it('should be able to count name(s) entered', function () {
        var nameEntered = greetFactory();
        nameEntered.greetNameEntered("victor", "English");
        nameEntered.greetNameEntered("sibusiso", "English");
        nameEntered.greetNameEntered("sesethu", "Isixhosa");
        nameEntered.greetNameEntered("victor","English");
        nameEntered.getNames();
        assert.deepEqual(3, nameEntered.getCounter());

    });



});