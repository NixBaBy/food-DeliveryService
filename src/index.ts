import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food.route";

const app = express();
app.use(cors());
app.use(bodyParser.json());
configDotenv();
connectMongoDb();
const port = process.env.PORT;

app.use("/food-category", categoryRoute);
app.use("/foods", foodRoute);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
