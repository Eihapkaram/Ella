<template>
  <br />
  <div id="con2">
    <v-row>
      <v-col
        cols="12"
        lg="6"
        md="6"
        sm="12"
        style="background-color: "
        id="detilsechuck"
      >
        <div style="display: flex; flex-flow: column; position: relative">
          <span class="text-h4">new-ella-demo</span>
          <v-breadcrumbs :items="this.itemurl">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-row
          style="width: 100%; position: relative; left: 20px"
          align-content="center"
        >
          <span style="align-self: center" class="d-flex justfiy-center mx-auto"
            >Express checkout</span
          >
        </v-row>
        <v-row>
          <div
            style="
              display: flex;
              justify-content: center;
              margin-inline: auto;
              width: 500px;
              gap: 10px;
            "
          >
            <v-btn
              @click="this.$router.push({ name: 'checkpage' })"
              class="bg-blue"
              id="btnadd"
              variant="outline"
              width="40%"
              height="50px"
              prepend-icon="@/assets/SVGS/checkout-shop.svg"
            >
              <img height="20px" src="@/assets/SVGS/checkout-shop.svg" />
            </v-btn>
            <br />
            <v-btn
              @click="this.$router.go(-1)"
              class="bg-black"
              id="btnadd"
              variant="outline"
              width="40%"
              height="50px"
              prepend-icon="@/assets/SVGS/checkout-google.svg"
              ><img src="@/assets/SVGS/checkout-google.svg"
            /></v-btn>
          </div>
        </v-row>
        <br />
        <br />
        <v-row class="justfiy-center" id="or">
          <v-divider class="mx-auto" length="200"></v-divider> OR
          <v-divider class="mx-auto" length="200"></v-divider>
        </v-row>
        <v-row>
          <span class="ml-10">contact</span>
          <v-spacer></v-spacer>
          <span class="mr-10">have an account?<a href="#">login</a></span>
        </v-row>
        <br />
        <v-form @submit.prevent style="position: relative; left: 10px">
          <v-text-field
            v-model="this.email"
            label="E-mail"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="email me with news and offers"
            required
          ></v-checkbox>
          <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        </v-form>
        <br />
        <v-radio-group required>
          <v-radio
            true-icon="mdi-truck-cargo-container"
            label="ship"
            value="one"
          ></v-radio>
          <v-radio
            true-icon="mdi-car-pickup"
            label="pick up"
            value="two"
          ></v-radio>
        </v-radio-group>
        <v-row style="position: relative; left: 20px"
          ><span>shipping address</span></v-row
        >
        <br />
        <br />
        <v-row
          style="
            position: relative;
            left: 20px;
            display: flex;
            flex-flow: column;
          "
        >
        </v-row>
        <form @submit.prevent>
          <v-row style="position: relative; left: 5px">
            <v-col cols="12">
              <select
                style="
                  width: 100%;
                  height: 50px;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                density="cuntery"
                placeholder="your cuntery"
              >
                <option v-for="(cant, i) in this.cantry" :key="i">
                  {{ cant }}
                </option>
              </select>
            </v-col>
            <v-col cols="12">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="address"
              />
            </v-col>
            <v-col cols="6">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="enter first name"
              />
            </v-col>
            <v-col cols="6">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="enter last name"
              />
            </v-col>
            <v-col cols="12">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="enter address"
              />
            </v-col>
            <v-col cols="12">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="aprtment"
              />
            </v-col>
            <v-col cols="4">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="city"
              />
            </v-col>
            <v-col cols="4">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                required
                type="text"
                placeholder="gavernite"
              />
            </v-col>
            <v-col cols="4">
              <input
                style="
                  width: 100%;
                  height: 50px;
                  background-color: white;
                  border: 1px solid black;
                  border-radius: 5px;
                  padding-left: 10px;
                "
                type="nember"
                placeholder="postal code"
                required
              />
            </v-col>
            <v-col cols="12" align-self="flex-end">
              <v-btn
                id="continuebtn"
                style="
                  background-color: aqua;
                  height: 60px;
                  width: 200px;
                  position: relative;
                "
                prepend-icon="mdi-cart"
                class="ml-"
                type="submit"
              >
                contunie shipping
              </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-col>
      <v-col
        style="background-color: aliceblue"
        cols="12"
        lg="6"
        md="12"
        sm="12"
        id="tablede"
      >
        <v-row justify="start">
          <v-table id="itemCartcon" height="fit-content" fixed-header="true">
            <thead class="bg-black">
              <th style="border: 2px solid black" width="600px">product</th>
              <v-spacer></v-spacer>
              <th width="100px">price</th>
            </thead>
            <br />
            <tr
              id="trtable"
              style="background-color: aliceblue"
              v-for="item in CartProduct"
              :key="item.id"
            >
              <td>
                <v-row justify="start" id="colditels">
                  <v-divider></v-divider>
                  <v-col cols="4">
                    <v-badge
                      id="badge"
                      color="orange"
                      max="5"
                      :content="item.quantity"
                    ></v-badge>
                    <img height="100px" width="100px" :src="item.thumbnail" />
                  </v-col>
                  <v-col
                    cols="7"
                    style="position: relative; left: -px; height: 100%"
                    align-self="center"
                  >
                    <span id="protital" class="text-h6">{{ item.title }}</span>
                    <div id="prowhd" style="gap: 10px">
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
                <v-icon
                  @click="this.delitem(item.id), this.fun()"
                  style="position: relative; top: -40px; left: -10px"
                  >mdi-close</v-icon
                >
              </td>
            </tr>
          </v-table>
        </v-row>
        <div class="d-flex">
          <input
            style="
              width: 70%;
              height: 50px;
              background-color: white;
              border: 1px solid black;
              border-radius: 5px;
              padding-left: 10px;
            "
            type="number"
            placeholder="enter copone code"
          />
          <input
            style="
              width: 20%;
              height: 50px;
              background-color: skyblue;
              border-radius: 5px;
              padding-left: 10px;
              margin-left: 10px;
            "
            type="button"
            value="Apply"
          />
        </div>
        <div class="d-flex flex-column align-start">
          <span>subtotal: ${{ this.total[this.total.length - 1] }}</span>
          <span>shipping: {{ this.shipping }}$</span>
          <span
            >Total:{{
              this.total[this.total.length - 1] + this.shipping
            }}$</span
          >
        </div>
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
      shipping: 20,
      item: "",
      nums: [],
      total: [],
      itemurl: ["home", "cartpage", "checkout"],
      cantry: ["Egypt", "afercan", "alex"],
      email: "",
      select: "",
      checkbox: "",
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
#continuebtn {
  position: relative;
  left: 230px;
}
#prowhd {
  display: flex;
  flex-flow: row, nowrap;
}
#con2 {
  position: relative;
  top: -200px;
}
#tablede {
  position: relative;
}
#badge {
  position: relative;
  top: -80px;
  left: -0px;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #con2 {
    width: 80%;
    position: relative;
    top: -250px;
  }
  #colditels {
    height: 235px;
    position: relative;
  }
  #badge {
    position: relative;
    top: -80px;
    left: -0px;
  }
  #continuebtn {
    position: relative;
    width: 100%;
    left: 250px;
  }
  #or {
    position: relative;
  }
  #con2 {
    width: 90%;
  }
  #detilsechuck {
    position: relative;
    left: 20px;
    margin-block: 40px;
  }
  #tablede {
    position: relative;
    left: 30px;
    top: 100px;
  }
  #delitem {
    left: -20px;
    position: relative;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #con2 {
    width: 100%;
    top: -250px;
  }
  #colditels {
    height: 235px;
  }
  #badge {
    position: relative;
    top: 10px;
    left: -20px;
  }
  #or {
    position: relative;
    left: -160px;
  }
  #con2 {
    width: 90%;
  }
  #detilsechuck {
    position: relative;
    left: 20px;
    margin-block: 40px;
  }
  #tablede {
    position: relative;
    left: 30px;
    top: 30px;
  }
  #continuebtn {
    position: relative;
    left: 10px;
  }
}
</style>
