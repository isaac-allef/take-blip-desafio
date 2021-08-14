const express = require('express');
require('dotenv').config()

const routes = require('./routes');

const app = express();
const port = 3333;

app.use(routes);
app.use(express.json());

app.listen(process.env.PORT || port, () =>
    console.log(`🤞️ It's running at: http://localhost:${port}`),
);
