
<p align="center">
	<img src="https://github.com/m-reda/linker/raw/master/dist/logo.png" alt="">
</p>

-------
![ScreenShot](https://github.com/m-reda/linker/raw/master/dist/ScreenShot.png "ScreenShot")

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1eff04c40cfd4f9ab84a8d2f5a8ccffe)](https://www.codacy.com/app/m-reda/linker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=m-reda/linker&amp;utm_campaign=Badge_Grade)

Linker is Node Editor Library, I built this library for a new project I'm working on, besides I was interested in building one.

Note: This is a `beta` version.


## Installation
##### 1- Required files
```html
<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
<script src="linker.min.js"></script>

<link rel="stylesheet" href="linker.min.css">
```

##### 2- Add the html container
```html
<div id="linker"></div>
```

##### 3- Initialize the linker
```javascript
$(document).ready(function () {
	var linker = $('#linker').linker();
});
```

## Demo
![demo](https://github.com/m-reda/linker/raw/master/dist/ScreenShot.gif "demo")

You can download the demo files from [dist](https://github.com/m-reda/linker/tree/master/dist) folder

[Live Demo](http://m-reda.github.io/linker)




## Usage
##### Add new node
```javascript
var node = linker.node({id: 'first', name: 'First Node', x: 100, y: 100});
```
You can pass any data as a node and read it from the events handler

##### Add new input
```javascript
var node_in = node.input('input_id', 'Input Name');
```
You can add multiple inputs

##### Add new output
```javascript
var node_out = node.output('output_id', 'Output Name');
```
You can add multiple outputs

##### Add path between two nodes
```javascript
node_out.connect(node2_in);
```
You can connect the output to multiple inputs

##### Add path without triggering onConnect event
```javascript
node_out.connect(node2_in, true);
```

## Node Events
##### onDrag: When the node position change
```javascript
node.onDrag = function (x, y) {
	console.log(x, y, this);
	
	// 'x, y' is the new position
	// 'this' is the node object
};
```
##### onDragFinish: When the dragging finish
```javascript
node.onDragFinish = function (x, y) {
	console.log(x, y, this);
	
	// 'x, y' is the new position
	// 'this' is the node object
};
```

##### onRemove: When delete the node
```javascript
node.onRemove = function () {
	console.log(this);
};
```

##### onSetting: When setting's icon clicked
```javascript
node.onSetting = function () {
	alert('Setting ' + this.name);
};
```

## Output Events
##### onConnect: When this output connect to new input
```javascript
node_out.onConnect = function (input) {
	console.log(this, input);
	
	// 'this' is the output object
	// 'this.node' is the output parent node object
	// '$(this.el)' is the output DOM element
	
	// 'input' is the input object
	// 'input.node' is the output parent node object
	// '$(input.el)' is the input DOM element
};
```

##### onRemove: When this output path remove
```javascript
node_out.onRemove = function (index) {
	console.log(index)
};
```

## Options
```javascript
var linker = $('#linker').linker({ 
	// hide setting icons from the nodes
	settingIcon: false
});
```

## Example
```javascript
$(document).ready(function () {
	var linker = $('#linker').linker();

	// add a node
	var node1 = linker.node({id: 'first', name: 'First Node', x: 100, y: 100});

	// when the node position change
	node1.onDrag = function (x, y) {
		console.log(x, y, this); // print the new position and the node object
	};

	// trigger when delete the node
	node1.onRemove = function () {
		console.log(this); // print the node object
	};

	// trigger when setting icon clicked
	node1.onSetting = function () {
		alert('Setting ' + this.name);
	};

	// add an input
	node1.input('input_id', 'Input Name');

	// add an output
	var node1_out = node1.output('output_id', 'Output Name');

	// trigger when this output connect to new input
	node1_out.onConnect = function (input) {
		console.log(this, input); // print the output and the input objects
	};

	// trigger when this output link remove
	node1_out.onRemove = function (index) {
		console.log(index)
	};

	// add node 2
	var node2 = linker.node({id: 'second', name: 'Second Node', x: 400, y: 200});
	var node2_in = node2.input('input_id', 'Input Name');

	node2.onSetting = function () {
		alert('Setting ' + this.name);
	};

	// add path between two nodes
	node1_out.connect(node2_in);
});
```

## Development environment
`nmp install` to install required modules

`gulp watch` to compile sass and javascript files

## Credits
Linker is inspired by [NEditorJS](https://github.com/sketchpunk/NEditorJS)

## License
MIT