var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    count: 0,
    list: ['りんご','banana', 'strawberry'],
    show: true,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      src: 'item1.png',
      alt: '商品サムネイル',
      width: 200,
      height: 200
    },
    radius: 50,
    ok: true,
    type: 'B',
  },
  methods: {
    handleClick: function (event) {
      alert(event.target)
    },
    increment: function() {
      this.count += 1
    }
  }
})