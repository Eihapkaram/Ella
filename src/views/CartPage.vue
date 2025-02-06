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

      <v-progress-linear
        color="deep-orange"
        height="10"
        id="progrees"
        style="z-index: 5"
        :model-value="this.total[this.total.length - 1] / 7"
        striped
      ></v-progress-linear>

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
  top: -100px;
  position: relative;
  left: 15px;
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
    top: -100px;
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
