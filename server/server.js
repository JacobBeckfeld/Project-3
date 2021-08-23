const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const mongoose = require("mongoose");

const config = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/d3", config);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(` Now listening on localhost:${PORT}`));
});