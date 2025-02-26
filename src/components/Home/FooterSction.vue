<template>
  <div id="foot" style="background-color: gainsboro; position: relative">
    <v-row>
      <v-col cols="3" style="gap: 10px" class="d-flex flex-column"
        ><span class="text-h4"><h4 id="tital">SHOP</h4></span>

        <span id="item">Electronics</span>
        <span id="item">computers & Labs </span>
        <span id="item">Smartphones</span>
        <span id="item">Home Furniture</span>
        <span id="item">weekly special</span>
      </v-col>
      <v-col style="gap: 10px" class="d-flex flex-column" cols="3">
        <span class="text-h4"><h4 id="tital">FURTHER INFO</h4></span>

        <span id="item">About</span>
        <span id="item">Customer Service</span>
        <span id="item">Reward Program</span>
        <span id="item">Shipping & Returns</span>
        <span id="item">Privacy Policy</span>
        <span id="item">Terms & Conditions</span>
        <span id="item">Blog</span>
      </v-col>
      <v-col sm="3" style="gap: 10px" class="d-flex flex-column" cols="3">
        <span class="text-h4"><h4 id="tital">SERVICE</h4></span>

        <span id="item">Search Terms</span>
        <span id="item">Advanced Search</span>
        <span id="item">Contact us</span>
        <span id="item">Theme FAQs</span>
        <span id="item">Consultant</span>
        <span id="item">Store Locations</span>
      </v-col>
      <v-col sm="3" style="gap: 10px" class="d-flex flex-column" cols="3">
        <span id="logo" class="text-h4"
          ><img src="@/assets/images/footer-logo.webp"
        /></span>

        <span
          ><v-icon>mdi-map-marker</v-icon> 685 Market Street San Francisco, CA
          94105. US</span
        >
        <span><v-icon>mdi-phone</v-icon>Call us at (415) 555-5555</span>

        <span>
          <br />
        </span>
        <v-row id="links" style="">
          <v-icon
            style="
              height: 50px;
              width: 50px;
              border-radius: 30px;
              background-color: black;
              color: white;
            "
            >mdi-facebook</v-icon
          >
          <v-icon
            style="
              height: 50px;
              width: 50px;
              border-radius: 30px;
              background-color: black;
              color: white;
            "
            >mdi-instagram</v-icon
          >
          <v-icon
            style="
              height: 50px;
              width: 50px;
              border-radius: 30px;
              background-color: black;
              color: white;
            "
            >mdi-twitter</v-icon
          >
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row style="background-color: white">
      <v-col
        cols="6"
        sm="6"
        style="display: flex; justify-content: flex-start; align-items: center"
      >
        <span style="position: relative; left: 10px"
          ><h6>
            @ 2025 Ella Demo All Rights Reserved.Powered By Eihap karam
          </h6></span
        >
      </v-col>
      <v-col
        cols="6"
        id="payway"
        sm="6"
        style="display: flex; justify-content: flex-end"
        ><img
          style="width: 60px; height: 50px"
          src="@/assets/SVGS/paypal.svg"
        />
        <img
          style="width: 60px; height: 50px"
          src="@/assets/SVGS/mastercard.svg"
        />
        <img
          style="width: 60px; height: 50px"
          src="@/assets/SVGS/american-express.svg"
        />
        <img style="width: 60px; height: 50px" src="@/assets/SVGS/visa.svg" />
        <img style="width: 60px; height: 50px" src="@/assets/SVGS/pay.svg" />
        <img
          style="width: 60px; height: 50px"
          src="@/assets/SVGS/discover.svg"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#item {
  opacity: 0.6;
  cursor: pointer;
}
#tital {
  font-size: large;
  font-weight: 500px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#foot {
  padding-right: 15px;
  position: relative;
  margin-top: 15px;
  width: 100%;
}
#links {
  position: relative;
  left: -10px;
  gap: 5px;
  display: flex;
  justify-content: center;
}
/*/mobile/*/
@media (max-width: 500px) {
  #foot {
    padding-right: 10px;
    width: 100%;
    top: 0px;
  }
  #logo {
    position: absolute;
    top: 600px;
    left: 10px;
    width: 100px;
  }
  #links {
    display: flex;
    flex-flow: row, nowrap;
    position: relative;
    width: 200px;
    top: 120px;
    left: -100px;
  }
  #payway {
    position: relative;
    top: 50px;
  }
}
</style>
