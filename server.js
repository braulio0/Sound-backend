const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const user = require("./app/routes/routes.User.js");
const song = require("./app/routes/routes.Songs.js");

const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

//build database
//
//db.sequelize.sync({ force: true }).then(() => {
	//console.log("Drop and rebuild database");
//});

//conect database
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "hola pinche putita" });
});

app.use("/u", user);
app.use("/s", song);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
