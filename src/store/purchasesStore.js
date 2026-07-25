import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";

export const usePurchasesStore = defineStore("purchases", {
  state: () => ({
    purchases: [], // Array of purchase objects
  }),

  getters: {
    userPurchases: (state) => {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) return [];

      // Filter purchases by current user email
      return state.purchases.filter(
        (purchase) => purchase.userEmail === authStore.user.email
      );
    },

    totalPurchases: (state) => {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) return 0;

      return state.purchases.filter(
        (purchase) => purchase.userEmail === authStore.user.email
      ).length;
    },
  },

  actions: {
    async addPurchase(orderData) {
      const authStore = useAuthStore();

      const purchase = {
        userEmail: authStore.user.email,
        userName: authStore.user.name,
        items: orderData.items,
        subtotal: orderData.subtotal,
        tax: orderData.tax,
        total: orderData.total,
        shippingInfo: orderData.shippingInfo,
        paymentMethod: orderData.paymentMethod,
        orderDate: new Date().toISOString(),
        status: "Processing",
      };

      try {
        const response = await fetch(
          "https://electronics-store-c9093-default-rtdb.firebaseio.com/My%20Purchases.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(purchase),
          }
        );

        if (response.ok) {
          const result = await response.json();
          purchase.id = result.name; // Firebase returns the generated ID
          this.purchases.push(purchase);

          // تحديث المشتريات بعد الإضافة لضمان التزامن
          await this.loadPurchases();
        }
      } catch (error) {
        console.error("Error saving purchase to Firebase:", error);
      }
    },

    async loadPurchases() {
      const authStore = useAuthStore();
      if (!authStore.isAuthenticated) return;

      try {
        const response = await fetch(
          "https://electronics-store-c9093-default-rtdb.firebaseio.com/My%20Purchases.json"
        );

        if (response.ok) {
          const data = await response.json();
          if (data) {
            // تحويل بيانات Firebase إلى مصفوفة وفلترة حسب المستخدم الحالي
            this.purchases = Object.entries(data)
              .map(([id, purchase]) => ({
                id,
                ...purchase,
              }))
              .filter(
                (purchase) => purchase.userEmail === authStore.user.email
              );
          } else {
            this.purchases = [];
          }
        }
      } catch (error) {
        console.error("Error loading purchases from Firebase:", error);
      }
    },
  },
});
