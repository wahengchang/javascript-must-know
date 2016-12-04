//from
//https://gist.github.com/liaodrake/c91e6108cb7df48ba506

var middleware = require('middleware'), // the Middleware you want to test
    httpMocks = require('node-mocks-http'), // quickly sets up REQUEST and RESPONSE to be passed into Express Middleware
    request = {}, // define REQUEST
    response = {} // define RESPONSE
;

describe('Middleware test', function(){
    context('Valid arguments are passed', function() {
        beforeEach(function(done) {
            /* 
             * before each test, reset the REQUEST and RESPONSE variables 
             * to be send into the middle ware
            **/
            request = httpMocks.createRequest({
                method: 'GET',
                url: '/test/path?myid=312',
                query: {
                    myid: '312'
                }
            });
            response = httpMocks.createResponse();
            
            done(); // call done so that the next test can run
        });
        
        it('does something', function(done) {
            /*
             * Middleware expects to be passed 3 arguments: request, response, and next.
             * We are going to be manually passing REQUEST and RESPONSE into the middleware
             * and create an function callback for next in which we run our tests
            **/
            middleware(request, response, function next(error) {
                /*
                 * Usually, we do not pass anything into next except for errors, so because
                 * in this test we are passing valid data in REQUEST we should not get an 
                 * error to be passed in.
                **/
                if (error) { throw new Error('Expected not to receive an error'); }
                
                // Other Tests Against request and response
                if (!request.didSomething) { throw new Error('Expected something to be done'); }
                
                done(); // call done so we can run the next test
            }); // close middleware
        }); // close it
    }); // close context
}); // close describe
Raw
 middleware.js
/*
 * Simple Middleware to set a variable in request.
**/
module.exports = function(request, response, next) {
    /*
     * Do something to REQUEST or RESPONSE
    **/
    
    if (!request.didSomething) {
        request.didSomething = true;
        next();
    } else {
        // Something went wrong, throw and error
        var error = new Error();
        error.message = 'Error doing what this does'
        next(error);        
    }
};