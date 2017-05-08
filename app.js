Vue.component('greeting', {
  template: '<p>Hey there, I am a re-usable component</p>'
});

var one = new Vue({
  el: '#vue-app-one',
});

var two = new Vue({
  el: '#vue-app-two',
});
