import { defineStore } from "pinia";
export const CartStore1 = defineStore("CartS", {
  state: () => ({
    CartProduct: [],
  }),
  getters: {},
  actions: {
    async Additem(item) {
      let vivo = false;
      for (let i = 0; i < this.CartProduct.length; i++) {
        if (this.CartProduct[i].id == item.id) {
          this.CartProduct[i].quantity += item.quantity;
          console.log(item);
          vivo = true;
          break;
        }
      }
      if (!vivo) {
        this.CartProduct.push(JSON.parse(JSON.stringify(item)));
      }

      localStorage.setItem("todo", JSON.stringify(this.CartProduct));
    },
    async GetCart() {
      if (localStorage.getItem("todo")) {
        this.CartProduct = JSON.parse(localStorage.getItem("todo"));
        localStorage.setItem("todo", JSON.stringify(this.CartProduct));
      }
    },
    async delitem(id) {
      for (let i = 0; i <= this.CartProduct.length; i++) {
        if (this.CartProduct[i].id == id) {
          this.CartProduct.splice(i, 1);
        }
      }
      localStorage.setItem("todo", JSON.stringify(this.CartProduct));
    },
    async update() {
      if (localStorage.getItem("todo")) {
        this.CartProduct.push(JSON.parse(localStorage.getItem("todo")));
      }
    },
  },
});
