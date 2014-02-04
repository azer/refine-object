var get = require("get-object-path");

module.exports = withModel;
module.exports.refine = refine;

function withModel (model) {
  return function (source) {
    return refine(model, source);
  };
}

function refine (model, source) {
  var key;
  var result = {};

  for (key in model) {
    if (typeof model[key] != 'object') {
      result[key] = get(source, model[key]);
      continue;
    }

    result[key] = refine(model[key], source);
  };

  return result;
}
