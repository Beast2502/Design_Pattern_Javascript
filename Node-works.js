// How nodes works



// node myFile.js

const pendingTimers  =[] ;
const pendingOSTasks = [];
const pendingOperations = [] ;

//New timers , tasks , operations are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    //Check one : Any pending setTimeout , setInterval , setImmediate?
    //Check two : Any pending OS tasks ? (like server listening to port)
    // Check thress : Any pending long runnning operations? (like fs module)

    return pendingOSTasks.length || pendingOperations.length || pendingTimers.length
}


// Entire body executes in one tick
while(shouldContinue()){
    //1->  Node looks at pendingtimers and sees if any functions are ready to be called(setTimeout,setInterval)
    // 2-> Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
    // 3-> Pause execution . Continue when 
        // - a new pendingOSTask is done
        // - a new pendingOperations is done
        // - a timer is about to complete
    // 4 -> Look at pendingTimers. Call any setImmediate
    // 5-> Handle any 'close' events (clean up codes)

}


// exit from the terminal