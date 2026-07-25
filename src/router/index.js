import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import SignupPage from "../views/SignupPage.vue";
import LoginPage from "../views/LoginPage.vue";
import FavoritesPage from "../views/FavoritesPage.vue";
import MyPurchasesPage from "../views/MyPurchasesPage.vue";
import StripeSuccessPage from "../views/StripeSuccessPage.vue";
import StripeCancelPage from "../views/StripeCancelPage.vue";
import { useAuthStore } from "../store/authStore";

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: { requiresAuth: false },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetailPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/my-purchases",
    name: "MyPurchases",
    component: MyPurchasesPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/stripe-success",
    name: "StripeSuccess",
    component: StripeSuccessPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/stripe-cancel",
    name: "StripeCancel",
    component: StripeCancelPage,
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Load user from localStorage if not already loaded
  if (!authStore.isAuthenticated) {
    authStore.loadFromLocalStorage();
  }

  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // Redirect to login if not authenticated
    next({ name: "Login" });
  } else if (
    (to.name === "Login" || to.name === "Signup") &&
    authStore.isAuthenticated
  ) {
    // Redirect to home if already authenticated and trying to access login/signup
    next({ name: "Home" });
  } else {
    // Allow navigation
    next();
  }
});

export default router;
