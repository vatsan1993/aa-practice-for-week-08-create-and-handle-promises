function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function workout() {
  // Your code here
  let stretchPromise = stretch();
  stretchPromise
    .then(() => {
      console.log('done stretching');
    })
    .then(runOnTreadmill)
    .then(() => {
      console.log('done running on treadmill');
    })
    .then(liftWeights)
    .then(() => {
      console.log('done lifting weights');
    })
    .then(() => {
      console.log('done working out');
    });
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
