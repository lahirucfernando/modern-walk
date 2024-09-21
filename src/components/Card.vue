<template>
  <v-card
    class="product-card mx-auto my-4"
    :class="isMenCloth ? 'men-cloth-card' : 'women-cloth-card'"
  >
    <v-card-title class="title-style"> 
        <router-link :to="isMenCloth ? '/mens-clothing' : '/womans-clothing'" class="text-decoration-none">
            {{ product?.title }} 
        </router-link>
    </v-card-title>

    <div class="img-section">
      <v-img
        v-if="product?.image"
        :src="product.image"
        alt="Product Image"
        height="190px"
      ></v-img>
    </div>

    <v-card-text class="description-section">
      <div class="price-row">Rs {{ product?.price }}</div>
      <div class="description-row">
        {{ truncatedDescription }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed } from "vue";
import { ProductCategories } from "@/config/productCategories";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isMenCloth = computed(() => {
      return props.product.category == ProductCategories.MENS_CLOTHING;
    });
    const truncatedDescription = computed(() => {
      return props.product.description.length > 130
        ? props.product.description.substring(0, 130) + "..."
        : props.product.description;
    });
    return {
      isMenCloth,
      truncatedDescription,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.product-card {
  border: 1px solid $grey;
  border-radius: 15px;
  width: 300px;
  height: 410px;
  background-color: $white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .title-style {
    padding: 16px 20px 0 20px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .img-section {
    height: 190px;
    margin-top: 25px;
    margin-bottom: 20px;
  }

  .description-section {
    border: 1px solid $grey;
    border-radius: 12px;
    padding: 16px;
    height: 100%;

    .price-row {
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: $blue;
      margin-bottom: 8px;
    }

    .description-row {
      padding: 0 18px 0 18px;
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  /* Styles for men's clothing */
  &.men-cloth-card .description-section {
    background-color: $green;
  }

  /* Styles for women's clothing */
  &.women-cloth-card .description-section {
    background-color: $red;
  }
}
</style>
