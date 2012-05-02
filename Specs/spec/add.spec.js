describe('crossroads.add()', function(){


    afterEach(function(){
        crossroads.removeAll();
    });


    it('should return a route and attach it to crossroads', function(){

        var s = crossroads.add('/{foo}');

        expect( s ).toBeDefined();

    });

    it('should add listener to matched if provided', function(){

        var s = crossroads.add('/{foo}', function(){
            expect().toBe('shouldnt be called');
        });

        expect( s ).toBeDefined();

    });

    it('should accept RegExp', function(){

        var s = crossroads.add(/^foo\/([a-z]+)$/, function(){
            expect().toBe('shouldnt be called');
        });

        expect( s ).toBeDefined();

    });

    it('should increment num routes', function(){

        var s1 = crossroads.add(/^foo\/([a-z]+)$/, function(){
            expect().toBe('shouldnt be called');
        });

        var s2 = crossroads.add('/{foo}', function(){
            expect().toBe('shouldnt be called');
        });

        expect( s1 ).toBeDefined();
        expect( s2 ).toBeDefined();

    });

});
