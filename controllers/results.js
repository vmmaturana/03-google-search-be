// Import Packages
const express = require("express");
const router = express.Router();
const Results = require("../models/results");

//GET controller for website
router.post("/", async (req, res) => {
  let searchValue = req.body.search; // GUARDAMOS EL INPUT DEL USUARIO (antes del render)

  let datos = await Results.find({});

  let resultsList = await filterResults(datos, searchValue);

  res.render("results", { resultsList }); //
});

// FUNCION DE FILTRAR
const filterResults = (arr, search) => {
  return arr.filter((result) => result.title.includes(search));
};

// Export module
module.exports = router;
