const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String
  },

  email: {
    type: String
  },
  mobile: {
    type: Number
  }
});
module.exports = mongoose.model("User", schema);
