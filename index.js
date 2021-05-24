const http = require("http");
const PORT = process.env.PORT || 5000
const urlModule = require("url");
const ejs = require("ejs");
const fs = require("fs")
const router = require("./router.js")
const express = require("express");
const formidable = require("express-formidable");

const app = express();

app.use(formidable())

app.use(router) 


app.listen(PORT)