var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Odds = new Schema({
  immeAvgHost: {type: Number, required: false},
  immeAvgTie:{type: Number, required: false},
  immeAvgGuest:{type: Number, required: false},
  gameId: {type: String, required: true},
});

const OddsModel = mongoose.model("Odds", Odds);

module.exports = OddsModel;
