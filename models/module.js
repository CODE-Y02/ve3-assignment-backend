const { Schema, model } = require("mongoose");

const moduleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  data: [
    {
      title: String,
      text: String,
      imageUrl: String,
    },
  ],
});

module.exports = model("Module", moduleSchema);
