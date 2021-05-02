const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  year: {
    type: Date,
    required: true
  },
  SE_Practice: {
    type: String,
    required: true
  },
  Claim: {
    type: String,
    required: true
  },
  Strength_of_Evidence: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model('articles', ArticleSchema)