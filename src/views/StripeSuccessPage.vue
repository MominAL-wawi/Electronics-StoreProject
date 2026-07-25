<template>
  <div class="stripe-success-page">
    <div class="container py-5">
      <div class="success-card mx-auto">
        <!-- Animated checkmark -->
        <div class="checkmark-wrapper mb-4">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <h2 class="success-title">Payment Successful!</h2>
        <p class="success-subtitle">
          Thank you for your purchase. Your order has been confirmed and is
          being prepared.
        </p>

        <div v-if="orderId" class="order-info">
          <div class="info-row">
            <span class="info-label">Order ID</span>
            <span class="info-value">#{{ orderId }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Payment via</span>
            <span class="info-value stripe-badge">
              <svg
                viewBox="0 0 60 25"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="12"
                fill="#635bff"
              >
                <path
                  d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.94 10.94 0 0 1-4.56.94c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.64zm-5.92-5.6c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.44.5V5.68h3.94l.14 1.07c.62-.84 1.66-1.44 3.08-1.44 2.67 0 5.26 2.2 5.26 7.52 0 5.42-2.54 7.47-5.06 7.47zM40 9.32c-.98 0-1.59.4-2 .98l.04 5.83c.4.57 1 .97 1.96.97 1.54 0 2.5-1.54 2.5-3.9 0-2.3-.97-3.88-2.5-3.88zM28.24 5.68h4.47V20h-4.47V5.68zm0-4.45l4.47-.5v3.6l-4.47.5V1.23zM21.32 20c-1.84 0-3.46-.75-4.35-2l-.01 1.69H12.5V.85l4.44-.5.01 6.05c.92-1.08 2.42-1.73 4.1-1.73 3.31 0 5.03 2.4 5.03 7.39C26.07 17.58 24.38 20 21.32 20zm-1.24-10.65c-1.52 0-2.46 1.55-2.46 3.9 0 2.42.97 3.92 2.46 3.92 1.56 0 2.48-1.55 2.48-3.92 0-2.37-.93-3.9-2.48-3.9zM8.69 20.3c-2.31 0-3.8-.82-4.68-1.41L2.37 22.3C3.48 23.1 5.22 24 8.72 24c4.14 0 7.05-2.08 7.05-6.56 0-3.44-2.04-4.93-5.42-6.13-2-.74-2.76-1.17-2.76-2.14 0-.83.7-1.3 1.84-1.3 1.38 0 2.9.55 4.08 1.27l1.55-3.26C13.7 5.12 11.83 4.5 9.1 4.5 5.38 4.5 2.7 6.7 2.7 10.8c0 3.13 1.95 4.74 5.52 5.97 2.04.72 2.67 1.25 2.67 2.2 0 .87-.74 1.33-2.2 1.33z"
                />
              </svg>
              Stripe
            </span>
          </div>
        </div>

        <div class="action-buttons">
          <button class="btn btn-stripe-primary" @click="goHome">
            <i class="bi bi-house-fill me-2"></i>
            Back to Home
          </button>
          <button class="btn btn-outline-secondary ms-3" @click="goToProducts">
            <i class="bi bi-grid-fill me-2"></i>
            Continue Shopping
          </button>
        </div>

        <div class="secure-note mt-4">
          <i class="bi bi-shield-check-fill text-success me-1"></i>
          <small class="text-muted"
            >Your payment was processed securely by Stripe</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "../store/cartStore";

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const orderId = computed(() => route.query.order_id || null);

// Clear the cart since payment was successful
cartStore.clearCart();

const goHome = () =>
  router.push("https://electronics-store-project.netlify.app/");
const goToProducts = () =>
  router.push("https://electronics-store-project.netlify.app/products");
</script>

<style scoped>
.stripe-success-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f0efff 0%, #f8f9ff 100%);
}

.success-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 520px;
  box-shadow: 0 20px 60px rgba(99, 91, 255, 0.12);
}

/* ── Checkmark animation ── */
.checkmark-wrapper {
  display: flex;
  justify-content: center;
}

.checkmark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  stroke: #635bff;
  stroke-width: 2;
  stroke-miterlimit: 10;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke: #635bff;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke: #635bff;
  stroke-width: 3;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

/* ── Text ── */
.success-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.success-subtitle {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* ── Order info box ── */
.order-info {
  background: #f8f9ff;
  border: 1px solid #e5e7ff;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
}

.info-row + .info-row {
  border-top: 1px solid #eef0ff;
}

.info-label {
  color: #6b7280;
  font-size: 0.9rem;
}

.info-value {
  font-weight: 600;
  color: #1a1a2e;
}

.stripe-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #635bff;
}

/* ── Buttons ── */
.btn-stripe-primary {
  background: linear-gradient(135deg, #635bff 0%, #4f46e5 100%);
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  padding: 0.7rem 1.8rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(99, 91, 255, 0.3);
}

.btn-stripe-primary:hover {
  background: linear-gradient(135deg, #4f46e5 0%, #3730d6 100%);
  box-shadow: 0 6px 20px rgba(99, 91, 255, 0.45);
  transform: translateY(-1px);
  color: #fff;
}

.secure-note {
  font-size: 0.85rem;
}
</style>
