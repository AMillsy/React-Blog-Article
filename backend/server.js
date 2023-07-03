const express = require("express");
const sequelize = require("./config/connection");
const router = require("./routes");
const models = require(`./models`);
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`API IS OPEN`);
  });
});
