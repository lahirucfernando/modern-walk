import api from "@/services/axios";

const productService = {    
  
    productList(sortBy='desc') {
        return api.get(`/products?sort=${sortBy}`);
    },

    getProductByCategory(category, sortBy='desc') {
        return api.get(`/products/category/${category}?sort=${sortBy}`);
    },

};

export default productService;