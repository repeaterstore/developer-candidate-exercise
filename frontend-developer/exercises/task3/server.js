var express = require("express");
var path = require("path");

var app = express();
app.use(express.json());

app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "task3.html"));
});

app.post("/message", function (req, res) {
  res.setHeader("access-control-allow-origin", "*");
  if (!req.body.name)
    return res.status(400).json({ error: "Name is required" });

  var name = req.body.name.trim();
  if (!name) return res.status(400).json({ error: "Name is required" });

  return res.json({
    message: "Thanks " + name,
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});
