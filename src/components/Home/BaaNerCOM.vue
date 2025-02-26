<template>
  <div id="bannercon">
    <v-banner
      style="height: fit-content; width: fit-content; object-fit: cover"
    >
      <img id="banner-bg" src="@/assets/images/banner-bg.jpg" />
    </v-banner>
    <div>
      <v-banner-text
        id="banner-text"
        style="height: 50px"
        class="bg-orange d-flex"
        >kjasdkjnckjdsnckjndsjk
        <v-btn variant="outline" class="ml-5" style="border: 2px solid black"
          >learn more</v-btn
        ></v-banner-text
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#banner-bg {
  position: relative;
  width: 100%;
}
#bannercon {
  position: relative;
  height: 400px;
  width: 110%;
  top: -115px;
  left: -20px;
}
#banner-text {
  position: relative;
  top: -20px;
  left: 15px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
@media (max-width: 991px) {
  #banner-bg {
    position: relative;
    width: 110%;
    height: 350px;
    left: -20px;
    margin: 0px;
  }
  #bannercon {
    padding: 0px;
    position: relative;
    height: 350px;
    width: 100%;
    top: -px;
    left: -0px;
  }
  #banner-text {
    position: relative;
    top: -20px;
    left: 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>
