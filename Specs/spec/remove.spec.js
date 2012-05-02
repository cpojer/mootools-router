describe('crossroads.toString() and route.toString()', function(){

    beforeEach(function(){
        crossroads.removeAll();
    });



    describe('crossroads.remove()', function(){

        it('should remove by reference', function(){
            var t1, t2, t3, t4;

            var a = crossroads.add('/{foo}_{bar}');
            a.addEvent('match', function(foo, bar){
                t1 = foo;
                t2 = bar;
            });
            crossroads.parse('/lorem_ipsum');
            crossroads.remove(a);
            crossroads.parse('/foo_bar');

            expect( t1 ).toBe( 'lorem' );
            expect( t2 ).toBe( 'ipsum' );
        });

    });



    describe('crossroads.removeAll()', function(){

        it('should removeAll', function(){
            var t1, t2, t3, t4;

            var a = crossroads.add('/{foo}/{bar}');
            a.addEvent('match', function(foo, bar){
                t1 = foo;
                t2 = bar;
            });

            var b = crossroads.add('/{foo}_{bar}');
            b.addEvent('match', function(foo, bar){
                t1 = foo;
                t2 = bar;
            });

            crossroads.removeAll();

            crossroads.parse('/lorem/ipsum');
            crossroads.parse('/foo_bar');

            expect( t1 ).toBeUndefined();
            expect( t2 ).toBeUndefined();
            expect( t3 ).toBeUndefined();
            expect( t4 ).toBeUndefined();
        });

    });


});
