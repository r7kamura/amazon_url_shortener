const productPathPattern = /\/(?:dp|gp\/product)\/[A-Z0-9]{10}(?:[/?#]|$)/;

function stripVariantQuery(url: string | URL | null | undefined) {
  if (url === null || url === undefined) {
    return url;
  }
  const parsed = new URL(url, window.location.href);
  if (
    !productPathPattern.test(parsed.pathname) ||
    (!parsed.searchParams.has("th") && !parsed.searchParams.has("psc"))
  ) {
    return url;
  }
  parsed.searchParams.delete("th");
  parsed.searchParams.delete("psc");
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

for (const method of ["pushState", "replaceState"] as const) {
  const original = window.history[method];
  window.history[method] = function (data, unused, url) {
    return original.call(this, data, unused, stripVariantQuery(url));
  };
}
