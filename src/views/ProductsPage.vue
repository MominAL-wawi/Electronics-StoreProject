<template>
  <div class="products-page">
    <div class="container py-4">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active">Products</li>
        </ol>
      </nav>

      <!-- Added search results message -->
      <div v-if="filters.searchQuery" class="alert alert-info mb-4">
        <i class="bi bi-search me-2"></i>
        Search results for: <strong>{{ filters.searchQuery }}</strong>
        <button class="btn btn-sm btn-outline-info ms-3" @click="clearSearch">
          <i class="bi bi-x-circle me-1"></i>
          Clear Search
        </button>
      </div>

      <div class="row">
        <!-- Filters Sidebar -->
        <div class="col-lg-3 mb-4">
          <div class="filters-sidebar">
            <div class="card border-0 shadow-sm mb-3">
              <div class="card-body">
                <h5 class="mb-3">Categories</h5>
                <div class="form-check mb-2">
                  <input
                    id="all"
                    class="form-check-input"
                    type="radio"
                    name="category"
                    :checked="!filters.category"
                    @change="setFilter('category', null)"
                  />
                  <label class="form-check-label" for="all">
                    All Categories
                  </label>
                </div>
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="form-check mb-2"
                >
                  <input
                    :id="category.id"
                    class="form-check-input"
                    type="radio"
                    name="category"
                    :checked="filters.category === category.id"
                    @change="setFilter('category', category.id)"
                  />
                  <label class="form-check-label" :for="category.id">
                    <i :class="category.icon" class="me-2"></i>
                    {{ category.name }}
                  </label>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm mb-3">
              <div class="card-body">
                <h5 class="mb-3">Brand</h5>
                <div class="form-check mb-2">
                  <input
                    id="allBrands"
                    class="form-check-input"
                    type="radio"
                    name="brand"
                    :checked="!filters.brand"
                    @change="setFilter('brand', null)"
                  />
                  <label class="form-check-label" for="allBrands">
                    All Brands
                  </label>
                </div>
                <div
                  v-for="brand in brands"
                  :key="brand"
                  class="form-check mb-2"
                >
                  <input
                    :id="brand"
                    class="form-check-input"
                    type="radio"
                    name="brand"
                    :checked="filters.brand === brand"
                    @change="setFilter('brand', brand)"
                  />
                  <label class="form-check-label" :for="brand">
                    {{ brand }}
                  </label>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h5 class="mb-3">Price</h5>
                <div class="mb-3">
                  <label class="form-label"
                    >From: ${{ filters.minPrice }}</label
                  >
                  <input
                    v-model="filters.minPrice"
                    type="range"
                    class="form-range"
                    min="0"
                    max="5000"
                    step="100"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">To: ${{ filters.maxPrice }}</label>
                  <input
                    v-model="filters.maxPrice"
                    type="range"
                    class="form-range"
                    min="0"
                    max="5000"
                    step="100"
                  />
                </div>
                <button
                  class="btn btn-outline-primary w-100"
                  @click="resetFilters"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="col-lg-9">
          <!-- Toolbar -->
          <div
            class="products-toolbar d-flex justify-content-between align-items-center mb-4"
          >
            <div>
              <span class="text-muted"
                >Showing {{ filteredProducts.length }} products</span
              >
            </div>
            <div class="d-flex gap-2 align-items-center">
              <label class="mb-0 me-2">Sort by:</label>
              <select
                v-model="filters.sortBy"
                class="form-select"
                style="width: auto"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <!-- Products -->
          <div v-if="filteredProducts.length > 0" class="row g-4">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="col-sm-6 col-lg-4"
            >
              <ProductCard :product="product" />
            </div>
          </div>

          <!-- No Results -->
          <div v-else class="text-center py-5">
            <i class="bi bi-inbox fs-1 text-muted mb-3 d-block"></i>
            <h4>No Products Found</h4>
            <p class="text-muted">Try changing the filters to find products</p>
            <button class="btn btn-primary" @click="resetFilters">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../store/productsStore";
import ProductCard from "../components/ProductCard.vue";

const route = useRoute();
const productsStore = useProductsStore();

const categories = computed(() => productsStore.categories);
const brands = computed(() => productsStore.brands);
const filteredProducts = computed(() => productsStore.filteredProducts);
const filters = computed(() => productsStore.filters);

const setFilter = (filterName, value) => {
  productsStore.setFilter(filterName, value);
};

const resetFilters = () => {
  productsStore.resetFilters();
};

const clearSearch = () => {
  productsStore.setFilter("searchQuery", "");
};

onMounted(() => {
  const searchQuery = route.query.search
    ? route.query.search.toLowerCase()
    : "";
  productsStore.setFilter("searchQuery", searchQuery);
});
</script>

<style scoped>
.filters-sidebar {
  position: sticky;
  top: 100px;
}

.form-check-input:checked {
  background-color: #667eea;
  border-color: #667eea;
}

.form-range::-webkit-slider-thumb {
  background: #667eea;
}

.form-range::-moz-range-thumb {
  background: #667eea;
}
</style>
