// The wait function returns a promise that will resolve after
// the specified number of seconds has passed
const wait = function(seconds) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000 * seconds)
  })
}

/*
Your task is to write a promise chain using the function
above that waits 1 second before writing "I waited 1 second"
to the console, waits 2 more seconds and then writes
"I waited 2 more seconds"
*/

console.log('Go!')

// PLACE YOUR CODE BELOW
let promise1 = wait(1);

promise1.then(function(result) {
  console.log("I waited 1 second");
  createPromise2();
}, function(err) {
  console.log("Promise 1 broken");
});

let promise2;
function createPromise2() {
	promise2 = wait(2);
	promise2.then(
		function(result){ console.log("I waited 2 more seconds"); }, 
		function(err){ console.log("Promise 2 broken"); }
	);
}
// PLACE YOUR CODE ABOVE
/*
You console output should look like the following AND wait the
appropriate number of seconds before writing each line
when run with "node 7_promises.js":

Go!
I waited 1 second
I waited 2 more seconds
*/