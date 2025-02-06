<template>
  <v-progress-linear indeterminate v-if="load"></v-progress-linear>
  <lay-out :my="this.catigory0"><router-view /></lay-out>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import LayOut from "./components/LayOut.vue";
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
export default {
  components: { LayOut },
  data() {
    return {
      load: "",
    };
  },
  provide() {
    return {
      catigory: this.catigory0,
    };
  },
  watch() {
    this.load = true;
    setTimeout(() => {
      this.load = false;
    }, 2000);
  },
  computed: {
    ...mapState(mystore, ["catigory0"]),
  },
  methods: {
    ...mapActions(mystore, ["getcatigories"]),
  },
  mounted() {
    this.load = true;
    setTimeout(() => {
      this.load = false;
    }, 2000);
  },
  unmounted() {
    if (localStorage.getItem("Cart-item")) {
      localStorage.setItem("Cart-item", JSON.stringify(this.CartProduct));
    }
  },
};
</script>
