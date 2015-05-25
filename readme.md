# win-battery-level [![Build status](https://ci.appveyor.com/api/projects/status/0w6dtogs1ya6cv8p/branch/master?svg=true)](https://ci.appveyor.com/project/kevva/win-battery-level/branch/master)

> Get current battery level on Windows


## Install

```
$ npm install --save win-battery-level
```


## Usage

```js
var winBatteryLevel = require('win-battery-level');

winBatteryLevel(function (err, level) {
	console.log(level);
	//=> 0.55
});
```


## CLI

See the [battery-level](https://github.com/gillstrom/battery-level#cli) CLI.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
