const fetch = require("node-fetch");
require("dotenv").config();

const aopd = async (req, res) => {
  try {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_SECRET_KEY}&count=5`,
      { method: "GET" }
    );
    let data = await response.json();
    res.status(200).json({
      message: "Retrived Sucessfully",
      data: data
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Error in Retiving");
  }
};
module.exports = aopd;
