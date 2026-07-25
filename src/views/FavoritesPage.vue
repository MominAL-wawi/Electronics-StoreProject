<template>
  <div class="favorites-page">
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-12">
          <h2 class="mb-3">
            <i class="bi bi-heart-fill text-danger me-2"></i>
            Favorites
          </h2>
          <p class="text-muted">
            {{ wishlistCount }} products in favorites list
          </p>
        </div>
      </div>

      <div v-if="wishlistCount === 0" class="text-center py-5">
        <i class="bi bi-heart display-1 text-muted mb-3"></i>
        <h4 class="text-muted mb-3">Favorites list is empty</h4>
        <p class="text-muted mb-4">
          You haven't added any products to favorites yet
        </p>
        <router-link to="/products" class="btn btn-primary">
          <i class="bi bi-shop me-2"></i>
          Browse products
        </router-link>
      </div>

      <div v-else class="row g-4">
        <div
          v-for="product in wishlist"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";
import ProductCard from "../components/ProductCard.vue";

const cartStore = useCartStore();

const wishlist = computed(() => cartStore.wishlist);
const wishlistCount = computed(() => cartStore.wishlistCount);
</script>

<style scoped>
.favorites-page {
  min-height: calc(100vh - 200px);
  background: #f8f9fa;
}

.display-1 {
  font-size: 5rem;
}
</style>
