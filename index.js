const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const port = process.env.PORT || 3030;
const app = express();
app.use(express.json())
app.use(cors())

// Blog routes
const blogRoutes = require("./src/routes/blog.route");
app.use("/blogs", blogRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URI);
  app.get("/", (req, res) => {
    res.send("Meta Blog Server Is Running......");
  });
}

main()
  .then(() => console.log(`server is connected with mongoose successfully`))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
