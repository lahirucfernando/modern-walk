<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <div class="section-title">Categories</div>
    </v-col>
  </v-row>
  <v-row>
    <CategoryCard
      v-for="(category, key) in productCategories"
      :key="key"
      :category="category"
    />
  </v-row>
</template>

<script>
import { ProductCategories } from "@/config/productCategories";

export default {
  setup() {
    const productCategories = Object.values(ProductCategories);

    return {
      productCategories,
    };
  },
};
</script>
<style scoped lang="scss">
.section-title {
  padding-left: 0px;
}
</style>
