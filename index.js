const express = require('express');
const cors = require('cors');
const db = require('./db/dbConfig');
const routes = require('./routes/routes');
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', routes);
// app.get("/", (req, res) => {
//   res.send(`Server Running on port:${port} `);
// });

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
