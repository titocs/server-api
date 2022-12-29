const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = equire('cors');

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./routes/routes');
routes(app);

app.listen(port, () => {
	console.log(`Server started on port`);
});
