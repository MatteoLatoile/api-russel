
const mongoose = require("mongoose");

const reservationsSchema = mongoose.Schema({
    catwayNumber: {
      type: Number,
      required: true
    },
    clientName: {
      type: String,
      required: true,
    },
    boatName: {
      type: String,
      required: true,
    },
    boatType: {
      type: String,
      required: true,
    },
    startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("post", reservationsSchema);
