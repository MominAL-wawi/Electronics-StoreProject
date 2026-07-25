<template>
  <div class="home-page">
    <!-- Hero Carousel -->
    <section class="hero-section mb-5">
      <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="hero-slide"
              style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              "
            >
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-6 text-white">
                    <h1 class="display-4 fw-bold mb-3">Latest Smartphones</h1>
                    <p class="lead mb-4">
                      Discover the newest iPhone and Samsung releases at the
                      best prices
                    </p>
                    <router-link to="/products" class="btn btn-light btn-lg"
                      >Shop Now</router-link
                    >
                  </div>
                  <div class="col-md-6">
                    <img
                      loading="lazy"
                      src="/iphone-15-pro-max.png?height=4000&width=600"
                      alt="Smartphones"
                      class="img-fluid hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div
              class="hero-slide"
              style="
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
              "
            >
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-6 text-white">
                    <h1 class="display-4 fw-bold mb-3">Professional Laptops</h1>
                    <p class="lead mb-4">
                      Powerful devices for work and creativity from top brands
                    </p>
                    <router-link to="/products" class="btn btn-light btn-lg"
                      >Discover More</router-link
                    >
                  </div>
                  <div class="col-md-6">
                    <img
                      loading="lazy"
                      src="/dell-xps-15-laptop.jpg?height=4000&width=600"
                      alt="Laptops"
                      class="img-fluid hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div
              class="hero-slide"
              style="
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
              "
            >
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-6 text-white">
                    <h1 class="display-4 fw-bold mb-3">Smart Accessories</h1>
                    <p class="lead mb-4">
                      Headphones and smartwatches with the latest technology
                    </p>
                    <router-link to="/products" class="btn btn-light btn-lg"
                      >Shop Now</router-link
                    >
                  </div>
                  <div class="col-md-6">
                    <img
                      loading="lazy"
                      src="/airpods-pro-2.jpg?height=4000&width=600"
                      alt="Accessories"
                      class="img-fluid hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>

    <!-- Categories -->
    <section class="categories-section mb-5">
      <div class="container">
        <h2 class="section-title text-center mb-4">Shop by Category</h2>
        <div class="row g-4">
          <div
            v-for="category in categories"
            :key="category.id"
            class="col-6 col-md-4 col-lg-3"
          >
            <CategoryCard :category="category" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-section mb-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="section-title mb-0">Featured Products</h2>
          <router-link to="/products" class="btn btn-outline-primary"
            >View All</router-link
          >
        </div>

        <div class="row g-4">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="col-6 col-md-4 col-lg-3"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="features-section py-5 bg-light">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-3 text-center">
            <div class="feature-box">
              <i class="bi bi-truck fs-1 text-primary mb-3"></i>
              <h5>Free Shipping</h5>
              <p class="text-muted">On orders over 500 SAR</p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="feature-box">
              <i class="bi bi-shield-check fs-1 text-primary mb-3"></i>
              <h5>Quality Guarantee</h5>
              <p class="text-muted">100% authentic products</p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="feature-box">
              <i class="bi bi-arrow-repeat fs-1 text-primary mb-3"></i>
              <h5>Easy Returns</h5>
              <p class="text-muted">Within 14 days</p>
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div class="feature-box">
              <i class="bi bi-headset fs-1 text-primary mb-3"></i>
              <h5>24/7 Support</h5>
              <p class="text-muted">Excellent customer service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useProductsStore } from "../store/productsStore";
import { useCartStore } from "../store/cartStore";
import ProductCard from "../components/ProductCard.vue";
import CategoryCard from "../components/CategoryCard.vue";

const productsStore = useProductsStore();
const cartStore = useCartStore();

const categories = computed(() => productsStore.categories);
const featuredProducts = computed(() => productsStore.featuredProducts);

onMounted(() => {
  cartStore.loadFromLocalStorage();
});
</script>

<style scoped>
.hero-section {
  margin-top: -1rem;
}

.hero-slide {
  padding: 5rem 0;
  min-height: 500px;
  display: flex;
  align-items: center;
}

/* Added styling for hero carousel images */
.hero-image {
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.hero-image:hover {
  transform: scale(1.05) translateY(-10px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.section-title {
  font-weight: 700;
  color: #333;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
}

.feature-box {
  padding: 2rem 1rem;
  transition: transform 0.3s ease;
}

.feature-box:hover {
  transform: translateY(-10px);
}
</style>
