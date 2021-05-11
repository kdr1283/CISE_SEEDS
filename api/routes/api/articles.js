const express = require("express")
const router = express.Router()

const Article = require("../../models/Article")

router.get("/", (req, res) => {
    Article.find()
      .then(books => res.json(books))
      .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }))
  })

  module.exports = router;