import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),

  getters: {
    currentUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated,
  },

  actions: {
    login(userData) {
      this.user = userData;
      this.isAuthenticated = true;
      this.saveToLocalStorage();
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("user");
    },

    saveToLocalStorage() {
      localStorage.setItem("user", JSON.stringify(this.user));
    },

    loadFromLocalStorage() {
      const user = localStorage.getItem("user");
      if (user) {
        this.user = JSON.parse(user);
        this.isAuthenticated = true;
      }
    },
  },
});
