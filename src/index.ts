import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";

const app = express();
app.use(bodyParser.json());
configDotenv();
connectMongoDb();
const port = process.env.PORT;

app.use("/food-category", categoryRoute);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
