module.exports = refine;

function refine (model) {
  return function (source) {
    var key;
    var result = {};

    for (key in model) {
      result[key] = source[model[key]];
    }

    return result;
  };
}
