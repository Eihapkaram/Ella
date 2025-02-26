<template>
  <v-progress-linear color="blue" indeterminate v-if="load"></v-progress-linear>
  <v-row id="con" class="d-flex flex-row">
    <v-col cols="12"
      ><h2>{{ this.$route.params.catigory }}</h2></v-col
    >

    <v-card
      width="300"
      height="550px"
      v-for="pro in this.catigoryProducts"
      :key="pro.id"
    >
      <v-row>
        <v-btn id="lovebtn" @focus="lovefun(pro)" icon="mdi-heart"></v-btn
        ><v-spacer></v-spacer>
        <span id="availbel" class="d-flex">{{ pro.availabilityStatus }}</span>
      </v-row>
      <div
        id="parantimg1"
        style="overflow: hidden; height: fit-content; position: relative"
      >
        <v-btn
          @click="this.Emitter.emit('dilog', pro)"
          rounded
          variant="outliened"
          id="quick"
          ripple
          >quick view</v-btn
        >
        <img id="big-img" width="200px" :src="pro.thumbnail" />
      </div>
      <v-card-item>
        <v-card-title>{{ pro.title }}</v-card-title>
        <v-rating
          v-model="pro.rating"
          ripple
          readonly
          :length="5"
          :size="20"
          active-color="orange"
          class="d-flex"
        /><br />
        <v-card-subtitle class="d-flex text-h6" style="color: brown"
          >price : {{ pro.price }} $
        </v-card-subtitle>
        <v-card-subtitle class="d-flex"
          >brand : {{ pro.brand }}
        </v-card-subtitle>
        <v-card-text>
          <swiper
            :scrollbar="{
              hide: true,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :mousewheel="true"
            :keyboard="true"
            :slides-per-view="4"
            :spaceBetween="2"
            :modules="modules"
            class=""
          >
            <swiper-slide v-for="(prox, index) in pro.images" :key="index">
              <img id="my-galleryimg" height="50px" width="50px" :src="prox" />
            </swiper-slide>
          </swiper>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="
              $router.push({ name: 'derilse', params: { idparam: pro.id } })
            "
            rounded
            >show-detilse</v-btn
          ><v-spacer></v-spacer>
          <v-btn
            @click="(pro.quantity = 1), this.Additem(pro)"
            rounded
            ripple
            elevation="2"
            style=""
            icon="mdi-cart"
          ></v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </v-row>
</template>
<script>
import { mystore } from "@/store";
import { ListsStore1 } from "@/store/Lists";
import { CartStore1 } from "@/store/Cart";
import { mapActions, mapState } from "pinia";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
export default {
  inject: ["Emitter"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      load: false,
    };
  },
  methods: {
    ...mapActions(mystore, ["getCatigoryProduct"]),
    ...mapActions(CartStore1, ["Additem"]),
    ...mapActions(ListsStore1, ["AdditemL", "updateL"]),
    ...mapActions(mystore, ["getCatigoryProduct1"]),
    async lovefun(data) {
      await document.querySelectorAll("#lovebtn").forEach((el) => {
        el.onclick = () => {
          el.style.color = "red";
        };
      });
      data.quantity = 1;
      await this.AdditemL(data);
    },
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Scrollbar],
    };
  },
  computed: { ...mapState(mystore, ["catigoryProducts"]) },
  async mounted() {
    window.scroll(0, 0);
    this.load = true;
    if (this.catigoryProducts.length == 0) {
      this.$router.go(-1);
    }

    setTimeout(() => {
      this.getCatigoryProduct(this.$route.params.catigory);
      this.load = false;
    }, 500);
  },
  watch: {
    $route() {
      this.load = true;
      setTimeout(() => {
        this.getCatigoryProduct(this.$route.params.catigory);
        this.load = false;
      }, 500);
    },
  },
};
</script>
<style lang="css" scoped>
#availbel {
  color: rgb(243, 16, 16);
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(236, 216, 216);
  width: fit-content;
  height: 30px;
  position: relative;
  left: -20px;
  top: 10px;
}
#con {
  justify-content: center;
  flex-flow: row, wrap;
  position: relative;
  top: -180px;
  gap: 10px;
}
#big-img:hover {
  scale: 1.2;
}
#parantimg1:hover #quick {
  opacity: 1 !important;
}
#quick {
  position: absolute;
  opacity: 0;
  font-size: 12px;
  top: 50%;
  background-color: rgb(255, 255, 255);
  z-index: 8;
  left: 30%;
  transition: all, 500;
}
@media (max-width: 991px) {
  #con {
    position: relative;
    margin-inline: auto;
    width: 95%;
    top: -220px;
  }
}
@media (max-width: 500px) {
  #con {
    position: relative;
    margin-inline: auto;
    width: 95%;
    top: -200px;
  }
}
</style>
