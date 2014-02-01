var get = require("get-object-path");

module.exports = refine;

function refine (model) {
  return function (source) {
    var key;
    var result = {};

    for (key in model) {
      result[key] = get(source, model[key]);
    }

    return result;
  };
}
