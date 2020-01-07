// Solve the questions bellow:

// 1. Create a promise that resolve in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) =>
  setTimeout(resolve, 4000, "Success")
);

// 2. Run the above promise and make it console.log "success"
promise.then(result => console.log(result));

// 3. Read about Promise.resolve() and Promise.reject(). How can you make the above
//    promise shorter with Promise.resolve() and console loggin "success"
const promise_short = Promise.resolve(
  setTimeout(() => {
    console.log("Success");
  }, 4000)
);

// 4. Cath this error and console log "Ooops something went wrong"
Promise.reject("failed").catch("Ooops something went wrong");

// 5. Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
//    Console.log the output and make sure it has a catch block as well

const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(urls.map(url => fetch(url).then(result => result.json())))
  .then(result => {
    for (const item of result) {
      console.log(item);
    }
  })
  .catch("There was an error with the request or response");

// 6. Change one of your urls above to make it incorrect and fail the promise
