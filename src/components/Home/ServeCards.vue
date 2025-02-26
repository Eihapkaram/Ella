<template>
  <div>
    <div id="offercon">
      <v-slide-group
        class="mx-auto"
        id="slide-group2"
        prev-icon="mdi-chevron-left"
        next-icon="mdi-chevron-right"
      >
        <v-slide-group-item id="slid">
          <v-card id="item2">
            <v-card-item>
              <img id="item2-img" src="@/assets/SVGS/quality-icon.svg" />
              <v-card-title>Quality and Saving</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae reprehenderit animi consectetur quibusdam, corrupti
                necessitatibus repellendus dicta laboriosam expedita.
                Repudiandae dolore, odit hic maiores rem ab illum possimus atque
                quod.</v-card-text
              >
            </v-card-item>
          </v-card>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-card id="item2">
            <v-card-item>
              <img id="item2-img" src="@/assets/SVGS/warehouse.svg" />
              <v-card-title>Global Warehouse</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                reprehenderit est veniam cum cumque voluptatibus expedita
                laboriosam odit quisquam voluptatem minima, consequuntur culpa
                laborum ea autem. Veritatis animi magnam vero!</v-card-text
              >
            </v-card-item>
          </v-card>
        </v-slide-group-item>
        <v-slide-group-item>
          <v-card id="item2">
            <v-card-item>
              <img id="item2-img" src="@/assets/SVGS/fast-shipping.svg" />
              <v-card-title>Fast shipping</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                pariatur laboriosam est fugiat repellendus atque harum esse,
                facere rerum quae temporibus explicabo impedit officia sapiente
                reiciendis fugit praesentium quasi mollitia?</v-card-text
              >
            </v-card-item>
          </v-card>
          <v-card id="item2">
            <v-card-item>
              <img id="item2-img" src="@/assets/SVGS/secure-payment.svg" />
              <v-card-title>Payment securety</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                pariatur laboriosam est fugiat repellendus atque harum esse,
                facere rerum quae temporibus explicabo impedit officia sapiente
                reiciendis fugit praesentium quasi mollitia?</v-card-text
              >
            </v-card-item>
          </v-card>
          <v-card id="item2">
            <v-card-item>
              <img id="item2-img" src="@/assets/SVGS/questions.svg" />
              <v-card-title>Have Questions</v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                pariatur laboriosam est fugiat repellendus atque harum esse,
                facere rerum quae temporibus explicabo impedit officia sapiente
                reiciendis fugit praesentium quasi mollitia?</v-card-text
              >
            </v-card-item>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
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
#slid {
  display: flex;
  justify-content: center;
  align-items: center;
}
#item2 {
  width: 250px;
  height: auto;
  margin-inline: 10px;
  background-color: white;
}
#item2-img {
  width: 100px;
}
#item2:hover {
  background-color: aquamarine;
}
#offercon {
  background-color: rgb(243, 237, 237);
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}
#img3 {
  width: 600px;
}
#img4 {
  width: 600px;
}
#offer2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border: 2px solid black;
  position: relative;
}
</style>
