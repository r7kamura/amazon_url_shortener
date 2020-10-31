## Single purpose

As described in its description, this extension's purpose is to automatically shorten Amazon product URL. When a user visits an Amazon product page, it automatically rewrites the URL into a shorter one by `window.history.pushState`.

## Permission justification

This extension needs permissions to some URL patterns to find out the shorter URL from the page user is accessing and rewrite current location by `window.history.pushState`.
