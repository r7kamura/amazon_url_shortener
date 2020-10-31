# Amazon URL Shortener

[![](https://github.com/r7kamura/amazon_url_shortener/workflows/.github/workflows/test.yml/badge.svg)](https://github.com/r7kamura/amazon_url_shortener/actions?query=workflow%3A.github%2Fworkflows%2Ftest.yml)

Chrome extension to automatically shorten Amazon product URL.

## Usage

### Installation

1. Download ZIP from [Releases](https://github.com/r7kamura/amazon_url_shortener/releases) and unzip it.
2. Go to Google Chrome extension settings (chrome://extensions/).
3. Turn on Developer mode.
4. Load unzipped directory from "Load unpacked".

### How it works

When you visit an Amazon product page with a long URL:

> http://amazon.co.jp/NEW-GAME-1-%E3%81%BE%E3%82%93%E3%81%8C%E3%82%BF%E3%82%A4%E3%83%A0KR%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E5%BE%97%E8%83%BD%E6%AD%A3%E5%A4%AA%E9%83%8E/dp/4832244140

this extension automatically rewrites the URL into a shorter one:

> http://amazon.co.jp/dp/4832244140
