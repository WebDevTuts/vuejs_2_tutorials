new Vue({
  el: '#vue-app',
  data: {

  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.input.value);
    }
  }
});
