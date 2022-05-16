function replaceState(path: string) {
  window.history.replaceState({}, "", path);
}

const asinElement = document.querySelector(
  '#ASIN, input[name="idx.asin"], input[name="ASIN.0"], input[name="titleID"]'
) as HTMLInputElement;

if (asinElement) {
  replaceState(`/dp/${asinElement.value}`);
} else {
  const href = window.location.href;
  const match = href.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})[/?]?/);
  if (match) {
    replaceState(`/dp/${match[1]}`);
  }
}
