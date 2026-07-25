<template>
  <div v-if="product" class="product-detail-page">
    <div class="container py-4">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products">Products</router-link>
          </li>
          <li class="breadcrumb-item active">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="row">
        <!-- Product Images -->
        <div class="col-lg-6 mb-4">
          <div class="product-image-section">
            <div class="main-image bg-light rounded p-4 mb-3">
              <img
                loading="lazy"
                :src="product.image"
                :alt="product.name"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="col-lg-6">
          <div class="product-info">
            <div class="mb-2">
              <span class="badge bg-primary">{{ product.brand }}</span>
            </div>

            <h1 class="h2 mb-3">{{ product.name }}</h1>

            <div class="rating mb-3">
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
              <span class="me-2">{{ product.rating }}</span>
              <span class="text-muted">({{ product.reviews }} reviews)</span>
            </div>

            <div class="price-section mb-4">
              <div class="d-flex align-items-center gap-3">
                <span class="h2 text-primary mb-0">${{ product.price }}</span>
                <span
                  v-if="product.originalPrice > product.price"
                  class="h5 text-muted text-decoration-line-through mb-0"
                >
                  ${{ product.originalPrice }}
                </span>
                <span
                  v-if="product.originalPrice > product.price"
                  class="badge bg-danger"
                >
                  Save ${{ product.originalPrice - product.price }}
                </span>
              </div>
            </div>

            <div class="stock-status mb-4">
              <span v-if="product.inStock" class="text-success">
                <i class="bi bi-check-circle-fill me-2"></i>
                In Stock
              </span>
              <span v-else class="text-danger">
                <i class="bi bi-x-circle-fill me-2"></i>
                Out of Stock
              </span>
            </div>

            <div class="description mb-4">
              <h5>Description</h5>
              <p class="text-muted">{{ product.description }}</p>
            </div>

            <div class="quantity-section mb-4">
              <label class="form-label">Quantity:</label>
              <div
                class="d-flex align-items-center gap-2"
                style="width: fit-content"
              >
                <button
                  class="btn btn-outline-secondary"
                  style="width: 40px; height: 40px"
                  @click="increaseQuantity"
                >
                  <i class="bi bi-plus"></i>
                </button>
                <input
                  v-model="quantity"
                  type="text"
                  class="form-control text-center"
                  readonly
                  style="width: 60px; height: 40px"
                />
                <button
                  class="btn btn-outline-secondary"
                  style="width: 40px; height: 40px"
                  @click="decreaseQuantity"
                >
                  <i class="bi bi-dash"></i>
                </button>
              </div>
            </div>

            <div class="actions d-flex gap-3 mb-4">
              <button
                class="btn btn-primary btn-lg flex-grow-1"
                :disabled="!product.inStock"
                @click="addToCart"
              >
                <i class="bi bi-cart-plus me-2"></i>
                Add to Cart
              </button>
              <button
                class="btn btn-outline-primary btn-lg"
                @click="toggleWishlist"
              >
                <i
                  class="bi"
                  :class="isInWishlist ? 'bi-heart-fill' : 'bi-heart'"
                ></i>
              </button>
            </div>

            <div class="features-list">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-truck text-primary me-3"></i>
                <span>Free shipping on orders over $500</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-arrow-repeat text-primary me-3"></i>
                <span>Free returns within 14 days</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-shield-check text-primary me-3"></i>
                <span>1 year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Specifications -->
      <div class="row mt-5">
        <div class="col-12">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h4 class="mb-4">Technical Specifications</h4>
              <div class="row">
                <div
                  v-for="(value, key) in product.specs"
                  :key="key"
                  class="col-md-6"
                >
                  <div
                    class="spec-item d-flex justify-content-between py-3 border-bottom"
                  >
                    <span class="fw-bold">{{ getSpecLabel(key) }}</span>
                    <span class="text-muted">{{ value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <div class="row mt-5">
        <div class="col-12">
          <h3 class="mb-4">Related Products</h3>
          <div class="row g-4">
            <div
              v-for="relatedProduct in relatedProducts"
              :key="relatedProduct.id"
              class="col-6 col-md-4 col-lg-3"
            >
              <ProductCard :product="relatedProduct" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container py-5 text-center">
    <h3>Product Not Found</h3>
    <router-link to="/products" class="btn btn-primary mt-3"
      >Back to Products</router-link
    >
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../store/productsStore";
import { useCartStore } from "../store/cartStore";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();
const productsStore = useProductsStore();
const cartStore = useCartStore();

const quantity = ref(1);

const product = computed(() => {
  return productsStore.getProductById(route.params.id);
});

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productsStore
    .getProductsByCategory(product.value.category)
    .filter((p) => p.id !== product.value.id)
    .slice(0, 4);
});

const isInWishlist = computed(() => {
  if (!product.value) return false;
  return cartStore.wishlist.some((item) => item.id === product.value.id);
});

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value);
  }
  quantity.value = 1;
};

const toggleWishlist = () => {
  if (isInWishlist.value) {
    cartStore.removeFromWishlist(product.value.id);
  } else {
    cartStore.addToWishlist(product.value);
  }
};

const getSpecLabel = (key) => {
  const labels = {
    screen: "Screen",
    processor: "Processor",
    ram: "RAM",
    storage: "Storage",
    camera: "Camera",
    battery: "Battery",
    graphics: "Graphics Card",
    type: "Type",
    noiseCancellation: "Noise Cancellation",
    charging: "Charging",
    waterResistance: "Water Resistance",
    connectivity: "Connectivity",
    sensors: "Sensors",
    resolution: "Resolution",
    hdr: "HDR",
    refreshRate: "Refresh Rate",
    smart: "Smart System",
    ports: "Ports",
    frameRate: "Frame Rate",
  };
  return labels[key] || key;
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.main-image {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image img {
  max-height: 500px;
  object-fit: contain;
}

.spec-item:last-child {
  border-bottom: none !important;
}
</style>
