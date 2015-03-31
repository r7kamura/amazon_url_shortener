window.onload = function() {
  var asinElement = document.querySelector('#ASIN, input[name="idx.asin"], input[name="ASIN.0"]');
  if (asinElement) {
    chrome.extension.sendMessage(
      {},
      function(affiliateId) {
        var path = "/dp/" + asinElement.value;
        if (affiliateId && affiliateId != "") {
          path = path + "/?tag=" + affiliateId;
        }
        window.history.pushState({}, "", path)
      }
    );
  }
};
