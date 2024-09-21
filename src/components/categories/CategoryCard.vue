<template>
  <v-col cols="12" sm="6">
    <v-card
      class="category-card"
      :class="isMensCategory ? 'mens-category-card' : 'womans-category-card'"
    >
      <v-card-title class="title">{{ category }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
import { computed } from "vue";
import { ProductCategories } from "@/config/productCategories";

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isMensCategory = computed(() => {
      return props.category == ProductCategories.MENS_CLOTHING;
    });
    return {
      isMensCategory,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.category-card {
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: $white;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }
}

/* Styles for men's category */
.mens-category-card {
  background-color: $mens-color !important;
}

/* Styles for women's category */
.womans-category-card {
  background-color: $womans-color;
}
</style>
