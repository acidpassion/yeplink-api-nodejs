const Odd = require("../models/OddModel");
const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

/**
 * Odd List.
 * 
 * @returns {Object}
 */
exports.oddList = [
	auth,
	function (req, res) {
		try {
			Odd.find({"immeAvgHost":{$gt:2}},'immeAvgHost immeAvgTie immeAvgGuest gameId').then((odds)=>{
				if(odds.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", odds);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];