function initVue() {
  new Vue({
    el: '#app',
    data: {
      'text': 'Allegri 1',
      'image': 'img/allegri.gif',
      'timer': 0,
    },
    mounted: function () {
      this.startSlide();
    },
    methods: {
      startSlide: function() {
        this.timer = setInterval(this.changeDx, 5000)
      },
      changeDx: function () {
        if (this.image == 'img/allegri.gif') {
          this.image = 'img/allegri2.gif',
          this.text = 'Allegri 2'
        } else if (this.image == 'img/allegri2.gif') {
          this.image = 'img/allegri3.gif'
          this.text = 'Allegri 3'
        } else {
          this.image = 'img/allegri.gif'
          this.text = 'Allegri 1'
        }
      },
      changeSx: function () {
        if (this.image == 'img/allegri3.gif') {
          this.image = 'img/allegri2.gif'
          this.text = 'Allegri 2'
        } else if (this.image == 'img/allegri2.gif') {
          this.image = 'img/allegri.gif'
          this.text = 'Allegri 1'
        } else {
          this.image = 'img/allegri3.gif'
          this.text = 'Allegri 3'
        }
      }
    }
  });
}

function init() {
  initVue();
}

$(init);
