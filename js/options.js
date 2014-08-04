(function() {
  window.onload = function() {
    var formElement = document.affiliate_id_form;
    var inputElement = formElement.affiliate_id;

    // Auto-focuses on the text-field
    inputElement.focus();

    // Restores previous value from LocalStorage
    inputElement.value = window.localStorage.getItem("affiliate_id") || "";

    // Stores input value when a submit event is fired
    formElement.onsubmit = function() {
      window.localStorage.setItem("affiliate_id", inputElement.value);
      return false;
    };
  };
})();
