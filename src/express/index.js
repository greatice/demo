require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const { connectToDB } = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3001;
const morganLog =
  process.env.NODE_ENV === "production" ? morgan("common") : morgan("dev");

app.use(helmet());
app.use(morganLog);
app.use(cors());
app.use(express.json());

app.use("/api", routes);

connectToDB()
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(e => {
    console.log('DB connection failed');
    console.error(e.message);
    process.exit(1);
  });
