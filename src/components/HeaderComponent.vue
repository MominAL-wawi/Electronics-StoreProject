<template>
  <header class="header-main">
    <div class="main-header bg-primary py-3">
      <div class="container">
        <div
          class="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2 gap-lg-0"
        >
          <!-- Logo and Search Row -->
          <div class="d-flex align-items-center gap-2 gap-md-3 flex-grow-1">
            <div class="header-logo">
              <router-link to="/" class="logo text-white text-decoration-none">
                <h3 class="mb-0">
                  <i class="bi bi-lightning-charge-fill logo-icon"></i>
                  <span class="d-none d-lg-inline">Electronics Store</span>
                  <span class="d-inline d-lg-none">ES</span>
                </h3>
              </router-link>
            </div>

            <!-- Made search bar more flexible on mobile -->
            <div class="header-search flex-grow-1">
              <div class="search-bar">
                <div class="input-group">
                  <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control"
                    placeholder="Search for products..."
                    @keyup.enter="handleSearch"
                  />
                  <button class="btn btn-warning" @click="handleSearch">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions Row -->
          <div
            class="d-flex align-items-center justify-content-between justify-content-lg-end gap-2 gap-md-3 mt-2 mt-lg-0"
          >
            <div class="d-flex align-items-center gap-2 gap-md-3">
              <router-link
                to="/favorites"
                class="text-white position-relative header-icon"
                title="Favorites"
              >
                <i class="bi bi-heart fs-5 fs-md-4"></i>
                <span
                  v-if="wishlistCount > 0"
                  class="badge bg-danger position-absolute top-0 start-100 translate-middle"
                >
                  {{ wishlistCount }}
                </span>
              </router-link>

              <router-link
                to="/cart"
                class="text-white position-relative header-icon"
                title="Cart"
              >
                <i class="bi bi-cart3 fs-5 fs-md-4"></i>
                <span
                  v-if="cartCount > 0"
                  class="badge bg-danger position-absolute top-0 start-100 translate-middle"
                >
                  {{ cartCount }}
                </span>
              </router-link>

              <div
                v-if="authStore.isAuthenticated"
                class="d-flex align-items-center gap-2"
              >
                <span class="text-white d-none d-lg-inline small">{{
                  authStore.user.name
                }}</span>
                <button
                  class="btn btn-sm btn-outline-light"
                  @click="handleLogout"
                >
                  <i class="bi bi-box-arrow-right"></i>
                  <span class="d-none d-md-inline ms-1">Logout</span>
                </button>
              </div>
              <div v-else class="d-flex gap-2">
                <router-link to="/login" class="btn btn-sm btn-outline-light">
                  <i class="bi bi-box-arrow-in-right"></i>
                  <span class="d-none d-md-inline ms-1">Login</span>
                </router-link>
                <router-link to="/signup" class="btn btn-sm btn-warning">
                  <i class="bi bi-person-plus"></i>
                  <span class="d-none d-md-inline ms-1">Sign Up</span>
                </router-link>
              </div>
            </div>

            <div class="header-menu">
              <nav class="navbar navbar-expand-lg p-0">
                <button
                  class="navbar-toggler text-white border-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  id="navbarNav"
                  class="collapse navbar-collapse navbar-mobile-menu"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link text-white"
                        >Home</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/about" class="nav-link text-white"
                        >About</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/products" class="nav-link text-white"
                        >Products</router-link
                      >
                    </li>
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle text-white"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Categories
                      </a>
                      <ul class="dropdown-menu">
                        <li v-for="category in categories" :key="category.id">
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="filterByCategory(category.id)"
                          >
                            <i :class="category.icon" class="me-2"></i>
                            {{ category.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li v-if="authStore.isAuthenticated" class="nav-item">
                      <router-link
                        to="/my-purchases"
                        class="nav-link text-white"
                        >My Purchases</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/contact" class="nav-link text-white"
                        >Contact</router-link
                      >
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cartStore";
import { useProductsStore } from "../store/productsStore";
import { useAuthStore } from "../store/authStore";

const router = useRouter();
const cartStore = useCartStore();
const productsStore = useProductsStore();
const authStore = useAuthStore();

const searchQuery = ref("");
const cartCount = computed(() => cartStore.cartItemsCount);
const wishlistCount = computed(() => cartStore.wishlistCount);
const categories = computed(() => productsStore.categories);

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ name: "Products", query: { search: searchQuery.value } });
  }
};

const filterByCategory = (categoryId) => {
  productsStore.setFilter("category", categoryId);
  router.push({ name: "Products" });
};

const handleLogout = () => {
  authStore.logout();
  router.push("/");
};
</script>

<style scoped>
.header-main {
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.main-header {
  background: linear-gradient(135deg, #232f3e 0%, #131921 100%) !important;
}

.logo h3 {
  font-weight: 700;
  font-size: 1.25rem;
  white-space: nowrap;
}

.search-bar .form-control {
  border-radius: 4px 0 0 4px;
  border: none;
  padding: 0.75rem 1rem;
}

.search-bar .btn {
  border-radius: 0 4px 4px 0;
  padding: 0.75rem 1.5rem;
}

.badge {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 50%;
  min-width: 20px;
}

.navbar {
  background: transparent !important;
}

.nav-link {
  font-weight: 500;
  color: #fff !important;
  padding: 0.5rem 0.75rem !important;
  white-space: nowrap;
  font-size: 0.95rem;
}

.nav-link:hover {
  color: #ff9900 !important;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.logo-icon {
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.header-icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.header-icon i {
  line-height: 1;
}

/* Enhanced responsive styles for better mobile experience */
@media (max-width: 991px) {
  .main-header {
    padding: 0.75rem 0 !important;
  }

  .navbar-mobile-menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    background: #232f3e;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-width: 220px;
    z-index: 1000;
  }

  .navbar-nav {
    flex-direction: column !important;
    width: 100%;
    gap: 0.5rem;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    padding: 0.75rem 1rem !important;
    display: block;
    width: 100%;
    border-radius: 4px;
    background: transparent;
    transition: all 0.2s ease;
  }

  .nav-link:hover {
    background: rgba(255, 153, 0, 0.15) !important;
  }

  .dropdown-menu {
    width: 100%;
    background: #131921;
    margin-top: 0.5rem;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.5rem 0;
  }

  .dropdown-item {
    padding: 0.75rem 1rem;
    color: #fff;
    transition: all 0.2s ease;
  }

  .dropdown-item:hover {
    background: rgba(255, 153, 0, 0.15);
    color: #ff9900;
  }

  .search-bar .form-control {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }

  .search-bar .btn {
    padding: 0.5rem 1rem;
  }

  .logo h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .header-icon {
    width: 36px;
    height: 36px;
  }

  .header-icon i {
    font-size: 1.1rem;
  }

  .btn-sm {
    font-size: 0.8rem;
    padding: 0.35rem 0.6rem;
  }
}

/* Added extra small screen optimizations */
@media (max-width: 576px) {
  .main-header {
    padding: 0.5rem 0 !important;
  }

  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .logo h3 {
    font-size: 1rem;
  }

  .search-bar .form-control {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }

  .search-bar .btn {
    padding: 0.4rem 0.8rem;
  }

  .header-icon {
    width: 32px;
    height: 32px;
  }

  .header-icon i {
    font-size: 1rem;
  }

  .btn-sm {
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }

  .badge {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    min-width: 18px;
  }
}
</style>
