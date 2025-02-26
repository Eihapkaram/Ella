<template>
  <br />
  <div id="conn">
    <header id="head">
      <h3 class="ml-5 text-h5" style="cursor: pointer">
        TopMobile <img style="width: 30px" src="" />
      </h3>
      <v-spacer></v-spacer>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        @click="
          this.$router.push({
            name: 'catigory',
            params: { catigory: 'smartphones' },
          })
        "
      >
        <div class="progress-bar">
          <span class="mr-5" id="ig">Show ALL</span>
        </div>
      </div>
    </header>
    <br />
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
      :slides-per-view="3"
      :spaceBetween="210"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        id="swip"
        v-for="pro in this.catigoryProducts1"
        :key="pro.id"
      >
        <v-card id="card">
          <v-row>
            <v-btn id="lovebtn" @focus="lovefun(pro)" icon="mdi-heart"></v-btn
            ><v-spacer></v-spacer>
            <span id="availbel" class="d-flex">{{
              pro.availabilityStatus
            }}</span>
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
          <v-card-item style="position: relative; top: -50px; left: -10px">
            <br />
            <br />
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
                :spaceBetween="3"
                :modules="modules"
                class=""
              >
                <swiper-slide v-for="(prox, index) in pro.images" :key="index">
                  <img
                    id="my-galleryimg"
                    height="50px"
                    width="50px"
                    style="z-index: 5"
                    :src="prox"
                  />
                </swiper-slide>
              </swiper>
            </v-card-text>
            <v-card-actions id="conbtn">
              <v-btn
                id="showbtn"
                @click="
                  $router.push({
                    name: 'derilse',
                    params: { idparam: pro.id },
                  })
                "
                rounded
                >show-detilse</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                id="cartbtn"
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
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper/modules";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
import { ListsStore1 } from "@/store/Lists";
import { CartStore1 } from "@/store/Cart";

export default {
  inject: ["Emitter"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  async mounted() {
    await this.getCatigoryProduct1("smartphones");
    await document.querySelectorAll("#my-galleryimg").forEach((el) => {
      el.onclick = () => {
        const sr = el.getAttribute("src");
        document.querySelector("#big-img").src = sr;
      };
    });
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Scrollbar],
    };
  },
  methods: {
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
  computed: {
    ...mapState(mystore, ["catigoryProducts1"]),
    ...mapState(ListsStore1, ["list"]),
  },
};
</script>
<style scoped>
#conn {
  height: 38rem;
}
#availbel {
  color: rgb(243, 16, 16);
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(236, 216, 216);
  width: fit-content;
  height: 30px;
  z-index: 10;
  position: relative;
  left: -10px;
  top: 10px;
}
#swip {
  margin-left: -30px;
}
#head {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}
.mySwiper {
  width: 100%;
  position: relative;
  padding-left: 50px;
}
#card {
  width: 20rem;
  height: 33rem;
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
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #im {
    position: relative;
    width: 390px;
    height: 300px;
  }
  #swip {
    margin-left: 20px;
  }
  .mySwiper {
    width: 100%;
    position: relative;
    padding-left: 0px;
    left: 0px;
  }
  #swip {
    margin-left: 5px;
  }
  .mySwiper {
    padding: 5px;
  }
  #conn {
    height: 38rem;
  }
  #card {
    width: 18rem;
    height: 33rem;
  }
  #availbel {
    color: rgb(243, 16, 16);
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(236, 216, 216);
    width: fit-content;
    height: 30px;
    z-index: 10;
    position: relative;
    left: -10px;
    top: 10px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #swip {
    width: 2rem;
    height: 420px;
  }
  #availbel {
    color: rgb(243, 16, 16);
    border-radius: 5px;
    padding: 2px;
    background-color: rgb(236, 216, 216);
    width: fit-content;
    position: relative;
    left: -10px;
    top: 10px;
    height: 30px;
  }
  #big-img {
    width: 100px;
    height: 80px;
  }
  .mySwiper {
    padding: 0rem;
    margin: 0rem;
  }
  #card {
    width: 14rem;
    height: 420px;
  }
  #cartbtn {
    position: relative;
    left: -20px;
  }
  #my-galleryimg {
    width: 40px;
  }
  #showbtn {
    position: relative;
    left: -15px;
  }
}
</style>
