# amazon-url-modifier
A chrome-extension to modify URL when you access to any product page in amazon.co.jp.

## Example
```
http://amazon.co.jp/NEW-GAME-1-%E3%81%BE%E3%82%93%E3%81%8C%E3%82%BF%E3%82%A4%E3%83%A0KR%E3%82%B3%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9-%E5%BE%97%E8%83%BD%E6%AD%A3%E5%A4%AA%E9%83%8E/dp/4832244140
↓
http://amazon.co.jp/dp/4832244140
```

## Implementation notes
This extension uses some things as follows:

* window.history.pushState
* content-script
