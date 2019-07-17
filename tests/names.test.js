describe('Names Entered', function(){

    var names = greetFactory();

    names.greetedPeople(Victor);
    names.greeted();
    it('should keep track of one name entered', function(){
        assert.deepEqual(Victor,names.greeted());

});
});