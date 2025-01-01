"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./db/database"));
(0, database_1.default)()
    .then((response) => {
    try {
        console.log(response);
        app_1.default.listen(3000, () => {
            console.log("heila");
        });
    }
    catch (error) {
        console.log(error.error);
    }
})
    .catch((error) => {
    console.log("Error while connecting to database");
    throw new error();
});
