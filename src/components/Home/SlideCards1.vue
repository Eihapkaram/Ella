<template>
  <div>
    <v-slide-group>
      <v-slide-group-item v-for="pro in this.all" :key="pro.id">
      </v-slide-group-item>
    </v-slide-group>
  </div>

  <div>
    <header id="head">
      <h3 class="ml-5 text-h5">
        TopProduct <img style="width: 30px" src="" />
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
            params: { catigory: 'tops' },
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
      :spaceBetween="220"
      :modules="modules"
      class="mySwiper"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    >
      <swiper-slide id="swip" v-for="pro in this.all" :key="pro.id">
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

          <v-card-item id="detilse">
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
                :spaceBetween="auto"
                :modules="modules"
                class=""
              >
                <swiper-slide
                  id="smallphotos"
                  v-for="(prox, index) in pro.images"
                  :key="index"
                >
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
            <v-card-actions>
              <v-btn
                id="showbtn"
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
                id="cartbtn"
              ></v-btn>
            </v-card-actions>
          </v-card-item>
        </v-card>
        <v-container fluid v-if="!pro.price">
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                  <v-skeleton-loader
                    class="mx-auto border"
                    max-width="400"
                    height="550px"
                    style="
                      position: absolute;
                      top: -100px;
                      width: 340px;
                      left: 0px;
                    "
                    type="image, article, button, button"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ListsStore1 } from "@/store/Lists";
import { CartStore1 } from "@/store/Cart";
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
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
  computed: {
    ...mapState(ListsStore1, ["list"]),
    ...mapState(mystore, ["all"]),
  },
  data() {
    return {
      load: true,
    };
  },
  methods: {
    ...mapActions(mystore, ["getall"]),
    ...mapActions(CartStore1, ["Additem"]),
    ...mapActions(ListsStore1, ["AdditemL", "updateL"]),
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

  async mounted() {
    await this.getall();
    if (this.all.length) {
      this.load = false;
    }
    setTimeout(() => {}, 200);

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
};
</script>
<style scoped lang="css">
#availbel {
  color: rgb(243, 16, 16);
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(236, 216, 216);
  width: fit-content;
  position: relative;
  left: -10px;
  top: 10px;
  height: 30px;
}
#head {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}
.mySwiper {
  padding-left: 50px;
}
#swip {
  margin-left: -30px;
}
#card {
  width: 20rem;
  height: auto;
}
#big-img {
  z-index: 5;
  cursor: pointer;
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
.mySwiper.swiper-button-next:after {
  background-color: white;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #swip {
    margin-left: 5px;
  }
  .mySwiper {
    padding: 5px;
  }
  #card {
    width: 18rem;
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
