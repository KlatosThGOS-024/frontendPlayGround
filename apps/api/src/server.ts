import { response } from "express";
import app from "./app";
import databaseConnection from "./db/database";

databaseConnection()
  .then((response: any) => {
    try {
      console.log(response);

      app.listen(3000, () => {
        console.log("heila");
      });
    } catch (error: any) {
      console.log(error.error);
    }
  })
  .catch((error: any) => {
    console.log("Error while connecting to database");
    throw new error();
  });
