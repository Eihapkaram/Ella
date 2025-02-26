<template>
  <div class="about">
    <div v-for="cat in this.catigory0" :key="cat.name">{{ cat.name }}</div>
    <v-avatar :image="this.imgurl"></v-avatar>
    <v-file-input
      v-model:model-value="this.img"
      @update:model-value="readerfun()"
      chips
      multiple
      id="fileinput"
      type="file"
      label="up youer file"
      >up load file</v-file-input
    >
    <v-skeleton-loader
      width="300"
      class="mx-auto my-8"
      :loading="this.lodin"
      type="card"
    >
      <v-card ripple elevation="5" width="300" class="mx-auto my-8">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>
        <v-card-item max-width="344" title="mytitle" subtitle="my">
          <v-card-text
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est
            ipsam odit praesentium impedit a voluptatum molestiae, ipsa,
            blanditiis porro quas! Impedit eos sapiente dolores voluptate
            quidem, distinctio quis fugiat?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card-item>
      </v-card>
    </v-skeleton-loader>
    <v-card class="d-flex flex-wrap gap-10 justfiy-center align-center gap-50">
      <v-card
        class="align-center flex-0 0 100%"
        width="300"
        v-for="passenger in this.postsh"
        :key="passenger.id"
      >
        <v-avatar :image="passenger.logo"></v-avatar>
        <v-card-item>
          <v-card-title>{{ passenger.name }}</v-card-title>
          <v-card-subtitle>{{ passenger.id }}</v-card-subtitle>
          <v-card-text></v-card-text>
        </v-card-item>
      </v-card>
    </v-card>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="this.postshg.totalPages"
        @update:model-value="getpost()"
        :total-visible="7"
      ></v-pagination>
    </div>

    <v-container>
      <v-rating
        v-model="rat"
        half-increments
        hover
        ripple
        :length="10"
        :size="20"
        active-color="orange"
      />
      {{ rat }}
      <v-icon>mdi-home</v-icon>
      <h1>This is an about page</h1>
      <v-card class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4 mb-2">
          <v-chip-group
            v-model="selection"
            selected-class="bg-deep-purple-lighten-2"
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn
            color="deep-purple-lighten-2"
            text="Reserve"
            block
            border
            @click="reserve"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mystore } from "@/store";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      load: "",
      page: "",
      rat: "",
      postsh: "",
      postshg: [],
      lodin: "",
      imgurl: "",
      img: "",
    };
  },
  computed: {
    ...mapState(mystore, ["catigory0"]),
  },
  methods: {
    ...mapActions(mystore, ["getcatigories"]),
    readerfun() {
      if (!this.img[0]) return;
      const file = this.img[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.imgurl = reader.result;
        console.log(reader.result);
      });
    },

    async getpost() {
      await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${this.page}&size=10`
      )
        .then((res) => {
          let con = res.json();
          return con;
        })
        .then((con) => {
          this.postsh = con.data;
        });
    },
    getpost2() {
      fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${this.page}&size=10`
      )
        .then((res) => {
          let con = res.json();
          return con;
        })
        .then((con) => {
          this.postshg = con;
        });
    },
  },
  async mounted() {
    this.getcatigories();
    this.load = true;
    await this.getpost2();
    setTimeout(() => {
      this.lodin = false;
    }, 400);
    let top = document.querySelector(".about");
    window.onscroll = () => {
      if (window.scrollY >= top.offsetTop) {
        document.querySelector("nav").style.display = "fixed";
      }
    };
  },
};
</script>
