import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    wishlist: [],
  }),

  getters: {
    cartItemsCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    cartTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    wishlistCount: (state) => state.wishlist.length,
  },

  actions: {
    addToCart(product) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        });
      }

      this.saveToLocalStorage();
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
    },

    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeFromCart(productId);
        }
      }
      this.saveToLocalStorage();
    },

    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },

    addToWishlist(product) {
      if (!this.wishlist.find((item) => item.id === product.id)) {
        this.wishlist.push(product);
        this.saveToLocalStorage();
      }
    },

    removeFromWishlist(productId) {
      this.wishlist = this.wishlist.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.items));
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    },

    loadFromLocalStorage() {
      const cart = localStorage.getItem("cart");
      const wishlist = localStorage.getItem("wishlist");

      if (cart) {
        this.items = JSON.parse(cart);
      }

      if (wishlist) {
        this.wishlist = JSON.parse(wishlist);
      }
    },
  },
});
