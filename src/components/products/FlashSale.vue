<template>
    <v-row>
      <v-col cols="12">
        <div class="section-title">Flash Sale</div>
      </v-col>
    </v-row>
    <ProductList :list="list"/>
</template>

<script>
import { ref, onMounted } from "vue";
import productService from '@/services/productService';
import { ProductCategories } from "@/config/productCategories";

export default {
    setup() {
        const list = ref([]);
        const productCategories = Object.values(ProductCategories);

        const getProductList = async () => {
          try {
            const response = await productService.productList();
            const productList = response.data ?? []
            list.value = productList.filter(product => productCategories.includes(product.category));
          } catch (error) {
            console.error('Error fetching products:', error);
          }       
        }

        onMounted(() => {
          getProductList();
        });
     
        return {
          list
        };
    },
};
</script>
