import "reflect-metadata";
import 'dotenv/config';
import AppDataSource from "./database/dataSource";
import express from "express";

const PORT = process.env.TYPEORM_PORT;

const app = express();

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port: " + PORT + ".")
    console.log(process.env.DATABASE_CONNECTION)});
})
