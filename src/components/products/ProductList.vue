<template>
  <v-row :class="['card-list', { 'full-page': isFullPage }]">
    <v-col v-for="product in list" :key="product.id" class="d-flex ma-2 mb-0">
      <ProductCard :product="product" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
    isFullPage: {
        type: Boolean,
        default: false,
        required: false
    }
  },
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card-list {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-top: 0px;
  -webkit-overflow-scrolling: touch;

  &.full-page {
    overflow-x: unset;
    flex-wrap: wrap; 
  }
}
</style>
