Vue.component('greeting', {
  template: '<p>Hey there, I am {{ name }}</p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
});

var two = new Vue({
  el: '#vue-app-two',
});
