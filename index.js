//HANDLING DIFFERENT TYPES OF REQUEST
//POSTMAN TOOL
const express = require("express");

const server = express();

//REQUEST HANDLING METHODS
const handleAllTypesOfRequests = (req, res) => {
  res.send("Response from server.use");
};

//ROUTES
const handleProfilePutRequestType = (req, res) => {
  res.send("Responded to profile request with method of put");
};

const handleSignupRequestType = (req, res) => {
  res.send("Responded to signup request with method of delete");
};

const handleWelcomeRequestType = (req, res) => {
  res.send("Responded to welcome with method of patch");
};
server.post("/profile", handleAllTypesOfRequests);
server.get("/login", (req, res) => {
  res.send("Hello this is the login page");
});
server.put("/profile", handleProfilePutRequestType);
server.delete("/signup", handleSignupRequestType);
server.patch("/welcome", handleWelcomeRequestType);
server.listen(3000, () => {
  console.log("server is ready");
});
