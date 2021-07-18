//import json file, where file is being stored.
let data = require("../db/db.json");
//To create an instance of Express router, we invoke the “.Router()” method 
let router = require('express').Router();
//import fs module to write data.
const fs = require("fs");
//uniqid creates unique id's based on the current time, process and machine name.
const unid = require('uniqid');

  //notes page route
  router.get("/notes", (req, res) => res.json(data));

  //posting notes data
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

  //delete data
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