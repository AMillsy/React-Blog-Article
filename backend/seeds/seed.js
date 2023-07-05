const sequelize = require("../config/connection");
const { Blog } = require("../models");
const data = require("./blogSeedData.json");
async function seedData() {
  await sequelize.sync({ force: true });

  const blogData = await Blog.bulkCreate(data);

  console.log(blogData);
}

seedData();
