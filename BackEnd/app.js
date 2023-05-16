require("dotenv").config();
const express = require('express');
const cors = require('cors');

const postsRouter = require('./router/blogs');

const app = express();
const PORT = 5000;

// USE's --------------------------------------------------
app.use(cors());
app.use(express.json())
app.use(postsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
