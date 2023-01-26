const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
// for using env
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());
//id--Looki
//pass--uk6gaNbEr4VKXvI8

const uri =
  "mongodb+srv://<username>:<password>@cluster0.tdieq2y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Lokki Server Is Running");
});
app.listen(port, () => console.log(`Looki Server Running on: ${port}`));
