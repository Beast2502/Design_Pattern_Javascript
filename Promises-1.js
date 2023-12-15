console.log("Start");

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 0);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 1000);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share the ${video} video`);
    }, 1000);
  });
}

// One way of Using promises
// importantAction("RoadSide Coder").then((res) => {
//   console.log(res);
//   likeTheVideo('Javascript INterview').then((res)=>{
//     console.log(res);
//     shareTheVideo('Javascript Internal Function').then((res)=>{
//         console.log(res);
//     })
//   })

// }).catch((err)=> console.error(err));


// Promise Chaining 
// importantAction("Promise Main Block").then((res)=>{
//     console.log(res);
//     return likeTheVideo('Promise 1 call');
// }).then((res)=>{
//     console.log(res);
//     return shareTheVideo('Promise 2 call');
// }).then((res)=>{
//     console.log(res);
// }) .catch((err)=> console.log(err))


// Promise Combinators

// Promise.all([
//     importantAction('Promise All 1'),
//     likeTheVideo('Promise All 2'),
//     shareTheVideo('Promise All3')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: Promises failed" , err)
// });


// Output whichever promise is resolve or reject first

// Promise.race([
//     importantAction('Promise All 1'),
//     likeTheVideo('Promise All 2'),
//     shareTheVideo('Promise All3')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: Promises failed" , err)
// });


// Promise All Settled



console.log("End");
