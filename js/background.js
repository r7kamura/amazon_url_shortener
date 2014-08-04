chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse(window.localStorage.getItem("affiliate_id"));
  }
);
