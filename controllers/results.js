// Import Packages
//GET controller for website
router.get("/", (req, res) => {
  res.render("results", { resultsKey: results });
});

// Create POST controller

// Export module
module.exports = router;
