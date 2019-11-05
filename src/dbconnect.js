const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "ec2-107-22-236-52.compute-1.amazonaws.com",
  database: "d3b3jdjf18d17t",
  password: "db593e450c888098740786f816bd25ea75d2aef57e9b4c7000f102422f5fb3d6",
  port: 5432
});

module.exports = pool;