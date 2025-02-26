<template>
  <br />
  <div>
    <v-slide-group>
      <v-slide-group-item v-for="pro1 in this.catigoryProducts" :key="pro1.id">
      </v-slide-group-item>
    </v-slide-group>
  </div>

  <div id="conn">
    <header id="head">
      <h3 class="ml-5 text-h5" style="cursor: pointer">
        New prouducts <img style="width: 30px" src="" />
      </h3>
      <v-spacer></v-spacer>
      <div class="progress-bar">
        <span class="mr-5" id="ig">Show ALL</span>
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
    >
      <swiper-slide
        id="swip"
        v-for="pro1 in this.catigoryProducts"
        :key="pro1.id"
      >
        <v-card id="card">
          <v-row>
            <v-btn id="lovebtn" @focus="lovefun(pro1)" icon="mdi-heart"></v-btn
            ><v-spacer></v-spacer>
            <span id="availbel" class="d-flex">{{
              pro1.availabilityStatus
            }}</span>
          </v-row>

          <div
            id="parantimg1"
            style="overflow: hidden; height: fit-content; position: relative"
          >
            <v-btn
              @click="this.Emitter.emit('dilog', pro1)"
              rounded
              variant="outliened"
              id="quick"
              ripple
              >quick view</v-btn
            >
            <img
              id="big-img"
              width="200px"
              style="position: relative; top: -30px"
              class="mx-auto"
              :src="pro1.thumbnail"
            />
          </div>
          <v-card-item style="position: relative; top: -50px">
            <v-card-title>{{ pro1.title }}</v-card-title>
            <v-rating
              v-model="pro1.rating"
              ripple
              readonly
              :length="5"
              :size="20"
              active-color="orange"
              class="d-flex"
            /><br />
            <v-card-subtitle class="d-flex text-h6" style="color: brown"
              >price : {{ pro1.price }} $
            </v-card-subtitle>
            <v-card-subtitle class="d-flex"
              >brand : {{ pro1.brand }}
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
                <swiper-slide v-for="(prox, index) in pro1.images" :key="index">
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
                  $router.push({
                    name: 'derilse',
                    params: { idparam: pro1.id },
                  })
                "
                rounded
                >show-detilse</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                id="cartbtn"
                @click="(pro1.quantity = 1), this.Additem(pro1)"
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
    <div>
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
      ></div>
      <img
        height="auto"
        id="photo"
        style="position: relative"
        class="mx-auto"
        src="@/assets/images/vr-banner.webp"
      />
    </div>
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
    await this.getCatigoryProduct("laptops");
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
    ...mapActions(mystore, ["getCatigoryProduct"]),
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
    ...mapState(mystore, ["catigoryProducts"]),
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
  position: relative;
  left: -10px;
  top: 15px;
}
#head {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}
.mySwiper {
  width: 60%;
  position: relative;
  left: -250px;
}
#swip {
  margin-left: 0px;
}
#photo {
  left: 450px;
  top: -580px;
  width: 440px;
}
#ig {
  position: relative;
  z-index: 5;
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
  #ig {
    position: relative;
    z-index: 5;
  }

  #photo {
    left: 240px;
    top: -480px;
    width: 300px;
  }
  #swip {
    position: relative;
  }
  .mySwiper {
    width: 60%;
    position: relative;
    left: -11rem;
  }
  #swip {
    margin-left: 4rem;
  }
  .mySwiper {
    padding: 5px;
  }
  #card {
    width: 18rem;
    height: 30rem;
  }
  #availbel {
    color: rgb(243, 16, 16);
    border-radius: 5px;
    padding: 5px;
    background-color: rgb(236, 216, 216);
    width: fit-content;
    height: 30px;
    position: relative;
    left: -10px;
    top: 15px;
  }
  #conn {
    height: 38rem;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #conn {
    height: 33rem;
  }
  .mySwiper {
    width: 100%;
    position: relative;
    left: 1px;
  }
  #photo {
    left: 100px;
    top: -580px;
    display: none;
    width: 200px;
  }
  #ig {
    position: relative;
    z-index: 5;
  }

  #swip {
    width: 1rem;
    height: 360px;
    margin: 0px;
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
    height: 130px;
  }
  .mySwiper {
    padding: 0rem;
  }
  #card {
    width: 14rem;
    height: 450px;
  }
  #cartbtn {
    position: relative;
    left: -20px;
    top: -35px;
  }
  #my-galleryimg {
    width: 40px;
  }
  #showbtn {
    position: relative;
    left: -15px;
    top: -30px;
  }
  #quick {
    position: absolute;
    opacity: 0;
    font-size: 12px;
    top: 15%;
    background-color: rgb(255, 255, 255);
    z-index: 8;
    left: 30%;
    transition: all, 500;
  }
}
</style>
