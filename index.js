const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i53p4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("carCloud-db"); // database
    const carsCollection = db.collection("cars"); //cars collection

    // ********************POST****************************

    // Route to store car details with user info in DB
    app.post("/add-car", async (req, res) => {
      const data = req.body;
      const result = await carsCollection.insertOne(data);
      res.send(result);
    });

    // ********************GET*****************************
    // ********************PATCH***************************
    // ********************PUT***************************
    // ********************DELETE***************************

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// default route
app.get("/", async (req, res) => {
  res.send("Server running!!!!");
});

// listen
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
