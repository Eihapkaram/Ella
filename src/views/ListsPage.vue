<template>
  <div>
    <v-row width="100%" justify="center" id="con0b">
      <v-table id="itemCartcon" height="fit-content" fixed-header="true">
        <thead class="bg-black">
          <th style="border: 2px solid black" width="600px">product</th>
          <v-spacer></v-spacer>
          <th width="100px">price</th>
        </thead>
        <br />
        <tr
          style="background-color: aliceblue"
          v-for="item in this.list"
          :key="item.id"
          class="tr"
        >
          <td>
            <v-row justify="start">
              <v-divider></v-divider>
              <v-col cols="12" lg="4" md="4" sm="4">
                <img
                  id="img"
                  height="100px"
                  width="100px"
                  :src="item.thumbnail"
                />
              </v-col>
              <v-col
                id="detilse"
                cols="12"
                lg="7"
                md="7"
                sm="5"
                style=""
                align-self="center"
              >
                <span class="text-h6">{{ item.title }}</span>
              </v-col>
            </v-row>
          </td>
          <v-spacer></v-spacer>
          <td>{{ Math.ceil(item.price) }}$</td>
          <br />
          <td class="d-flex" id="btns" style="">
            <v-btn style="margin-right: 10px" @click="this.delitemL(item.id)"
              >remove</v-btn
            >
            <v-btn
              @click="
                $router.push({ name: 'derilse', params: { idparam: item.id } })
              "
              >show detiles</v-btn
            >
          </td>
        </tr>
      </v-table>
    </v-row>
  </div>
</template>
<script>
import { ListsStore1 } from "@/store/Lists";
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
  computed: { ...mapState(ListsStore1, ["list"]) },
  methods: {
    ...mapActions(ListsStore1, ["GetCartL", "delitemL", "updateL"]),
    muns(item) {
      let q = item.quantity;
      if (q == 1) {
        return;
      } else {
        item.quantity--;
      }
    },
  },

  async mounted() {
    window.scroll(0, 0);
    await this.GetCartL();
  },
};
</script>
<style lang="css" scoped>
#btns {
  flex-flow: row, nowrap;
  justify-content: center;
  align-items: center;
  top: 30px;
  position: relative;
}
#con0b {
  width: 100%;
  position: relative;
  top: -240px;
}
#detilse {
}
#detilse {
  position: relative;
  left: -50px;
  height: 100%;
}
#bgtr {
  width: 100%;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #con0b {
    width: 98%;
    left: 20px;
    position: relative;
    top: -300px;
  }
  #btns {
    position: relative;
    flex-flow: row, nowrap;
    justify-content: center;
    align-items: center;
    top: 30px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #btns {
    flex-flow: row, nowrap;
    justify-content: center;
    align-items: center;
    left: -30px;
    top: 10px;
    position: relative;
  }
  #con0b {
    width: 100%;
    top: -300px;
  }
  #detilse {
    position: relative;
    left: 5px;
    height: 100%;
    display: flex;
    margin-left: 10px;
  }
  #img {
    position: relative;
    left: px;
  }
}
</style>
