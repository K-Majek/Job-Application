const path = require("path");
const port = parseInt(process.env.PORT, 10) || 80;
const express = require('express');
const bodyParser = require("body-parser");
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const router = require("./router");

require("dotenv").config({ path: path.join(__dirname, "..", "config", ".env")});

app.prepare().then(() => {
  const server = express();

  //basic configuration
  server.use(express.static('../public'));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  //controller routes
  server.use("/", router);

  //view routes
  server.all('*', (req, res) => {
    return handle(req, res)
  });

  //listener
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});