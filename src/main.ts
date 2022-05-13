function replaceState(path: string) {
  window.history.replaceState({}, "", path);
}

window.onload = () => {
  const asinElement = document.querySelector(
    '#ASIN, input[name="idx.asin"], input[name="ASIN.0"], input[name="titleID"]'
  ) as HTMLInputElement;
  if (asinElement) {
    replaceState(`/dp/${asinElement.value}`);
  }
};
