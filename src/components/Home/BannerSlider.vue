<template>
  <div id="conb">
    <swiper
      :spaceBetween="30"
      :slides-per-view="1"
      :centeredSlides="false"
      :loop="true"
      :autoplay="{
        delay: 6000,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img id="item" src="@/assets/images/offers.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">Special offer</h3>
            <h5 class="subtitel">Buy everything</h5>
            <p class="discr">
              Buy everything you need from ellamart+ and get a 30% discount
            </p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'home',
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/getphone2.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">Get youer new phone</h3>
            <h5 class="subtitel">At a discounted price now</h5>
            <p class="discr">Get the latest smartphones from ella</p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'smartphones' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/care.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">care products</h3>
            <h5 class="subtitel">get it now</h5>
            <p class="discr">All care products For hair and skin</p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'skin-care' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/dreas2.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">Fashionable clothes</h3>
            <h5 class="subtitel">Wear the latest fashions Now</h5>
            <p class="discr">Wear the latest fashions from ella</p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'womens-dresses' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/smart.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">Accessories</h3>
            <h5 class="subtitel">All smart accessories</h5>
            <p class="discr">Get all your accessories from ella mart+ now</p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'mobile-accessories' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/sportstool.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">sports equipment</h3>
            <h5 class="subtitel">sport</h5>
            <p class="discr">
              You can find all the sports equipment you need at ella
            </p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'sports-accessories' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img id="item" src="@/assets/images/mackup.png" />
        <div class="condis" id="con">
          <div class="content">
            <h3 class="title">makeup and cosmetics</h3>
            <h5 class="subtitel">makeup</h5>
            <p class="discr">All cosmetics, makeup and others, now on ella</p>

            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                @click.prevent="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: 'beauty' },
                  })
                "
                class="progress-bar"
              >
                <span id="textbtn"><v-icon>mdi-cart</v-icon>Buy Now</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import $ from "jquery";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      srcs: "http://localhost:8080/img/1.cea911c0.jpg",
      discrpt: "action moves",
      namez: "last man down",
      srcvl: "https://www.youtube.com/embed/GCc7v40DmqA",
      srcjo: "http://localhost:8080/img/2.02a34ac6.jpg",
      discriptjo: "action moves",
      srcvjo: "https://www.youtube.com/embed/ygUHhImN98w",
      namejo: "jocker",
      srcsu: "http://localhost:8080/img/3.cee2bd5f.jpg",
      srcvsu: "https://www.youtube.com/embed/OtXlekcPnmM",
      discriptsu: "cartoon moves",
      namesu: "sun",
      isactive: false,
      sr: "https://image.tmdb.org/t/p/original",
    };
  },
  inject: ["fun", "trialmovis"],
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  props: ["st"],
  mounted: function () {
    window.setTimeout(function () {
      window.setInterval(function () {
        let mu = $(".swiper-slide-active");
        if (mu) {
          $(".swiper-slide-active .content").animate({ left: "0px" }, 1000);
          $(".swiper-slide-active .content").css({ display: "flex" });
        }
      }, 3000);
    }, 1000);
  },
  methods: {
    async trialasync(id) {
      await this.trialmovis(id);
      this.$router.push({ name: "about", params: { filmid: id } });
    },
    itemhover() {
      $(".popup").css({ display: "flex" });
      $(".btn1").css({ display: "flex" });
    },
    itemhover2() {
      $(".popup").css({ display: "none" });
      $(".btn1").css({ display: "none" });
    },

    itemhover0() {
      $(".popup2").css({ display: "flex" });
      $(".btn2").css({ display: "flex" });
    },
    itemhover1() {
      $(".popup2").css({ display: "none" });
      $(".btn2").css({ display: "none" });
    },
    itemhover3() {
      $(".popup3").css({ display: "flex" });
      $(".btn3").css({ display: "flex" });
    },
    itemhover4() {
      $(".popup3").css({ display: "none" });
      $(".btn3").css({ display: "none" });
    },

    itemhover5() {
      $(".popup4").css({ display: "flex" });
      $(".btn4").css({ display: "flex" });
    },
    itemhover6() {
      $(".popup4").css({ display: "none" });
      $(".btn4").css({ display: "none" });
    },
    itemhover7() {
      $(".popup5").css({ display: "flex" });
      $(".btn5").css({ display: "flex" });
    },
    itemhover8() {
      $(".popup5").css({ display: "none" });
      $(".btn5").css({ display: "none" });
    },
    tolast(view, src, discrption, filmname, srcvl) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvl,
        },
      });
    },
    tosun(view, src, discrption, filmname, srcvsu) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvsu,
        },
      });
    },
    tojocker(view, src, discrption, filmname, srcvjo) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvjo,
        },
      });
    },
  },
};
</script>
<style scoped>
.contianer-fliud {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
#head {
  align-self: end;
  margin-right: 20px;
  margin-block: 30px;
  color: rgb(0, 0, 0);
}
.progress {
  position: relative;
  height: 100px;
  border-radius: none;
  width: 100px;
  cursor: pointer;
  background-color: transparent;
  left: 20px;
}
.progress:hover .progress-bar {
  width: 100%;
}
.progress-bar {
  width: 50%;
  border-radius: 2px;
  padding: 5px;
}
#textbtn {
  z-index: 5;
  color: brown;
  width: 100px;
  position: fixed;
  display: flex;
  position: relative;
  left: 108px;
  flex-flow: row, nowrap;
}
#textbtn:hover {
  transform: scale(1.1);
  transition: all, 1s;
}
.checked {
  color: orange;
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  top: 20px;
  z-index: 2;
}
.condis {
  position: absolute;
  left: 0px;
  width: 400px;
}
.content {
  position: relative;
  overflow: hidden;
  left: -500px;
  display: none;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
.swiper-slide-active {
  color: aliceblue;
}
.mySwiper {
  position: relative;
  top: -100px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide #item {
  display: block;
  width: 100%;
  height: 660px;
  object-fit: cover;
  gap: 100rem;
  border-radius: 5px;
}
.swiper-slide #item:hover {
  transform: scale(1.1);
  transition: all, 1s;
}
.btn1 {
  width: 50px;
  height: 50px;
  display: ;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 180px;
  align-self: center;
  right: auto;
  background-color: orange;
}
.btn1 {
  animation: btnani 2s infinite linear;
}
@keyframes btnani {
  0% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 1;
  }
  40% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  80% {
    box-shadow: 0 0 0 50px rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
}
#movename {
  position: absolute;
  z-index: 3;
  color: rgb(245, 245, 245);
  top: 320px;
  font-size: large;
  align-self: center;
}
#moveitem {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 350px;
  font-size: small;
  align-self: center;
}
.coninform {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
  row-gap: 3px;
  height: 100%;
  width: 290px;
}
.btn5 {
  width: 50px;
  height: 50px;
  align-self: center;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: relative;
  align-self: center;
  right: auto;
  background-color: orange;
}
.btn5:hover {
  animation: btnani 2s infinite linear;
}
/*/desktop/*/
@media (max-width: 1366px) {
  #conb {
    height: fit-content;
    margin-top: -100px;
    position: relative;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  #conb {
    height: fit-content;
    margin-top: -160px;
    position: relative;
  }
  .swiper-slide #item {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }
  #textbtn {
    z-index: 5;
    color: brown;
    width: 100px;
    position: fixed;
    display: flex;
    position: relative;
    left: 30px;
    flex-flow: row, nowrap;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  .swiper-slide #item {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  .swiper {
    width: 100%;
  }
  #conb {
    height: fit-content;
    margin-top: -160px;
    position: relative;
  }
}
</style>
