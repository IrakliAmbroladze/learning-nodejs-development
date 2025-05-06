import request from "request";
import dotenv from "dotenv";
dotenv.config();

const address = "1301 lombard street philadelphia";

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${process.env.API_KEY}`,
    json: true,
  },
  (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
);
