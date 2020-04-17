const User = require("../Service/User");

let model = {
  getAll: async function (id) {
    try {
      return await User.findOne({_id: id});
    } catch (error) {
      throw error;
    }
  },
  saveUser: async function (data) {
    try {
      let user = new User(data);
      return await user.save();
    } catch (error) {
      throw error;
    }
  }
};
module.exports = model;
