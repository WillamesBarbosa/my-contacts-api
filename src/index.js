const express = require('express');

const routes = require('./routes');

const initialTextWhenConnect = `
----------------------------------------------
|                                            |
|             SERVER STARTED                 |
|                                            |
| Server is running at http://localhost:3000 |
|                                            |
----------------------------------------------
`;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log(initialTextWhenConnect);
});
