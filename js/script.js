window.onload = function() {
  var asinElement = document.querySelector('#ASIN, input[name="idx.asin"], input[name="ASIN.0"]');
  if (asinElement) {
    var path = "/dp/" + asinElement.value;
    window.history.pushState({}, "", path)
  }
};
