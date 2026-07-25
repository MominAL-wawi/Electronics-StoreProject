<template>
  <div class="cart-page">
    <div class="container py-4">
      <h2 class="mb-4">Shopping Cart</h2>

      <div v-if="cartItems.length > 0" class="row">
        <div class="col-lg-8 mb-4">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div v-for="item in cartItems" :key="item.id" class="cart-item">
                <div class="row align-items-center">
                  <div class="col-md-2">
                    <img
                      loading="lazy"
                      :src="item.image"
                      :alt="item.name"
                      class="img-fluid rounded"
                    />
                  </div>

                  <div class="col-md-4">
                    <h6 class="mb-1">{{ item.name }}</h6>
                    <small class="text-muted">{{ item.brand }}</small>
                  </div>

                  <div class="col-md-2">
                    <span class="fw-bold">${{ item.price }}</span>
                  </div>

                  <div class="col-md-3">
                    <div class="input-group input-group-sm">
                      <button
                        class="btn btn-outline-secondary"
                        @click="decreaseQuantity(item.id)"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control text-center"
                        :value="item.quantity"
                        readonly
                      />
                      <button
                        class="btn btn-outline-secondary"
                        @click="increaseQuantity(item.id)"
                      >
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div class="col-md-1 text-end">
                    <button
                      class="btn btn-link text-danger p-0"
                      @click="removeItem(item.id)"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                <hr class="my-3" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h5 class="mb-4">Order Summary</h5>

              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${{ cartTotal }}</span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span class="text-success">Free</span>
              </div>

              <hr />

              <div class="d-flex justify-content-between mb-4">
                <span class="fw-bold">Total:</span>
                <span class="fw-bold text-primary h5 mb-0"
                  >${{ cartTotal }}</span
                >
              </div>

              <router-link to="/checkout" class="btn btn-primary w-100 mb-3">
                Proceed to Checkout
              </router-link>

              <router-link to="/products" class="btn btn-outline-primary w-100">
                Continue Shopping
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5">
        <i class="bi bi-cart-x fs-1 text-muted mb-3 d-block"></i>
        <h4>Your Cart is Empty</h4>
        <p class="text-muted mb-4">You haven't added any products yet</p>
        <router-link to="/products" class="btn btn-primary">
          Browse Products
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../store/cartStore";

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);
const cartTotal = computed(() => cartStore.cartTotal);

const increaseQuantity = (productId) => {
  const item = cartItems.value.find((i) => i.id === productId);
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1);
  }
};

const decreaseQuantity = (productId) => {
  const item = cartItems.value.find((i) => i.id === productId);
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(productId, item.quantity - 1);
  }
};

const removeItem = (productId) => {
  if (confirm("Do you want to remove this product from the cart?")) {
    cartStore.removeFromCart(productId);
  }
};
</script>

<style scoped>
.cart-item:last-child hr {
  display: none;
}

.cart-item img {
  max-height: 100px;
  object-fit: contain;
}
</style>
