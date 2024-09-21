<template>
  <v-container class="main-container fill-height">
    <v-row>
      <v-col cols="co-12 pb-0">
        <div class="section-title">
          {{ isMensClothing ? "Men's Clothing" : "Women's Clothing" }}
        </div>
      </v-col>
    </v-row>
    <ProductList :list="list" :isFullPage="true" />
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import productService from "@/services/productService";
import { ProductCategories } from "@/config/productCategories";

export default {
  props: {
    isMensClothing: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const list = ref([]);

    const getProductList = async (category) => {
      try {
        const response = await productService.getProductByCategory(category);
        list.value = response.data ?? [];
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };

    onMounted(() => {
      const category = props.isMensClothing
        ? ProductCategories.MENS_CLOTHING
        : ProductCategories.WOMANS_CLOTHING;
      getProductList(category);
    });

    return {
      list,
    };
  },
};
</script>
