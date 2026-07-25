<template>
  <div class="my-purchases-page">
    <div class="container py-4">
      <h2 class="mb-4">My Purchases</h2>

      <div v-if="userPurchases.length === 0" class="text-center py-5">
        <i class="bi bi-bag-x display-1 text-muted mb-3"></i>
        <h4 class="text-muted">No purchases yet</h4>
        <p class="text-muted mb-4">Start shopping to see your orders here</p>
        <router-link to="/products" class="btn btn-primary">
          Browse Products
        </router-link>
      </div>

      <div v-else class="purchases-list">
        <div
          v-for="purchase in userPurchases"
          :key="purchase.id"
          class="card mb-4 shadow-sm"
        >
          <div class="card-header bg-white">
            <div class="row align-items-center">
              <div class="col-md-6">
                <h5 class="mb-1">Order #{{ purchase.id }}</h5>
                <small class="text-muted">
                  {{ formatDate(purchase.orderDate) }}
                </small>
              </div>
              <div class="col-md-6 text-md-end">
                <span
                  class="badge"
                  :class="{
                    'bg-warning': purchase.status === 'Processing',
                    'bg-info': purchase.status === 'Shipped',
                    'bg-success': purchase.status === 'Delivered',
                  }"
                >
                  {{ purchase.status }}
                </span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-md-8">
                <h6 class="mb-3">Items:</h6>
                <div class="purchase-items">
                  <div
                    v-for="item in purchase.items"
                    :key="item.id"
                    class="d-flex align-items-center mb-3 pb-3 border-bottom"
                  >
                    <img
                      loading="lazy"
                      :src="item.image"
                      :alt="item.name"
                      class="purchase-item-image me-3"
                    />
                    <div class="flex-grow-1">
                      <h6 class="mb-1">{{ item.name }}</h6>
                      <p class="text-muted mb-0">
                        Quantity: {{ item.quantity }} × ${{ item.price }}
                      </p>
                    </div>
                    <div class="text-end">
                      <strong>${{ item.total }}</strong>
                    </div>
                  </div>
                </div>

                <div class="shipping-info mt-3">
                  <h6 class="mb-2">Shipping Information:</h6>
                  <p class="mb-1">
                    <strong>Name:</strong> {{ purchase.shippingInfo.firstName }}
                    {{ purchase.shippingInfo.lastName }}
                  </p>
                  <p class="mb-1">
                    <strong>Address:</strong>
                    {{ purchase.shippingInfo.address }},
                    {{ purchase.shippingInfo.city }},
                    {{ purchase.shippingInfo.postalCode }}
                  </p>
                  <p class="mb-1">
                    <strong>Phone:</strong> {{ purchase.shippingInfo.phone }}
                  </p>
                  <p class="mb-1">
                    <strong>Payment:</strong>
                    {{ getPaymentMethodLabel(purchase.paymentMethod) }}
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card bg-light">
                  <div class="card-body">
                    <h6 class="mb-3">Order Summary</h6>
                    <div class="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>${{ purchase.subtotal }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <span>Tax:</span>
                      <span>${{ purchase.tax }}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                      <span>Shipping:</span>
                      <span class="text-success">Free</span>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between">
                      <strong>Total:</strong>
                      <strong class="text-primary"
                        >${{ purchase.total }}</strong
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { usePurchasesStore } from "../store/purchasesStore";

const purchasesStore = usePurchasesStore();

const userPurchases = computed(() => purchasesStore.userPurchases);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getPaymentMethodLabel = (method) => {
  const labels = {
    cod: "Cash on Delivery",
    card: "Credit/Debit Card",
    bank: "Bank Transfer",
  };
  return labels[method] || method;
};

onMounted(() => {
  purchasesStore.loadPurchases();
});
</script>

<style scoped>
.purchase-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
}

.purchase-items {
  max-height: 400px;
  overflow-y: auto;
}

.card-header {
  border-bottom: 2px solid #f0f0f0;
}

.shipping-info {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.shipping-info p {
  font-size: 0.9rem;
}
</style>
