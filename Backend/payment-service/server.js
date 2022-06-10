//! 1) connect to database and run app

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 3004;

console.log("DB is connected");
const server = app.listen(port, () => {
  console.log("APP is running");
});
