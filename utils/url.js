exports = module.exports = function() {
  var mod = {
    domain: function(link) {
      return new URL(link).hostname;
    }
  };
  return mod;
}