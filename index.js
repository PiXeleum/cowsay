import maBio from "./Information.js";
import cowsay from "cowsay";

console.log(
  cowsay.say({
    text: `Hello ${maBio.name} du campus ${maBio.campus}`,
    e: "oO",
    T: "U ",
  })
);
