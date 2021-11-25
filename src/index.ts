import cors from "cors";
import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) {
  console.log("Error to get ports");
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}`);
});

app.get("/", (req, res) =>
  res.send("bienvenido a la aplicación que se conecta con mongoDB")
);