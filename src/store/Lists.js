import { defineStore } from "pinia";
export const ListsStore1 = defineStore("lists", {
  state: () => ({
    list: [],
  }),
  getters: {},
  actions: {
    AdditemL(item) {
      let vivo = false;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].id == item.id) {
          console.log(item);
          vivo = true;
          break;
        }
      }
      if (!vivo) {
        this.list.push(JSON.parse(JSON.stringify(item)));
      }

      localStorage.setItem("lists1", JSON.stringify(this.list));
    },
    GetCartL() {
      if (localStorage.getItem("lists1")) {
        this.list = JSON.parse(localStorage.getItem("lists1"));
        localStorage.setItem("lists1", JSON.stringify(this.list));
      }
    },
    delitemL(id) {
      for (let i = 0; i <= this.list.length; i++) {
        if (this.list[i].id == id) {
          this.list.splice(i, 1);
        }
      }
      localStorage.setItem("lists1", JSON.stringify(this.list));
    },
    updateL() {
      if (localStorage.getItem("lists1")) {
        this.list.push(JSON.parse(localStorage.getItem("lists1")));
      }
    },
  },
});
