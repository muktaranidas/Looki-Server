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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tdieq2y.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const looki = client.db("looki").collection("categories");

    // app.get("/categories", async (req, res) => {
    //   const query = {};
    //   const getAllProducts = await productsCollection.find(query).toArray();
    //   const key = "category";
    //   const getOnlyCategoryProducts = [
    //     ...new Map(getAllProducts.map((item) => [item[key], item])).values(),
    //   ];
    //   // console.log(getAllProducts);
    //   res.send(getOnlyCategoryProducts);
    // });

    // get categories
    app.get("/categories", async (req, res) => {
      const query = {};
      const result = await looki.find(query).toArray();
      res.send(result);
    });
    app.get("/new-arrival/:subcategory", async (req, res) => {
      const subcategory = req.params.subcategory;
      const query = { subcategory: subcategory };
      const subCategoryAll = await looki.find(query).toArray();
      res.send(subCategoryAll);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Lokki Server Is Running");
});
app.listen(port, () => console.log(`Looki Server Running on: ${port}`));

// DB_USER = looki;
// DB_PASS = CSgg1w2VxOpHYu48;
