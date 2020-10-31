window.onload = () => {
  const asinElement = document.querySelector('#ASIN, input[name="idx.asin"], input[name="ASIN.0"]');
  if (asinElement) {
    window.history.pushState(
      {},
      "",
      `/dp/${asinElement.value}`,
    );
  }
};
