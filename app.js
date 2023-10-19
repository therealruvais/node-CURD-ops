const express = require("express");
const authorize = require("./auth");

const login = require("./Routes/login");
const peopleRoute = require("./Routes/peopler");

const app = express();
app.use(express.json());

app.use(authorize);

app.use("/api/people", peopleRoute);
app.use("/login", login);

app.listen(3000, () => {
  console.log("server is @ 3000....");
});
