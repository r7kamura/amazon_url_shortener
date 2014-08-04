window.onload = function() {
  var asinElement = document.getElementById("ASIN");
  if (asinElement) {
    chrome.extension.sendMessage(
      {},
      function(affiliateId) {
        var path = "/dp/" + asinElement.value;
        if (affiliateId && affiliateId != "") {
          path = path + "/" + affiliateId;
        }
        window.history.pushState({}, "", path)
      }
    );
  }
};
