<template>
  <div class="stripe-cancel-page">
    <div class="container py-5">
      <div class="cancel-card mx-auto">
        <div class="x-wrapper mb-4">
          <div class="x-circle">
            <i class="bi bi-x-lg"></i>
          </div>
        </div>

        <h2 class="cancel-title">Payment Cancelled</h2>
        <p class="cancel-subtitle">
          You cancelled the checkout process. Your cart has been saved — you can
          complete your purchase whenever you're ready.
        </p>

        <div v-if="orderId" class="info-box">
          <i class="bi bi-info-circle me-2 text-muted"></i>
          <span class="text-muted small">
            Order reference: <strong>#{{ orderId }}</strong>
          </span>
        </div>

        <div class="action-buttons mt-4">
          <button class="btn btn-stripe-primary" @click="goToCheckout">
            <i class="bi bi-arrow-left-circle me-2"></i>
            Back to Checkout
          </button>

          <button class="btn btn-outline-secondary ms-3" @click="goHome">
            <i class="bi bi-house me-2"></i>
            Home
          </button>
        </div>

        <div class="help-note mt-4">
          <small class="text-muted">
            Need help?
            <router-link to="/contact" class="text-stripe">
              Contact us
            </router-link>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const orderId = computed(() => route.query.order_id || null);

const goToCheckout = () => router.push("/checkout");
const goHome = () => router.push("/");
</script>

<style scoped>
.stripe-cancel-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #fff5f5 0%, #fdf9f9 100%);
}

.cancel-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 520px;
  box-shadow: 0 20px 60px rgba(220, 53, 69, 0.1);
}

.x-wrapper {
  display: flex;
  justify-content: center;
}

.x-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.x-circle .bi {
  font-size: 2rem;
  color: #dc3545;
}

@keyframes popIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.cancel-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.cancel-subtitle {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0.85rem 1.25rem;
  display: inline-flex;
  align-items: center;
}

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

.text-stripe {
  color: #635bff;
  text-decoration: none;
  font-weight: 500;
}

.text-stripe:hover {
  text-decoration: underline;
}
</style>
