// Import Packages
const express = require("express");
const router = express.Router();

//GET controller for website
router.post("/", (req, res) => {
  res.render("results", { resultsKey: results });
  console.log(req.body);
});

// Data Array of information
let results = [
  {
    title: "JavaScript Tutorial - W3Schools ONE",
    description:
      "Well organized and easy to understand Web bulding tutorial with lots of examples of how to use HTML, CSS, JS, SQL, PHP, Phython, Bootstrap, Java",
    url: "https://www.w3schools.com/js/",
    links: [
      {
        title: "JavaScript Introduction",
        url: "https://www.emol.com",
      },
      {
        title: "JS Function",
        url: "www.emol.com",
      },
      {
        title: "JavaScript Examples",
        url: "www.emol.com",
      },
    ],
  },
  {
    title: "JavaScript Tutorial - W3Schools TWO",
    description:
      "Well organized and easy to understand Web bulding tutorial with lots of examples of how to use HTML, CSS, JS, SQL, PHP, Phython, Bootstrap, Java",
    url: "https://www.w3schools.com/js/",
    links: [
      {
        title: "JavaScript Introduction",
        url: "www.emol.com",
      },
      {
        title: "JS Function",
        url: "www.emol.com",
      },
      {
        title: "JavaScript Examples",
        url: "www.emol.com",
      },
    ],
  },
  {
    title: "JavaScript Tutorial - W3Schools THREE",
    description:
      "Well organized and easy to understand Web bulding tutorial with lots of examples of how to use HTML, CSS, JS, SQL, PHP, Phython, Bootstrap, Java",
    url: "https://www.w3schools.com/js/",
    links: [
      {
        title: "JavaScript Introduction",
        url: "www.emol.com",
      },
      {
        title: "JS Function",
        url: "www.emol.com",
      },
      {
        title: "JavaScript Examples",
        url: "www.emol.com",
      },
    ],
  },
];

// Create POST controller

// Export module
module.exports = router;
