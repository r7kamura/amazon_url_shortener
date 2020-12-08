window.onload = () => {
  const asinElement = document.querySelector('#ASIN, input[name="idx.asin"], input[name="ASIN.0"], input[name="titleID"]')
  if (asinElement) {
    window.history.replaceState(
      {},
      '',
      `/dp/${asinElement.value}`
    )
  }
}
