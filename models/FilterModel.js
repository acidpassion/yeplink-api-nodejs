var mongoose = require("mongoose");

const Schema = mongoose.Schema;
 
const GameFilter = new Schema({
  panKou:[{
    type: String
}]
});

const GameFilterModel = mongoose.model('GameFilter', GameFilter);

module.exports = GameFilterModel;