document.body.append('<h1>pageA</h1>')
var common = require("./common");
require(["./shared"], function(shared) {
  shared("This is page A");
});