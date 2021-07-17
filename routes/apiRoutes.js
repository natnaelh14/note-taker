let data = require("../db/db.json");
let router = require('express').Router();
const fs = require("fs");
const unid = require('uniqid');

  router.get("/notes", (req, res) => res.json(data));

  router.post("/notes", (req, res) => {
    console.log("Processing a POST.")
    console.log("Request: " + req);
    let newNote = req.body;
    newNote.id = unid();
    data.push(newNote);
    fs.writeFile("db/db.json", JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      } else {
        return true;
      }
    });

    res.json(data);
  });

  router.delete("/notes/:id", (req, res) => {
    console.log("Processing a DELETE.")
    console.log("Request: " + req);
    let result = data.filter(item => item.id !== req.params.id);
    fs.writeFile("db/db.json", JSON.stringify(result), (err) => {
      if (err) {
        throw err;
      } else {
        return true;
      }
    });
    data = result;
    res.json(data);
  });

  module.exports = router;