const express = require("express");
const Router = express.Router();

Router.post("/", () => {
    console.log("working");
});

module.exports = Router;