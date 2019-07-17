
describe('Name entered amd Language selected', function(){

    var nameEntered = greetFactory();

    nameEntered.greetNameEnter();

    it('should greet name entered  in the selected language which is English', function(){
        assert.deepEqual(nameEntered.greetNameEnter('Victor', 'English'), 'Hello, Victor');

});
    var nameEntered2 = greetFactory();

    nameEntered2.greetNameEnter();

    it('should greet name entered  in the selected language which is Isixhosa', function(){
        assert.deepEqual(nameEntered.greetNameEnter('Sibusiso', 'IsiXhosa'), 'Molo, Sibusiso');

});

    var nameEntered3 = greetFactory();

    nameEntered3.greetNameEnter();

    it('should greet name entered  in the selected language which is Afrikaans', function(){
        assert.deepEqual(nameEntered.greetNameEnter('Sesethu', 'Afrikaans'), 'Hallo, Sesethu');

});

it('should keep track of one name entered', function(){
    var names = greetFactory();

    names.greetedPeople("Victor");
    assert.deepEqual({name : "Victor"}, names.greeted());

});

it('should be able to count name(s) entered', function(){
    var names2 = greetFactory();

    names2.greetedPeople("Victor");
    names2.greeted();
    assert.deepEqual(1, names2.counter());

});



});
