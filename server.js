const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json({ message: "hola pinche putita",
								});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`PORT ${PORT}`);
});
