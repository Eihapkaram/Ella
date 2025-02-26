<template>
  <v-dialog
    style="transition: all, 2s ease-in-out"
    max-width="90%"
    v-model="diloge"
  >
    <div
      style="overflow-y: scroll; overflow-x: hidden"
      id="zcon"
      class="bg-white d-flex flex-column"
    >
      <v-icon
        style="
          color: beige;
          background-color: black;
          align-self: flex-end;
          z-index: 5;
        "
        @click="this.diloge = false"
        id="closepopup"
        >mdi-close</v-icon
      >
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12">
          <div>
            <img
              id="big-img"
              height="400px"
              :src="tab ? tab : this.SingleProduct.thumbnail"
            />
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
              :slides-per-view="2"
              :spaceBetween="3"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide id="swip">
                <v-tabs
                  id="tabslide"
                  center-active
                  v-model="tab"
                  style="height: 300px"
                >
                  <v-tab
                    v-for="(pro, index) in this.SingleProduct.images"
                    :key="index"
                    class="mx-10"
                    :value="pro"
                    ><img width="100px" :src="pro"
                  /></v-tab>
                </v-tabs>
              </swiper-slide>
            </swiper>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" id="c2">
          <div id="con2">
            <div>
              <br />
              <div>
                <v-card-title id="titl" class="d-flex">{{
                  this.SingleProduct.title
                }}</v-card-title>
                <div class="d-flex">
                  <span class="mr-3">reviews :</span>
                  <v-rating
                    v-model="this.SingleProduct.rating"
                    ripple
                    readonly
                    :length="5"
                    :size="20"
                    active-color="orange"
                    class="d-flex"
                  />
                  <span class="ml-5"
                    >category : {{ this.SingleProduct.category }}</span
                  >
                </div>
                <v-card-text class="text-subtitle-1 d-flex">{{
                  this.SingleProduct.description
                }}</v-card-text>
                <v-divider></v-divider>
                <div id="ditealtdiv" class="d-flex flex-column">
                  <span class="d-flex"
                    >brand : {{ this.SingleProduct.brand }} </span
                  ><span v-if="this.SingleProduct.dimensions">
                    <span class="d-flex"
                      >width : {{ this.SingleProduct.dimensions.width }}
                    </span>
                    <span class="d-flex"
                      >height : {{ this.SingleProduct.dimensions.height }}
                    </span>
                    <span class="d-flex"
                      >depth : {{ this.SingleProduct.dimensions.depth }}
                    </span>
                  </span>

                  <span style="color: brown" class="text-subtitle-1 d-flex">
                    returnPolicy : {{ this.SingleProduct.returnPolicy }}</span
                  >
                  <span class="text-subtitle-1 d-flex"
                    >sku : {{ this.SingleProduct.sku }}</span
                  >
                  <span class="text-h6 text-bold d-flex" style="color: red"
                    >price : {{ this.SingleProduct.price }} $
                  </span>
                  <span class="text-subtitle-1 d-flex"
                    >availability :
                    {{ this.SingleProduct.availabilityStatus }}
                  </span>
                  <span style="color: red">
                    please hurry! only {{ this.SingleProduct.stock }} in stock
                    <v-progress-linear
                      color="deep-orange"
                      height="10"
                      width="60%"
                      :model-value="this.SingleProduct.stock"
                      striped
                    ></v-progress-linear>
                  </span>
                  <br />
                  <span id="qointcon">
                    <span class="text-h5">Quantity : </span>
                    <span>
                      <v-icon @click="muns()" id="munse">mdi-minus</v-icon>
                      <input id="qountbtn" type="button" :value="this.quint" />
                      <v-icon @click="this.quint++" id="plus">mdi-plus</v-icon>
                    </span>
                    <span class="text-subtitle-2"
                      >Subtotal :{{
                        Math.ceil(this.SingleProduct.price) * this.quint
                      }}
                      $
                    </span>
                  </span>
                  <br />
                  <span class="d-flex">
                    <v-btn
                      @click="this.Add(this.SingleProduct), (this.quint = 1)"
                      class="bg-black"
                      id="btnadd"
                      variant="outline"
                      prepend-icon="mdi-cart"
                      >Add to cart</v-btn
                    >
                    <span id="listicon">
                      <v-btn
                        ripple
                        size="60"
                        id="iconlist"
                        rounded="true"
                        icon="mdi-heart"
                        @click="this.Addtolist(this.SingleProduct)"
                      ></v-btn>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row></div
  ></v-dialog>
</template>
<style scoped>
.v-btn.v-btn--density-default {
  height: 0;
}
#titl {
  font-weight: bold;
}
#ditealtdiv {
  justify-content: flex-start;
}
#qountbtn {
  position: relative;
  height: 50px;
  left: 0px;
  border-radius: 30px;
  border: 2px solid black;
  width: 150px;
}
#plus {
  position: relative;
  left: -40px;
  z-index: 3;
}
#munse {
  position: relative;
  left: 40px;
  z-index: 3;
}
#qointcon {
  display: flex;
  flex-flow: column;
  position: relative;
}
#big-img {
  margin-inline: 5rem;
  margin-block: auto;
}
#listicon {
  border-radius: 50px;
  position: relative;
  top: -6px;
  margin-left: 10px;
  transition: all, 2s;
}
#btnadd {
  border-radius: 30px;
  height: 50px;
  width: 300px;
}
#zcon::-webkit-scrollbar {
  width: 5px;
}
#zcon::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(204, 201, 201);
}
#zcon::-webkit-scrollbar-track {
  width: 5px;
  background-color: white;
}
#my-galleryimg {
  z-index: 10;
  cursor: pointer;
}
#tabslide {
  width: 500px;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  .mdi:before,
  .mdi-set {
    display: inline-block;
    font: normal normal normal 24px / 1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #qountbtn {
    position: relative;
    height: 50px;
    left: 0px;
    border-radius: 30px;
    border: 2px solid black;
    width: 150px;
  }
  #plus {
    position: relative;
    left: -40px;
    z-index: 3;
  }
  #munse {
    position: relative;
    left: 40px;
    z-index: 3;
  }
  #qointcon {
    display: flex;
    flex-flow: column;
    position: relative;
    left: 10px;
  }
  #big-img {
    margin-inline: 8rem;
    margin-block: auto;
  }
  #swip {
    margin-inline: 8rem;
    margin-block: auto;
  }
  #listicon {
    border-radius: 50px;
    position: relative;
    top: -6px;
    left: -50px;
    transition: all, 2s;
  }
  #btnadd {
    border-radius: 30px;
    height: 50px;
    width: 350px;
    margin-inline: auto;
  }
  #my-galleryimg {
  }
  #con2 {
    margin-left: 10px;
  }
  #tabslide {
    width: 500px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #tabslide {
    width: 400px;
  }
  .mdi:before,
  .mdi-set {
    display: inline-block;
    font: normal normal normal 24px / 1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #con2 {
    margin-left: 10px;
  }
  #btnadd {
    border-radius: 30px;
    height: 50px;
    width: 250px;
    margin-left: 10px;
    margin-right: 10px;
  }
  #big-img {
    margin-inline: -2rem;
    margin-block: auto;
  }
  #swip {
    margin-inline: -2rem;
    margin-block: auto;
  }
  #qointcon {
    display: flex;
    flex-flow: column;
    width: fit-content;
    position: relative;
    left: -5px;
  }
  #listicon {
    border-radius: 50px;
    position: relative;
    top: -6px;
    margin-left: 50px;
    transition: all, 2s;
  }
}
</style>
<script>
/*import $ from "jquery";*/
import { CartStore1 } from "@/store/Cart";
import { ListsStore1 } from "@/store/Lists";
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
import { mapState, mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      quint: 1,
      iconcolor: "red",
      diloge: false,
      SingleProduct: "",
      tab: "",
    };
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Scrollbar],
    };
  },
  computed: { ...mapState(mystore, ["SingleProduct"]) },
  methods: {
    ...mapActions(mystore, ["getSingle"]),
    ...mapActions(CartStore1, ["Additem"]),
    ...mapActions(ListsStore1, ["AdditemL"]),
    Add(item) {
      this.SingleProduct.quantity = this.quint;
      this.Additem(item);
    },
    Addtolist(item) {
      this.SingleProduct.quantity = this.quint;
      this.AdditemL(item);
      window.iconlist.style.color = "red";
      window.iconlist.style.border = "1px solid red";
      window.iconlist.style.borderRadius = "100px";
    },
    muns() {
      let q = this.quint;
      if (q == 1) {
        return;
      } else {
        this.quint--;
      }
    },
    fun() {},
  },
  async mounted() {
    this.Emitter.on("dilog", (data) => {
      this.diloge = true;
      this.SingleProduct = data;
      if (this.SingleProduct) {
        document.querySelectorAll("#my-galleryimg").forEach((el) => {
          el.onclick = () => {
            const sr = el.getAttribute("src");
            document.querySelector("#big-img").src = sr;
          };
        });
      }
    });
    setTimeout(() => {}, 100);
    window.scroll(0, 0);
  },
};
</script>
