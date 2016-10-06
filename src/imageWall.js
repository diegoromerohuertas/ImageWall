 
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.imageWall = factory();
    }
}(this, function () {

  var config;

  function run () {

    // config.className must be setted
    if (this.config == null || !this.config.className) {
      console.error ('config.className must be setted!!');
    } else {

      // If config has a containerID, we have to use its width, if not use window width
      if (this.config != null && this.config.containerID && document.getElementById (this.config.containerID) !== null)
        var containerWidth = document.getElementById (this.config.containerID).clientWidth;
      else
        var containerWidth = document.body.clientWidth;

      // If maxWidth has been setted, we have to use it
      if (this.config != null && this.config.maxWidth)
        var maxWidth = this.config.maxWidth;
      else
        var maxWidth = 450;

      // First we need the number of pictures per row
      var imagesRow = Math.ceil(containerWidth/maxWidth);

      var elements = [].slice.call(document.getElementsByClassName(this.config.className));

      // And the number of rows
      var rows = Math.ceil(elements.length/imagesRow);

      // We need the number of images of the last row
      var lastRow = elements.length - (rows-1)*imagesRow;

      for (var row = 0; row < rows; row++) {

        var proportions = [];

        var start = imagesRow*row;
        var end = imagesRow*(row+1);

        if (row == (rows - 2) && lastRow < imagesRow/2) {
          end = elements.length;
          row++;
        }

        var pictures = elements.slice (start, end);
        for (var i = 0; i < pictures.length; i++) {
           proportions [i] = pictures[i].naturalHeight/pictures[i].naturalWidth;
        }

        // Get the scale factor
        var factor = 0;
        for (var i = 0; i < proportions.length; i++) {
          factor = factor + proportions [0]/proportions [i];
        }

        var x1 = containerWidth / factor;
        var y = x1 * proportions[0];

        for (var i = 0; i < pictures.length; i++) {
          pictures[i].style.width = (Math.floor (x1 * 100 * proportions[0] / proportions[i]) / 100) + 'px';
          pictures[i].style.height =  y + 'px';
        }

      }

    }

  }

  return {
    run: run,
    config: config

  }

}));
