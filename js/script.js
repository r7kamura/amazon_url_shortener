window.onload = function() {
  var asinElement = document.getElementById("ASIN");
  if (asinElement) {
    window.history.pushState(
      {},
      "",
      "/dp/" + asinElement.value
    );
  }
};
