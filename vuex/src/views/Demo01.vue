<template>
  <div>
    <button @click.prevent="addOne">add</button>
    <button @click.prevent="compu">compute</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      // count:0
    }
  },
  methods: {
    // initCount() {
    //   this.count = this.$store.state.count;
    // },
    addOne() {
      this.$store.commit('increment')
      console.log(this.count)
    },
    compu(val) {
      this.$store.commit('compute',4)
      console.log(this.comCount);
    }
  },
  created() {
    // this.initCount();
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    comCount() {
      return this.$store.state.comCount;
    }
  },
}

</script>