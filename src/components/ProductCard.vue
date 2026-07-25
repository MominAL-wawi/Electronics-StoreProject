<template>
  <div class="product-card h-100">
    <div class="card h-100 border-0 shadow-sm">
      <div class="position-relative">
        <router-link :to="`/product/${product.id}`">
          <img
            loading="lazy"
            :src="product.image"
            class="card-img-top"
            :alt="product.name"
          />
        </router-link>

        <div class="product-badges position-absolute top-0 start-0 m-2">
          <span
            v-if="product.originalPrice > product.price"
            class="badge bg-danger"
          >
            {{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
            OFF
          </span>
        </div>

        <button
          class="btn btn-light btn-wishlist position-absolute top-0 end-0 m-2"
          :class="{ active: isInWishlist }"
          @click="toggleWishlist"
        >
          <i
            class="bi"
            :class="isInWishlist ? 'bi-heart-fill text-danger' : 'bi-heart'"
          ></i>
        </button>
      </div>

      <div class="card-body d-flex flex-column">
        <div class="mb-2">
          <small class="text-muted">{{ product.brand }}</small>
        </div>

        <router-link
          :to="`/product/${product.id}`"
          class="text-decoration-none text-dark"
        >
          <h6 class="card-title mb-2">{{ product.name }}</h6>
        </router-link>

        <div class="rating mb-2">
          <span class="text-warning">
            <i
              v-for="n in 5"
              :key="n"
              class="bi"
              :class="
                n <= Math.floor(product.rating) ? 'bi-star-fill' : 'bi-star'
              "
            ></i>
          </span>
          <small class="text-muted me-2">{{ product.rating }}</small>
          <small class="text-muted">({{ product.reviews }})</small>
        </div>

        <div class="price mb-3">
          <span class="h5 text-primary mb-0">${{ product.price }}</span>
          <span
            v-if="product.originalPrice > product.price"
            class="text-muted text-decoration-line-through me-2"
          >
            ${{ product.originalPrice }}
          </span>
        </div>

        <div class="mt-auto">
          <button
            class="btn btn-primary w-100"
            :disabled="!product.inStock"
            @click="addToCart"
          >
            <i class="bi bi-cart-plus me-2"></i>
            {{ product.inStock ? "Add to Cart" : "Out of Stock" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const isInWishlist = computed(() => {
  return cartStore.wishlist.some((item) => item.id === props.product.id);
});

const addToCart = () => {
  cartStore.addToCart(props.product);
};

const toggleWishlist = () => {
  if (isInWishlist.value) {
    cartStore.removeFromWishlist(props.product.id);
  } else {
    cartStore.addToWishlist(props.product);
  }
};
</script>

<style scoped>
.product-card {
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.card {
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card-img-top {
  height: 250px;
  object-fit: contain;
  padding: 1rem;
  background: #f8f9fa;
}

.btn-wishlist {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-wishlist:hover {
  background: #fff !important;
  transform: scale(1.1);
}

.rating i {
  font-size: 0.875rem;
}

.price {
  font-weight: 600;
}
</style>
