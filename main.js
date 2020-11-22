(function() {
  'use strict'

  var likeComponent = Vue.extend({
    data: function() {
      return {
        count: 0
      }
    },
    template: '<button @click="countUp">いいね {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  });
  
})();