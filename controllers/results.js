// Import Packages
const express = require("express");
const router = express.Router();
const Results = require("../models/results");

//GET controller for website
router.post("/", async (req, res) => {
  let searchValue = req.body.search; // GUARDAMOS EL INPUT DEL USUARIO (antes del render)

  let resultsList = await Results.find({});

  res.render("results", { resultsList }); //
});

// IMPORT THE RESULT MODELS AS RESULTS INTO THE RESULTS CONTROLLER

// Data Array of information

// Create POST controller

// Export module
module.exports = router;
