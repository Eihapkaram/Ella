<template>
  <div>
    <v-banner
      style="
        height: fit-content;
        width: 100%;
        object-fit: cover;
        position: relative;
        left: -5px;
      "
    >
      <span
        class="d-flex"
        style="
          flex-flow: row, nowrap;
          position: absolute;
          z-index: 5;
          left: 45%;
          top: 20px;
        "
        ><h3 class="d-flex" style="flex-flow: row, nowrap">
          <h3 style="color: aqua; margin-right: 5px">why shop</h3>
          <h3 style="color: white">with us?</h3>
        </h3></span
      >

      <img
        width="100%"
        height="250px"
        src="@/assets/images/why-shop-with-us-banner.webp"
      />
      <div
        style="
          z-index: 15;
          position: absolute;
          width: 98.5%;
          display: flex;
          flex-flow: row;
          justify-content: space-evenly;
          gap: 40px;
        "
      >
        <span style="position: relative; background-color: transparent">
          <img
            id="imgicon"
            width="50px"
            height="50px"
            src="@/assets/images/free-shipping.png"
          />
          <v-card-item>
            <v-card-title style="color: white"
              ><h5>free-shipping</h5></v-card-title
            >
            <v-card-subtitle style="color: white"
              >praest suscipit mattis facilisis</v-card-subtitle
            >
            <v-card-actions
              ><a href="#" style="color: white">Learn more</a></v-card-actions
            >
          </v-card-item>
        </span>
        <span style="position: relative; background-color: transparent">
          <img
            id="imgicon"
            width="50px"
            height="50px"
            src="@/assets/images/weekly-flash-sales.png"
          />
          <v-card-item>
            <v-card-title style="color: white"
              ><h5>Weekly Flash Sales</h5></v-card-title
            >
            <v-card-subtitle style="color: white"
              >praest suscipit mattis facilisis</v-card-subtitle
            >
            <v-card-actions
              ><a href="#" style="color: white">Learn more</a></v-card-actions
            >
          </v-card-item>
        </span>
        <span style="position: relative; background-color: transparent">
          <img
            id="imgicon"
            width="50px"
            height="50px"
            src="@/assets/images/discount.png"
          />
          <v-card-item>
            <v-card-title style="color: white"
              ><h5>Anual Payment Discount</h5></v-card-title
            >
            <v-card-subtitle style="color: white"
              >praest suscipit mattis facilisis</v-card-subtitle
            >
            <v-card-actions
              ><a href="#" style="color: white">Learn more</a></v-card-actions
            >
          </v-card-item>
        </span>
        <span style="position: relative; background-color: transparent">
          <img
            id="imgicon"
            width="50px"
            height="50px"
            src="@/assets/images/cash-back.png"
          />
          <v-card-item>
            <v-card-title
              ><h5 style="color: white">
                Cashback Reward program
              </h5></v-card-title
            >
            <v-card-subtitle style="color: white"
              >praest suscipit mattis facilisis</v-card-subtitle
            >
            <v-card-actions
              ><a href="#" style="color: white">Learn more</a></v-card-actions
            >
          </v-card-item>
        </span>
      </div>
    </v-banner>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped>
#imgicon:hover {
  scale: 1.2;
}
</style>
