# Changelog

## Unreleased

### Fixed

- Fix CSP error in Chrome 130+.

## 1.4.0 - 2022-06-19

### Added

- Support smile.amazon.co.uk & smile.amazon.de.

## 1.3.0 - 2022-05-28

### Added

- Support smile.amazon.com.

## 1.2.1 - 2022-05-17

### Fixed

- Fix bug that URL won't be shortend in some pages (`window.onload` is untrustworthy).

## 1.2.0 - 2022-05-17

### Added

- Add URL pattern detection as a fallback for query selector detection.

## 1.1.1 - 2022-05-13

### Fixed

- Fix version in manifest.json.

## 1.1.0 - 2022-05-13

### Removed

- Remove history permission.
- Remove buggy URL pattern detection.

## 1.0.0 - 2022-05-11

### Changed

- Migrate from manifest v2 to v3.
- Speed up by detecting ASIN also from URL.

## 0.3.0 - 2020-12-08

### Changed

- Change `pushState` to `replaceState`.

## 0.2.0 - 2020-12-06

### Added

- Add Amazon Prime Video page support.

### Fixed

- Fix duplicated www.amazon.com.br domain.

## 0.1.1 - 2020-11-01

### Added

- Add many Amazon domains support.

### Changed

- Change extension name from "amazon_url_shortener" to "Amazon URL Shortener".

## 0.1.0 - 2020-10-31

### Changed

- Change extension name from "amazon-url-modifier" to "amazon_url_shortener".

### Removed

- Remove optional affiliate association feature.
- Remove old browsers support.

## 0.0.4 - 2016-06-23

### Added

- Add HTTPS page support.

## 0.0.3 - 2015-03-31

### Fixed

- Fix Amazon associates URL (Thx @mallowlabs).

## 0.0.2 - 2014-08-04

### Added

- Support more kinds of product pages.

## 0.0.1 - 2014-08-04

### Added

- 1st Release.
