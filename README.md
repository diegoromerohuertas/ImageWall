# ImageWall

*Image grid system*

ImageWall is a simple and easy to use plugin that works by resizing images based on the image proportion and the available horizontal space.

## Installation

1. Download `imageWall.js` from the `dist` folder.
2. Include it somewhere in your document:

```javascript
<script src="js/imageWall.js" async></script>
```

## Demo

You can see this module working in my personal photography website: [diegoromero.eu](https://diegoromero.eu/album/portfolio "Diego Romero Portfolio")

## Configuration

First you need to config the script:

```javascript
	imageWall.config = {
		// Custom options
	}
```

The following options are available:

|Option|Type|Default|Description|
|---|---|---|---|
|`className`|**mandatory**:String||The markup of the images to be resized.|
|`containerID`|**optional**:String|`window`|The ID of the image container.|
|`maxWidth`|**optional**:number|`450`|The max width of the images, in pixels.|

## Usage

Put the code to work by running:

```
imageWall.run ();
```

## Compatibility

Tested and working in:

* Chrome v51
* Firefox v47
* Safari v9

## Notes

Feel free to report any issues!!!

## License

Copyright (c) 2016

This content is released under the [MIT License](https://opensource.org/licenses/MIT).
