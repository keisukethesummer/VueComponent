(function() {
  'use strict'

  var likeComponent = Vue.extend({
    template: '<button>いいね</button>'
  });
  
  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    }
  });
  
})();