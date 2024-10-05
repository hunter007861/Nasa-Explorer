const fetch = require("node-fetch");
require("dotenv").config();

const epicImage = async (req, res) => {
  try {
    console.log(req.query.name)
    const response = await fetch(
      `https://api.nasa.gov/EPIC/archive/natural/${req.query.name}?api_key=${process.env.API_SECRET_KEY}`, //http://localhost:5000/epic/image?name=2024/10/04/png/epic_1b_20241004002713.png
      { method: "GET" }
    );
    response.body.pipe(res);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Error in Retiving");
  }
};
module.exports = epicImage;
