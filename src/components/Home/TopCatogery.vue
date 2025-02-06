<template>
  <div>
    <v-container id="topcato">
      <span class="text-h4">TopCatogery</span>
      <br />
      <v-banner id="bann" style="position: relative">
        <v-row class="d-flex justfiy-center align-center">
          <div v-for="(item, i) in this.catogory" :key="i">
            <div
              class="d-flex flex-column align-center justfiy-center ml-5"
              style="
                border-radius: 200px;
                height: 160px;
                width: 160px;
                text-align: center;
              "
            >
              <img
                @click="
                  this.$router.push({
                    name: 'catigory',
                    params: { catigory: item.url },
                  })
                "
                id="image"
                style="
                  cursor: pointer;
                  background-color: rgb(241, 240, 240);
                  height: 160px;
                  width: 160px;
                  object-fit: cover;
                  border-radius: 200px;
                  position: relative;
                  top: 10px;
                "
                :src="item.img"
              />
            </div>
            <br />
            <span>{{ item.name }}</span>
          </div>
        </v-row>
      </v-banner>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liks: [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches",
      ],
      catogory: [
        {
          name: "Mobile Phones",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
          url: "smartphones",
        },
        {
          name: "Labtops",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
          url: "laptops",
        },
        {
          name: "motorcycle",
          img: "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png",
          url: "motorcycle",
        },
        {
          name: "sports",
          img: "https://cdn.dummyjson.com/products/images/sports-accessories/Football/thumbnail.png",
          url: "sports-accessories",
        },
        {
          name: "skin-care",
          img: "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png",
          url: "skin-care",
        },
        {
          name: "sunglasses",
          img: "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
          url: "sunglasses",
        },
        {
          name: "tablets",
          img: "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
          url: "tablets",
        },
        {
          name: "dresses",
          img: "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
          url: "womens-dresses",
        },
        {
          name: "womens-shoes",
          img: "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/thumbnail.png",
          url: "womens-shoes",
        },
        {
          name: "mens-shoes",
          img: "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
          url: "mens-shoes",
        },
        {
          name: "kitchen",
          img: "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
          url: "kitchen-accessories",
        },
        {
          name: "Accessories",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
          url: "mobile-accessories",
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
#image:hover {
  scale: 1.1;
  transition: all, 2s;
}
#topcato {
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
#bann {
  left: 40px;
  position: relative;
  width: 100%;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #bann {
    position: relative;
    align-self: center;
    width: 75%;
    left: 0px;
  }
  #swip {
    margin-left: 5px;
  }
  .mySwiper {
    padding: 5px;
  }
  #card {
    width: 18rem;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #bann {
    position: relative;
    align-self: center;
    width: 100%;
    left: 0px;
  }
  #swip {
    border: 2px solid red;
  }
  .mySwiper {
    padding: 1rem;
    margin: 0rem;
  }
  #card {
    width: 20rem;
    border: 2px solid blue;
    margin: auto;
  }
}
</style>
