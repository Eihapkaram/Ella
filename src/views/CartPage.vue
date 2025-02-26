<template>
  <br />
  <div id="parantConten" style="">
    <v-breadcrumbs :items="this.itemurl">
      <template v-slot:divider>
        <v-icon icon="mdi-chevron-right"></v-icon>
      </template>
    </v-breadcrumbs>
    <v-row id="headerRow">
      <span id="header" class="text-h3">youer Cart</span>
      <br /><br /><br />
      <br />
      <div style="position: relative; width: 97.5%; height: fit-content">
        <svg
          :fill="`${
            this.total[this.total.length - 1] / 7 >= 50
              ? 'green'
              : this.total[this.total.length - 1] / 7 > 31
              ? 'orange'
              : this.total[this.total.length - 1] / 7 <= 30
              ? 'red'
              : ''
          }`"
          width="30px"
          class="icon-shipping-truck"
          :style="`position: absolute; left:calc(${
            this.total.length == 0
              ? 2
              : this.total[this.total.length - 1] / 7 >= 100
              ? 100
              : this.total[this.total.length - 1] / 7
          }% - 30px);transition:all,0.3s;top:-17px;`"
          viewBox="0 0 40.55 24"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="truck-body"
                d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
              ></path>
              <path
                class="truck-body"
                d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
              ></path>
              <path
                class="wheel"
                d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
              ></path>
              <path
                class="wheel"
                d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
              ></path>
            </g>
          </g>
        </svg>
        <v-progress-linear
          :color="`${
            this.total[this.total.length - 1] / 7 >= 50
              ? 'green'
              : this.total[this.total.length - 1] / 7 > 31
              ? 'orange'
              : this.total[this.total.length - 1] / 7 <= 30
              ? 'red'
              : ''
          }`"
          height="10"
          id="progrees"
          style="z-index: 5"
          :model-value="`${
            this.total.length == 0
              ? 2
              : this.total[this.total.length - 1] / 7 >= 0
              ? this.total[this.total.length - 1] / 7
              : ''
          }`"
          striped
        ></v-progress-linear>
      </div>

      <br />
    </v-row>
    <br />
    <v-row>
      <v-col cols="12" lg="7" md="7" sm="12" id="itemCartcon">
        <v-table id="itemCartcon" height="fit-content" fixed-header="true">
          <thead class="bg-black">
            <th style="border: 2px solid black" width="600px">product</th>
            <v-spacer></v-spacer>
            <th width="100px">price</th>
            <th width="100px">qunanitiy</th>
            <th>total</th>
          </thead>

          <br />

          <tr v-for="item in CartProduct" :key="item.id" id="trall">
            <td>
              <v-row justify="start" id="colditels">
                <v-divider></v-divider>
                <v-col cols="4">
                  <img
                    id="img"
                    height="100px"
                    width="100px"
                    :src="item.thumbnail"
                  />
                </v-col>
                <v-col
                  cols="12"
                  lg="7"
                  md="7"
                  sm="7"
                  style="position: relative; left: -0px; height: 100%"
                  align-self="center"
                  id="detilseproduct"
                >
                  <span class="text-h6">{{ item.title }}</span>
                  <div class="d-flex flex-row" style="gap: 10px">
                    <span style="opacity: 0.6"
                      >width: {{ item.dimensions.width }}</span
                    >
                    <span style="opacity: 0.6"
                      >height: {{ item.dimensions.height }}</span
                    >
                    <span style="opacity: 0.6"
                      >depth: {{ item.dimensions.depth }}</span
                    >
                  </div>
                </v-col>
              </v-row>
            </td>
            <v-spacer></v-spacer>
            <td>{{ Math.ceil(item.price) }}$</td>
            <td>
              <span
                id="qointcon"
                style="border-radius: 10px; border: 2px solid black"
              >
                <span>
                  <v-icon @click="muns(item), this.fun()" id="munse"
                    >mdi-minus</v-icon
                  >
                  <input id="qountbtn" type="button" :value="item.quantity" />
                  <v-icon @click="item.quantity++, this.fun()" id="plus"
                    >mdi-plus</v-icon
                  >
                </span>
              </span>
            </td>
            <td>
              <span class="text-subtitle-2"
                >{{ Math.ceil(item.price) * item.quantity }}$
              </span>
            </td>
            <td>
              <v-icon
                @click="this.delitem(item.id), this.fun()"
                style="position: relative; top: -60px"
                >mdi-close</v-icon
              >
            </td>
          </tr>
        </v-table>
      </v-col>
      <v-col id="samery" cols="12" lg="5" md="5" sm="12">
        <v-table id="inputs">
          <thead>
            <th class="text-h4">order sammury</th>
          </thead>
          <v-divider style="height: 50px"></v-divider>
          <tr style="" class="d-flex justfiy-start">
            <span class="text-h5">subtotal :</span>
            <v-spacer></v-spacer
            ><span style="position: relative; left: -20px" class="text-h5"
              >${{ this.total[this.total.length - 1] }}</span
            >
          </tr>
          <br />
          <v-divider></v-divider>
          <tr>
            <span>Get shipping Estimate </span>
          </tr>
          <tr class="d-flex">
            <select
              style="
                width: 90%;
                height: 50px;
                border: 1px solid black;
                border-radius: 15px;
                padding-left: 10px;
              "
              density="compact"
              label="Egypt"
            >
              <option v-for="(cant, i) in this.cantry" :key="i">
                {{ cant }}
              </option>
            </select>
            <v-icon
              style="z-index: 6; position: relative; left: -30px; top: 10px"
              >mdi-chevron-down</v-icon
            >
          </tr>
          <br />
          <tr class="d-flex">
            <select
              style="
                width: 50%;
                height: 50px;
                border: 1px solid black;
                border-radius: 15px;
                padding-left: 10px;
              "
              density="compact"
              label="Egypt"
            >
              <option v-for="(cant, i) in this.cantry" :key="i">
                {{ cant }}
              </option>
            </select>
            <v-icon
              style="z-index: 6; position: relative; left: -30px; top: 10px"
              >mdi-chevron-down</v-icon
            >
            <input
              style="
                width: 30%;
                height: 50px;
                border: 1px solid black;
                border-radius: 15px;
                padding-left: 10px;
              "
              type="number"
              placeholder="postal code"
            />
          </tr>
          <br />
          <tr class="d-flex justfiy-center">
            <v-btn
              @click="this.delcart()"
              class="bg-blue"
              id="btnadd"
              variant="outline"
              width="90%"
              style="border-radius: 15px"
              >culclite shipping</v-btn
            >
          </tr>
          <br />
          <v-divider></v-divider>
          <br />
          <tr class="d-flex justfiy-center">
            <div class="d-flex flex-column align-start" style="width: 95%">
              <span>Copone</span>
              <input
                style="
                  width: 95%;
                  height: 50px;
                  border: 1px solid black;
                  border-radius: 15px;
                  padding-left: 10px;
                "
                type="number"
                placeholder="enter copone code"
              />
            </div>
          </tr>
          <br />
          <v-divider></v-divider>
          <tr class="d-flex">
            <span>TOTAL :</span>
            <v-spacer></v-spacer>
            <span style="position: relative; left: -20px"
              >${{ this.total[this.total.length - 1] }}</span
            >
          </tr>
          <br />
          <v-divider></v-divider>
          <tr class="d-flex justfiy-center">
            <v-div
              id="conCartBtn"
              class="d-flex flex-column"
              style="
                width: 90%;
                align-self: center;
                position: relative;
                left: 30px;
              "
            >
              <br />
              <v-btn
                @click="this.$router.push({ name: 'checkpage' })"
                class="bg-blue"
                id="btnadd"
                variant="outline"
                width="90%"
                height="50px"
                prepend-icon="mdi-cart"
                >procseed to checkout</v-btn
              >
              <br />
              <v-btn
                @click="this.$router.go(-1)"
                class="bg"
                id="btnadd"
                variant="outline"
                width="90%"
                height="50px"
                >contune shoipping</v-btn
              >
            </v-div>
          </tr>
        </v-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { CartStore1 } from "@/store/Cart";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      quint: 1,
      nums: [],
      total: [],
      cantry: ["egypt", "us", "france", "africia"],
      itemurl: ["home", "cartpage"],
    };
  },
  methods: {
    ...mapActions(CartStore1, ["GetCart", "delitem", "update"]),
    muns(item) {
      let q = item.quantity;
      if (q == 1) {
        return;
      } else {
        item.quantity--;
      }
    },
    fun() {
      this.nums = [];
      this.total = [];
      this.CartProduct.forEach((el) => {
        let num = Math.ceil(el.price) * el.quantity;
        this.nums.push(num);
        let my = this.nums.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        this.total.push(my);
      });
    },
  },
  computed: { ...mapState(CartStore1, ["CartProduct"]) },
  async mounted() {
    window.scroll(0, 0);
    await this.GetCart();
    await this.fun();
  },
};
</script>

<style lang="css" scoped>
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
#parantConten {
  width: 100%;
  top: -200px;
  position: relative;
  left: 15px;
}
.v-table__wrapper {
  overflow: visible;
}
.v-table--fixed-height > .v-table__wrapper {
  overflow-y: visible;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #colditels {
    height: 250px;
    width: 100%;
  }
  #header {
    position: relative;
    width: 100%;
  }
  #parantConten {
    width: 96%;
    top: -250px;
  }
  #qointcon {
    width: 300px;
  }
  #inputs {
    margin-left: 40px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #colditels {
    height: 250px;
    width: 100%;
  }
  #inputs {
  }
  #img {
    position: relative;
    left: 25px;
    top: 25px;
  }
  #header {
    position: relative;
    width: 80%;
  }
  #parantConten {
    width: 100%;
    top: -250px;
  }
  #qointcon {
    width: 300px;
  }
  #itemCartcon {
    width: 100%;
  }
  #trall {
    width: 50%;
  }
  #progrees {
    width: 100%;
  }
  #parantConten {
    width: 90%;
  }
  #samery {
    position: relative;
    left: -10px;
  }
}
</style>
