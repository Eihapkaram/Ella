<template>
  <div style="position: relative" id="co">
    <v-slide-group
      class="mx-auto"
      style="width: 100%"
      id="slide-group"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    >
      <v-slide-group-item id="item" style="width: 100px">
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img id="item-img" src="@/assets/SVGS/truck.svg"
              /></v-icon>
              Free shipping & Returns
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item>
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img
                  id="item-img"
                  height="30px"
                  src="@/assets/SVGS/guarantee.svg"
              /></v-icon>
              Lowest Price guarantee</v-card-title
            >
          </v-card-item>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item>
        <v-card id="item">
          <v-card-item>
            <v-card-title
              ><v-icon
                ><img id="item-img" src="@/assets/SVGS/trophy.svg"
              /></v-icon>
              Longest Warranties Offer</v-card-title
            >
          </v-card-item>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
#item {
  width: 350px;
  color: gray;
  border-inline-start: 2px solid rgba(10, 9, 9, 30%);
}
#slide-group {
  position: relative;
  left: px;
  padding-left: 100px;
}
#co {
  position: relative;
  top: -60px;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
}
/*/mobile/*/
@media (max-width: 500px) {
  #slide-group {
    position: relative;
    left: px;
    padding-left: 18px;
  }
  #co {
    position: relative;
    top: -90px;
  }
}
</style>
