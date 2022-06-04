const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`marketplace service is running on port ${port}`);
});