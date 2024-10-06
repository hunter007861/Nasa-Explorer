const fetch = require("node-fetch");
require("dotenv").config();

const neoWs = async (req, res) => {
  try {
    let response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.start_date}&end_date=${req.query.end_date}&api_key=${process.env.API_SECRET_KEY}`,
      { method: "GET" }
    );
    let data = await response.json();
    res.status(200).json({
      message: "Retrived Sucessfully",
      data: data,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Error in Retiving");
  }
};
module.exports = neoWs;
