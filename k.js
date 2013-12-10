/*
 * k.js
 *
 * A helpful micro-library that saves you from having to remember
 * all those key codes when adding keyboard events.
 *
 * Author: Daniel Fernandez Arias @dfernandeza
 *
 * Copyright (c) 2013
 * Released under the GPLv3 license.
 */
(function(global){
	var keymapper = {};
	// Add all the keystrokes you need here
	var keymap = {
		Escape   : 27,
		Enter    : 13,
		Spacebar : 32,
		Shift    : 16,
		Ctrl     : 17,
		Alt      : 18,
		Tab      : 9,
		// Arrow Keys
		UpArrow       : 38,
		RightArrow    : 39,
		DownArrow     : 40,
		LeftArrow     : 37
	};
	// Here we create all the utility functions
	var key;
	for(key in keymap){
		if(keymap.hasOwnProperty(key)){
			(function(k){
				keymapper['is' + k] = function(e){
					var keyCode = e.which || e.keyCode || e.charCode;
					return (keyCode === keymap[k]);
				};
			})(key);
		}
	}
	keymapper.isNumeric = function(e){
		var keyCode = e.which || e.keyCode || e.charCode;
		return !isNaN(String.fromCharCode(keyCode) * 1);
	};
	global.keymapper = keymapper;
})(window);