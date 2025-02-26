<template>
  <v-app-bar
    id="nav1"
    style="position: fixed; top: 0px"
    height="100"
    width="100%"
    class="bg-white"
  >
    <v-container fluid>
      <v-row id="" class="d-flex justify-space-around">
        <v-col cols="3" md="3">
          <v-list nav id="logop">
            <v-list-item>
              <img
                @click="this.$router.push({ name: 'home' })"
                id="logo"
                src="@/assets/images/footer-logo.webp"
              />
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="3" id="searshcol">
          <span style="position: relative">
            <v-form @submit.prevent="this.Search(this.searchvalue)">
              <input
                id="searchinput"
                style="outline: none; background-color: rgb(224, 224, 224)"
                class=""
                type="search"
                placeholder="search"
                v-model="this.searchvalue"
              /><v-icon
                @click="this.Search(this.searchvalue)"
                style="position: absolute"
                ripple
                color="black"
                id="iconsearch"
                >mdi-magnify</v-icon
              >
            </v-form>
          </span>
        </v-col>
        <v-col
          cols="6"
          md="2"
          id="icons"
          style="display: flex; flex-flow: row; position: relative"
          ><v-app-bar-nav-icon id="gropicon-text" @click="this.openMune()">
            <div id="nav-icon-text">
              <v-icon size="40px" id="gropicon" ripple>mdi-menu</v-icon>
              <span>menu</span>
            </div>
            <v-badge
              offset-x="-55"
              offset-y="-35"
              color="orange"
              max="5"
              :content="this.CartProduct.length"
            ></v-badge>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon id="gropicon-text">
            <div @click="openCart()" id="nav-icon-text">
              <v-icon size="40px" id="gropicon" ripple>mdi-cart-outline</v-icon
              ><span>cart</span>
            </div>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon id="gropicon-text">
            <div @click="$router.push({ name: 'listpage' })" id="nav-icon-text">
              <v-icon size="40px" id="gropicon" ripple>mdi-heart-outline</v-icon
              ><v-badge
                offset-x="8"
                offset-y="-45"
                color="orange"
                max="5"
                :content="this.list.length"
              ></v-badge>
              <span><v-text-h6>Lists</v-text-h6></span>
            </div>
          </v-app-bar-nav-icon>
          <v-app-bar-nav-icon class="gropicon-textsearch" id="gropicon-text">
            <div @click="openSearch()" id="nav-icon-text">
              <v-icon
                style="
                  border-radius: 30px;
                  background-color: rgb(224, 224, 224);
                  padding: 20px;
                "
                size="30px"
                id="gropiconsearch"
                ripple
                >mdi-magnify</v-icon
              >
            </div>
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { CartStore1 } from "@/store/Cart";
import { ListsStore1 } from "@/store/Lists";
import { mystore } from "@/store";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      drawer: false,
      drawerCart: false,
    };
  },
  computed: {
    ...mapState(mystore, ["catigoryies"]),
    ...mapState(CartStore1, ["CartProduct"]),
    ...mapState(ListsStore1, ["list"]),
  },
  methods: {
    ...mapActions(mystore, ["getcatigories", "getSearchProduct"]),
    Search(data) {
      this.$router.push({ name: "searchpage" });
      this.getSearchProduct(data);
    },
    openMune() {
      this.$emit("opneMune");
    },
    openCart() {
      this.$emit("openCart");
    },
    openSearch() {
      this.$emit("openSearch");
    },

    ...mapActions(mystore, ["getcatigories"]),
  },
  async mounted() {
    await this.getcatigories();
  },
};
</script>
<style lang="css" scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: orange;
  }
}

#link {
  cursor: pointer;
}
#navlistlng {
  z-index: 5;
  position: fixed;
}
#linkcat {
  margin-left: 20px;
}
#gropicon {
  margin-left: 6px;
}
#headerCart {
  position: relative;
  top: 10px;
  margin-left: 0px;
  width: 96%;
  align-items: flex-start;
  background-color: white;
}
#nav-icon-text {
  display: flex;
  flex-flow: column;
}
#gropicon-text {
  margin-left: 10px;
}
#logop {
  background-color: transparent;
  position: relative;
  padding: 0px;
  padding-top: 5px;
  left: 0px;
}
#logo {
  height: fit-content;
  width: fit-content;
  cursor: pointer;
}
#catigorylinks {
  background-color: transparent;
  overflow: initial;
}
#row1 {
  position: relative;
  top: 10px;
}
#nav1 {
  display: none;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #nav1 {
    position: relative;
    left: -1000px;
    display: flex;
  }
  #nav-icon-text {
    display: flex;
    flex-flow: column;
  }
  #gropicon-text {
    position: relative;
    left: -60px;
  }
  #logop {
    background-color: transparent;
    position: relative;
    padding: 0px;

    padding-top: 5px;
  }
  #logo {
    height: fit-content;
    width: fit-content;
  }
  #catigorylinks {
    background-color: transparent;
    overflow: initial;
  }
  #row1 {
    position: relative;
    top: 10px;
  }
  #catigorylinks {
    position: relative;
    left: -40px;
  }
  #link {
    left: 80px;
    position: relative;
  }

  #logop {
    background-color: transparent;
    position: relative;
    left: -10px;
    width: 195px;
  }
  #langhelp {
    display: flex;
    flex-flow: row-reverse;
    margin-left: -70px;
    position: relative;
    top: 15px;
    gap: 10px;
  }
  #icons {
    left: 250px;
  }
  #gropiconsearch {
    display: none;
  }
  .gropicon-textsearch {
    display: hidden;
  }
  #iconsearch {
    position: relative;
    left: 80px;
    top: 20px;
    z-index: 2;
    flex-flow: row-reverse;
  }
  input {
    height: 50px;
    width: 200px;
    top: 8px;
    border-radius: 30px;
    padding-left: 15px;
    position: relative;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #logop {
    background-color: transparent;
    position: relative;
    left: -40px;
    width: 193px;
  }
  #icons {
    left: 3rem;
  }
  #searshcol {
    display: none;
  }
  #gropiconsearch {
    display: flex;
  }
  #nav1 {
    display: flex;
  }
}
</style>
