const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const adminRouter = require("./config/adminRouter");
const connectDB = require("./config/db");

const app = express();

// Loed enviromental variables
dotenv.config({ path: "./config/config.env" });
// Connect to database
connectDB();

app.use(adminRouter.adminBro.options.rootPath, adminRouter.router);
app.use(session({
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
});
