function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    let timeNeeded = 1000;
    if (timeLeft >= timeNeeded) {
      setTimeout(() => {
        resolve(timeNeeded);
      }, timeNeeded);
    } else {
      reject('you dont have enough time to stretch');
    }
  });
}

function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  let timeNeeded = 500;

  return new Promise((resolve, reject) => {
    if (timeLeft >= timeNeeded) {
      setTimeout(() => {
        resolve(timeNeeded);
      }, timeNeeded);
    } else {
      reject('you dont have enough time to run on treadmill');
    }
  });
}

function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  let timeNeeded = 2000;
  return new Promise((resolve, reject) => {
    if (timeLeft >= timeNeeded) {
      setTimeout(() => {
        resolve(timeNeeded);
      }, timeNeeded);
    } else {
      reject('you dont have enough time to lift weights');
    }
  });
}

function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  let reduceTime = (timeSpent) => {
    totalTime -= timeSpent;
  };
  let stretchPromise = stretch(totalTime);
  stretchPromise
    .then(reduceTime)
    .then(() => {
      console.log('Done Stretch');
    })
    .then(() => runOnTreadmill(totalTime))
    .then(reduceTime)
    .then(() => {
      console.log('Done Threadmill');
    })
    .then(() => liftWeights(totalTime))
    .then(reduceTime)
    .then(() => {
      console.log('Done Weights');
    })
    .then(() => {
      console.log(`Done Workout with ${totalTime / 1000} seconds`);
    })
    .catch((message) => {
      console.log('Error: ' + message);
    });
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

// workout(500);
// should print out the following:
// Error:  you dont have enough time to stretch

// workout(1000);
// should print out the following:
// done stretching
// Error:  you dont have enough time to run on treadmill

// workout(2000);
// should print out the following:
// done stretching
// done running on treadmill
// Error:  you dont have enough time to lift weights

workout(4000);
// should print out the following:
//   done stretching
//   done running on treadmill
//   done lifting weights
//   done working out with 0.5 seconds left
