const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

// express routes
const PresentTenseVerbConjugatorRoutes = require('./present-tense-verb-conjugator/routes');

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.use('/', PresentTenseVerbConjugatorRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
  