const http = require("http");

// Server
const server = http.createServer((request, response) => {
  // console.log("Headers Request:", request.headers);
  console.log("Methods Request:", request.method);
  console.log("ULR Request", request.url);

  const user = {
    first_name: "Miguel",
    last_name: "Osuna"
  };

  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
});

// Listen to "localhost:3000"
server.listen(3000);
