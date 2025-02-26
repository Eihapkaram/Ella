<template>
  <div class="home">
    <BannerSlider />
    <SectionSLide />
    <OFeerSection />
    <SlideCards1 @dilog="viwediloge($event)" />
    <sectionOf />
    <TopCatogery />
    <NewProduct />
    <ServeCards />
    <TopMobil />
    <AccessoriesSection />
    <SportesTools />
    <ClothesSection />
    <TopsSc />
    <BannerSec2 />
    <ShozeSec />
    <Watch2Sc />
    <WatchSec />
    <FooterBanner />
    <FooterSction />
  </div>
</template>

<script>
import { mystore } from "@/store";
import { mapActions } from "pinia";
import FooterSction from "@/components/Home/FooterSction.vue";
import BannerSlider from "@/components/Home/BannerSlider.vue";
import TopMobil from "@/components/Home/TopMobil.vue";
import ServeCards from "@/components/Home/ServeCards.vue";
import NewProduct from "@/components/Home/NewProduct.vue";
import sectionOf from "@/components/Home/sectionOf.vue";
import TopCatogery from "@/components/Home/TopCatogery.vue";
import SectionSLide from "@/components/Home/SectionSLide.vue";
import OFeerSection from "@/components/Home/OFeerSection.vue";
import SlideCards1 from "@/components/Home/SlideCards1.vue";
import AccessoriesSection from "@/components/Home/AccessoriesSection.vue";
import SportesTools from "@/components/Home/SportesTools.vue";
import ClothesSection from "@/components/Home/ClothesSection.vue";
import ShozeSec from "@/components/Home/ShozeSec.vue";
import WatchSec from "@/components/Home/WatchSec.vue";
import Watch2Sc from "@/components/Home/Watch2Sc.vue";
import TopsSc from "@/components/Home/TopsSc.vue";
import BannerSec2 from "@/components/Home/BannerSec2.vue";
import FooterBanner from "@/components/Home/FooterBanner.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    SectionSLide,
    OFeerSection,
    SlideCards1,
    sectionOf,
    TopCatogery,
    NewProduct,
    ServeCards,
    TopMobil,
    FooterSction,
    BannerSlider,
    AccessoriesSection,
    SportesTools,
    ClothesSection,
    WatchSec,
    Watch2Sc,
    ShozeSec,
    TopsSc,
    BannerSec2,
    FooterBanner,
  },
  data() {
    return {
      diloge: false,
      SingleProduct: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions(mystore, ["getall", "getcatigories"]),
    viwediloge(data) {
      this.diloge = true;
      this.SingleProduct = data;
    },
  },
  async mounted() {
    await this.getcatigories();
  },
};
</script>
<style scoped></style>
