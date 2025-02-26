<template>
  <div id="co1">
    <div id="offercon">
      <v-slide-group
        class="mx-auto"
        id="slide-group2"
        prev-icon="mdi-arrow"
        next-icon="mdi-arrow"
      >
        <v-slide-group-item id="item2">
          <v-card id="item2">
            <v-card-item id="caritem">
              <img id="item2-img" src="@/assets/images/playstations.webp" />
            </v-card-item>
          </v-card>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-card id="item2">
            <v-card-item id="caritem2">
              <img id="item2-img" src="@/assets/images/chairs.webp" />
            </v-card-item>
          </v-card>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-card id="item2">
            <v-card-item id="caritem3">
              <img id="item2-img" src="@/assets/images/headset.webp" />
            </v-card-item>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
    <v-container>
      <div id="offer2">
        <img id="img3" src="@/assets/images/iphones.webp" />
        <img id="img4" src="@/assets/images/laptops.webp" />
      </div>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#slide-group2 {
  position: relative;
  display: flex;
  justify-content: center;
}
#item2 {
  width: 450px;
  background-color: transparent;
}
#item2-img {
  width: 400px;
  border-radius: 15px;
}
#item2:hover {
  scale: 1.1;
  transition: all, 2s;
}
#offercon {
  background-color: rgb(243, 237, 237);
}
#img3 {
  width: 600px;
  border-radius: 15px;
}
#img3:hover {
  scale: 0.9;
  transition: all, 2s;
}
#img4 {
  width: 600px;
  border-radius: 15px;
}
#img4:hover {
  scale: 0.9;
  transition: all, 2s;
}
#offer2 {
  display: flex;
  justify-content: center;
  gap: 40px;
  position: relative;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #item2 {
    width: 400px;
    background-color: transparent;
  }
  #item2-img {
    width: 390px;
  }
  #offer2 {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: relative;
  }
  #img3 {
    width: 390px;
  }
  #img4 {
    width: 390px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #caritem {
    padding-right: 0px;
    margin-left: -90px;
  }
  #caritem2 {
    margin-left: -70px;
  }
  #caritem3 {
    margin-left: -70px;
  }
  #item2 {
    width: 280px;
    background-color: transparent;
    margin-right: -75px;
    padding-left: 0px;
  }
  #item2-img {
    width: 200px;
  }
  #offer2 {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: relative;
  }
  #img3 {
    width: 200px;
  }
  #img4 {
    width: 200px;
  }
  #co1 {
    top: -100px;
    position: relative;
  }
}
</style>
