import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ordersRouter from "./routes/orders.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", ordersRouter);

// Connect MongoDB
mongoose.connect("mongodb+srv://hakimaitabderrahim18_db_user:ihmYnjN5whQFjdGc@cluster0.swz3my0.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
