const data = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(data));

  app.post("/api/notes", (req, res) => {
    notes.push(req.body);
    fs.writeFile("db/db.json", JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      } else {
        return true;
      }
    });

    res.json(data);
  });

  app.delete("/api/notes:id", (req, res) => {
    let result = data.filter(item => item.id !== req.params.id);
    fs.writeFile("db/db.json", JSON.stringify(result), (err) => {
      if (err) {
        throw err;
      } else {
        return true;
      }
    });
    res.json(result)
  });
};
