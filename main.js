var app = new Vue({
  el: '#app',
  data: {
    name: 'キマイラ',
    message: 'Hello Vue.js!',
    count: 0,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'りんご', price: 100},
      { id: 2, name: 'ばなな', price: 200},
      { id: 3, name: 'いちご', price: 400},
      { id: 4, name: 'おれんじ', price: 300},
      { id: 5, name: 'めろん', price: 500},
    ],
    //list: ['りんご','banana', 'strawberry'],
    list2: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 },
    ],
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
    width: 800,
    height: 600,
  },
  mounted: function() {
    console.log(this.$el)
    console.log(this.$refs.hello)
  },
  created: function() {
    console.log("created")
    this.list2.forEach(function(item){
      this.$set(item, 'active', false)
    }, this)
  },
  computed: {
    matched: function() {
      return this.list.filter(function(el){
        return el.price <= this.budget
      }, this)
    },
    limited: function() {
      return this.matched.slice(0, this.limit)
    },
    // 算出プロパティhalfWidthを定義
    halfWidth: function() {
      return this.width / 2
    },
    halfHeight: function() {
      return this.height / 2
    },
    halfPoint: function() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    }
  },
  methods: {
    handleClick: function (event) {
      alert('クリックしたよ' + event.target)
    },
    increment: function() {
      this.count += 1
    },
    doAdd: function() {
      console.log("doAdd")
      // リスト内で一番大きなIDを取得
      const max = this.list2.reduce(function(a1,b1) {
        return a1.id > b1.id ? a1.id : b1.id
      })
      this.list2.push({
        id: max + 1,
        name: this.name,
        hp:500,
      })
    },
    doRemove: function(index) {
      this.list2.splice(index, 1)
    },
    doAttack: function(index) {
      this.list2[index].hp -= 10
    }
  }
})