<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <v-list style="display: block">
        <v-list-item id="link0">
          <router-link :to="{ name: 'home' }">home</router-link>
        </v-list-item>
        <v-list-item
          v-for="cat in this.catigoryies"
          :key="cat.titel"
          id="link0"
          style="display: block"
          ><router-link
            style="display: block"
            id="linkcat2"
            :to="{
              name: 'catigory',
              params: { catigory: cat.route },
            }"
            >{{ cat.titel }}</router-link
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer location="left" v-model="this.drawermenu">
      <v-row justify="end">
        <v-col cols="6" id="menu"
          ><h4 style="font-weight: 500px">menu</h4></v-col
        >
        <v-col cols="6">
          <v-icon
            id="closemenu"
            style="cursor: pointer; z-index: 10"
            @click="this.drawermenu = false"
            >mdi-close</v-icon
          >
          <v-col cols="12" lg="6" md="6" sm="4" id="langhelp">
            <v-menu eager id="lang" activator="#btnlang">
              <v-list style="background-color: beige; width: 100%">
                <v-list-item
                  width="100%"
                  active-color="red"
                  base-color="blue"
                  append-icon="mdi-en"
                >
                  <v-list-item-title>en</v-list-item-title>
                  <v-icon
                    ><img width="20px" src="@/assets/SVGS/en-lang.svg"
                  /></v-icon>
                </v-list-item>

                <v-list-item append-icon="@/assets/SVGS/de-lang.svg">
                  <v-list-item-title>de</v-list-item-title>
                  <v-icon
                    ><img width="20px" src="@/assets/SVGS/de-lang.svg"
                  /></v-icon>
                </v-list-item>
              </v-list>
            </v-menu>

            <div id="nav-icon-text0" style="display: flex; flex-flow: column">
              <span><v-text-h6>sgin</v-text-h6></span>
              <v-icon size="30px" id="gropicon0" ripple
                >mdi-account-outline</v-icon
              >
            </div>
            <span style="cursor: pointer" id="btnlang">
              lang<v-icon
                ><img width="20px" src="@/assets/SVGS/en-lang.svg"
              /></v-icon>
            </span>
            <span style="cursor: pointer">
              help<v-icon
                ><img width="20px" src="@/assets/SVGS/help.svg"
              /></v-icon>
            </span>
          </v-col>
        </v-col>
      </v-row>
      <v-list style="display: block">
        <v-list-item id="link0">
          <router-link :to="{ name: 'home' }">home</router-link>
        </v-list-item>
        <v-list-item
          v-for="cat in this.catigoryies"
          :key="cat.titel"
          id="link0"
          style="display: block"
          ><router-link
            style="display: block"
            id="linkcat2"
            :to="{
              name: 'catigory',
              params: { catigory: cat.route },
            }"
            >{{ cat.titel }}</router-link
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      id="drowerCArt"
      width="500"
      location="right"
      v-model="drawerCart"
    >
      <v-container>
        <v-row justify="end"
          ><v-icon
            id="closecart"
            style="cursor: pointer; z-index: 10"
            @click="this.drawerCart = false"
            >mdi-close</v-icon
          ></v-row
        >
        <v-row
          id="headerCart"
          class="d-flex flex-column"
          style="height: fit-content; position: static"
        >
          <span class="text-h4">Shopping Cart</span>
          <span>items : {{ this.CartProduct.length }}</span>
          <v-progress-linear
            color="deep-orange"
            height="10"
            style="z-index: 5"
            :model-value="this.CartProduct.length * 20"
            striped
          ></v-progress-linear>
        </v-row>
        <div id="itemCartcon">
          <v-row
            id="cartrow"
            style=""
            v-for="item in this.CartProduct"
            :key="item.id"
          >
            <v-table id="trcart" style="width: 100%; margin-bottom: 60px">
              <thead>
                <th>product</th>
                <th id="thprice" style="padding-left: 10px">price</th>
                <th id="thqunt" width="200px">qunanitiy</th>
                <th>title</th>
              </thead>
              <tr>
                <td>
                  <img id="cartimgside" style="" :src="item.thumbnail" />
                </td>
                <td>
                  <div>
                    <span style="color: brown; width: 100px"
                      >{{ Math.ceil(item.price) * item.quantity }}$</span
                    >
                  </div>
                </td>
                <td>
                  <span style="color: brown">{{ item.quantity }}</span>
                </td>
                <td>
                  <div style="width: 135px">
                    <span>{{ item.title }}</span>
                  </div>
                </td>
                <td>
                  <v-icon
                    id="closeitemcart"
                    @click="this.delitem(item.id)"
                    style="position: relative; top: -60px"
                    >mdi-close</v-icon
                  >
                </td>
              </tr>
            </v-table>
          </v-row>
        </div>
        <v-div id="conCartBtn" class="d-flex flex-column">
          <br />
          <v-btn
            @click="this.delcart()"
            class="bg-blue"
            id="btnadd"
            variant="outline"
            width="500px"
            prepend-icon="mdi-delete-empty"
            >check out</v-btn
          >

          <v-btn
            @click="this.$router.push({ name: 'CartPage' })"
            class="bg-black"
            id="btnadd"
            variant="outline"
            width="500px"
            prepend-icon="mdi-cart"
            >view cart</v-btn
          >
        </v-div>
      </v-container>
    </v-navigation-drawer>

    <v-navigation-drawer
      id="drowerSearch"
      width="500"
      location="right"
      v-model="drawerSearch"
    >
      <v-container>
        <v-row justify="center">
          <header><h3>search in ella</h3></header>
        </v-row>
        <v-row justify="center">
          <span style="position: relative">
            <v-form
              id="formsearch"
              style="display: flex; gap: 10px"
              class="justfiy-center align-center"
              @submit.prevent="this.Search(this.searchvalue)"
            >
              <input
                id="searchinputforderwer"
                style="outline: none"
                class=""
                type="search"
                placeholder="search"
                v-model="this.searchvalue"
              />
              <v-btn
                id="btn-closeserchderwoer"
                style=""
                elevation="outline"
                @click="this.drawerSearch = false"
                >censeal</v-btn
              >
            </v-form>
          </span>
        </v-row>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar
      id="mynave"
      style="position: absolute"
      height="160"
      class="bg-blue"
    >
      <v-container fluid>
        <v-row id="row1" class="d-flex justify-space-around">
          <v-col cols="12" lg="3" md="3" sm="2">
            <v-list nav id="logop">
              <v-list-item>
                <img id="logo" src="../assets/images/logo.png" />
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" lg="5" md="5" sm="2" id="search">
            <span style="position: relative">
              <v-form @submit.prevent="this.Search(this.searchvalue)">
                <input
                  id="searchinput"
                  style="outline: none"
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
            cols="12"
            lg="3"
            md="3"
            sm="2"
            id="gruopicon"
            style="display: flex; flex-flow: row; position: relative"
            ><v-app-bar-nav-icon id="gropicon-text" @click="openaside()">
              <div id="nav-icon-text">
                <v-icon size="40px" class="gropicont" id="gropicon1" ripple
                  >mdi-menu</v-icon
                >
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
              <div
                @click="this.drawerCart = !this.drawerCart"
                id="nav-icon-text"
              >
                <v-icon size="40px" class="gropicont" id="gropicon" ripple
                  >mdi-cart-outline</v-icon
                ><span>cart</span>
              </div>
            </v-app-bar-nav-icon>
            <v-app-bar-nav-icon id="gropicon-text">
              <div id="nav-icon-text">
                <v-icon size="40px" id="gropicon" ripple
                  >mdi-account-outline</v-icon
                >
                <span><v-text-h6>sgin</v-text-h6></span>
              </div>
            </v-app-bar-nav-icon>
            <v-app-bar-nav-icon id="gropicon-text">
              <div
                @click="$router.push({ name: 'listpage' })"
                id="nav-icon-text"
              >
                <v-icon size="40px" class="gropicont" id="gropicon" ripple
                  >mdi-heart-outline</v-icon
                ><v-badge
                  offset-x="8"
                  offset-y="-55"
                  color="orange"
                  max="5"
                  :content="this.list.length"
                ></v-badge>
                <span><v-text-h6>Lists</v-text-h6></span>
              </div>
            </v-app-bar-nav-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="7"
            md="7"
            sm="12"
            style="display: flex; flex-flow: row nowrap; position: relative"
            ><v-list id="catigorylinks" class="d-flex">
              <v-list-item active="true" id="link">
                <router-link :to="{ name: 'home' }">home</router-link>
              </v-list-item>
              <v-list-item
                ><router-link
                  id="linkcat"
                  v-for="cat in this.catigoryies"
                  :key="cat.titel"
                  :to="{
                    name: 'catigory',
                    params: { catigory: cat.route },
                  }"
                  >{{ cat.titel }}</router-link
                ></v-list-item
              >
            </v-list>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="4" id="langhelp">
            <v-menu eager id="lang" activator="#btnlang">
              <v-list style="background-color: beige; width: 100%">
                <v-list-item
                  width="100%"
                  active-color="red"
                  base-color="blue"
                  append-icon="mdi-en"
                >
                  <v-list-item-title>en</v-list-item-title>
                  <v-icon
                    ><img width="20px" src="@/assets/SVGS/en-lang.svg"
                  /></v-icon>
                </v-list-item>

                <v-list-item append-icon="@/assets/SVGS/de-lang.svg">
                  <v-list-item-title>de</v-list-item-title>
                  <v-icon
                    ><img width="20px" src="@/assets/SVGS/de-lang.svg"
                  /></v-icon>
                </v-list-item>
              </v-list>
            </v-menu>
            <span style="cursor: pointer" id="btnlang">
              lang<v-icon
                ><img width="20px" src="@/assets/SVGS/en-lang.svg"
              /></v-icon>
            </span>
            <span style="cursor: pointer">
              help<v-icon
                ><img width="20px" src="@/assets/SVGS/help.svg"
              /></v-icon>
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <FixedNav @opne="openaside()" @openCart="openCart()" />
    <ResponsiveNav
      @opneMune="openamenu()"
      @openCart="openCart()"
      @openSearch="openSearch()"
    />
    <v-main> <slot></slot> </v-main>
  </v-layout>
</template>
<script>
import { mystore } from "@/store";
import { CartStore1 } from "@/store/Cart";
import { ListsStore1 } from "@/store/Lists";
import ResponsiveNav from "./Home/ResponsiveNav.vue";
import { mapState, mapActions } from "pinia";
import FixedNav from "./Home/FixedNav.vue";
export default {
  components: { FixedNav, ResponsiveNav },
  data() {
    return {
      drawer: false,
      drawerCart: false,
      drawermenu: false,
      drawerSearch: false,
      quant: 1,
      localitem: "",
      todolist: [],
      searchvalue: "",
    };
  },
  computed: {
    ...mapState(mystore, ["catigoryies", "searchrsult"]),
    ...mapState(CartStore1, ["CartProduct"]),
    ...mapState(ListsStore1, ["list"]),
  },
  methods: {
    openCart() {
      this.drawerCart = !this.drawerCart;
    },
    openSearch() {
      this.drawerSearch = !this.drawerSearch;
    },
    openaside() {
      this.drawer = !this.drawer;
    },
    openamenu() {
      this.drawermenu = !this.drawermenu;
    },
    Search(data) {
      this.$router.push({ name: "searchpage" });
      this.getSearchProduct(data);
    },
    delcart() {
      this.CartProduct.splice(0, 1);
    },

    ...mapActions(mystore, ["getcatigories", "getSearchProduct"]),
    ...mapActions(CartStore1, ["GetCart", "delitem", "update"]),
    ...mapActions(ListsStore1, ["updateL", "GetCartL"]),
  },
  async mounted() {
    await this.updateL();
    await this.GetCartL();
    await this.update();
    await this.GetCart();
    await this.getcatigories();
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: orange;
  }
}
input {
  background-color: azure;
  height: 50px;
  width: 400px;
  top: 8px;
  border-radius: 30px;
  padding-left: 15px;
  position: relative;
  left: -90px;
}
#iconsearch {
  position: relative;
  left: 70px;
  top: 20px;
  z-index: 2;
  flex-flow: row-reverse;
}
#gropicon {
  margin: 10px;
  position: relative;
  color: rgb(247, 199, 109);
}
#gropicon1 {
  margin: 10px;
  position: relative;
}
#langhelp {
  display: flex;
  flex-flow: row-reverse;
  margin-left: -150px;
  position: relative;
  top: 15px;
  gap: 10px;
}
#lang {
  position: relative;
  left: 0px;
  top: 0px;
}
#nav-icon-text {
  display: flex;
  flex-flow: column;
}
#gropicon-text {
  margin-left: 20px;
}
#logop {
  background-color: transparent;
  position: relative;
  left: -80px;
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
#link {
  cursor: pointer;
}
#navlistlng {
  z-index: 5;
  position: fixed;
}
#linkcat {
  margin-left: 10px;
}
#headerCart {
  position: relative;
  top: 10px;
  margin-left: 0px;
  width: 96%;
  align-items: flex-start;
  background-color: white;
}
#qountbtn {
  position: relative;
  height: 50px;
  left: 0px;
  border-radius: 15px;
  border: 2px solid black;
  width: 80px;
}
#plus {
  position: relative;
  left: -20px;
  top: 5px;
  z-index: 3;
}
#munse {
  position: relative;
  left: 30px;
  top: 5px;
  z-index: 3;
}
#qointcon {
  display: flex;
  flex-flow: column;
  position: relative;
  background-color: white;
}
#conten {
  display: flex;
  flex-flow: column;
}
#itemCartcon {
  height: 400px;
  overflow-y: scroll;
}
#itemCartcon::-webkit-scrollbar {
  width: 5px;
}
#itemCartcon::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(0, 0, 0);
}
#itemCartcon::-webkit-scrollbar-track {
  width: 5px;
  background-color: rgb(253, 253, 253);
}
#itemCartcon::-webkit-scrollbar-button {
  display: none;
}
#drowerCArt::-webkit-scrollbar {
  width: 5px;
  display: none;
}
#btnadd {
  border-radius: 30px;
  height: 50px;
}
#conCartBtn {
  justify-content: center;
  align-items: center;
  gap: 10px;
}
#cartrow {
  height: fit-content;
  position: relative;
  margin-bottom: 30px;
  width: 98%;
  top: 100px;
}
#cartimgside {
  position: relative;
  left: -10px;
  width: 150px;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #mynave {
    display: none;
  }
  #langhelp {
    left: 100px;
    position: relative;
  }
  #closemenu {
    position: relative;
    left: 40px;
  }
  #menu {
    position: relative;
    left: -30px;
  }
  #searchinputforderwer {
    position: relative;
    left: auto;
    background-color: azure;
  }
  #formsearch {
    justfiy-content: center;
  }
  #btn-closeserchderwoer {
    border-radius: 50px;
    width: 80px;
    top: 6px;
    height: 49px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #cartimgside {
    position: relative;
    left: -10px;
    width: 100px;
  }
  #cartrow {
    width: 150%;
  }
  #langhelp {
    left: 20px;
    position: relative;
  }
  #mynave {
    display: none;
  }
  #closemenu {
    position: relative;
    left: 40px;
  }
  #menu {
    position: relative;
    left: -30px;
  }
  #searchinputforderwer {
    position: relative;
    left: 2.5rem;
    background-color: azure;
  }
  #iconsearch2 {
    position: relative;
    top: 20px;
    z-index: 2;
    flex-flow: row-reverse;
  }
  #btn-closeserchderwoer {
    border-radius: 50px;
    width: 80px;
    left: -53px;
    top: 6px;
    height: 49px;
  }
  #link0:hover {
    background-color: rgb(224, 224, 224);
  }
  #closecart {
    left: -10px;
  }
  #closeitemcart {
    left: -200px;
  }
}
</style>
