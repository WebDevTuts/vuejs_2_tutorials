new Vue({
  el: '#vue-app',
  data: {
    name: 'Edwin',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
