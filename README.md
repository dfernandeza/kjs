k.js
======

A helpful micro-library that saves you from having to remember all those key codes when adding keyboard events.

#### Available functions

```javascript
keymapper.isAlt(event);
```

```javascript
keymapper.isCtrl(event);
```

```javascript
keymapper.isDownArrow(event);
```

```javascript
keymapper.isEnter(event);
```

```javascript
keymapper.isEscape(event);
```

```javascript
keymapper.isLeftArrow(event);
```

```javascript
keymapper.isNumeric(event);
```

```javascript
keymapper.isRightArrow(event);
```

```javascript
keymapper.isShift(event);
```

```javascript
keymapper.isSpacebar(event);
```

```javascript
keymapper.isTab(event);
```

```javascript
keymapper.isUpArrow(event);
```

#### How it works

```javascript
document.addEventListener('keydown', function(e){
	if(keymapper.isNumeric(e)){
		console.log('Numeric keystroke!');
	}
}, false);
```