<template>
  <div class="checkout-page">
    <div class="container py-4">
      <h2 class="mb-4">Checkout</h2>

      <div class="row">
        <div class="col-lg-8 mb-4">
          <!-- Shipping Information -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
              <h5 class="mb-4">Shipping Information</h5>

              <form @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label">First Name *</label>
                    <input
                      v-model="formData.firstName"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="form-label">Last Name *</label>
                    <input
                      v-model="formData.lastName"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <label class="form-label">Phone Number *</label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <label class="form-label">Email *</label>
                    <input
                      v-model="formData.email"
                      type="email"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <label class="form-label">Address *</label>
                    <input
                      v-model="formData.address"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="form-label">City *</label>
                    <input
                      v-model="formData.city"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-md-6 mb-3">
                    <label class="form-label">Postal Code *</label>
                    <input
                      v-model="formData.postalCode"
                      type="text"
                      class="form-control"
                      required
                    />
                  </div>

                  <div class="col-12 mb-3">
                    <label class="form-label">Order Notes (Optional)</label>
                    <textarea
                      v-model="formData.notes"
                      class="form-control"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h5 class="mb-4">Payment Method</h5>

              <div class="form-check mb-3">
                <input
                  id="cod"
                  v-model="formData.paymentMethod"
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  value="cod"
                />
                <label class="form-check-label" for="cod">
                  <i class="bi bi-cash me-2"></i>
                  Cash on Delivery
                </label>
              </div>

              <div class="form-check mb-3">
                <input
                  id="card"
                  v-model="formData.paymentMethod"
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  value="card"
                />
                <label class="form-check-label" for="card">
                  <i class="bi bi-credit-card me-2"></i>
                  Credit / Debit Card
                </label>
              </div>

              <div
                v-if="formData.paymentMethod === 'card'"
                class="card-details mt-3 p-3 bg-light rounded"
              >
                <div class="row">
                  <div class="col-12 mb-3">
                    <label class="form-label">Card Number *</label>
                    <input
                      v-model="formData.cardNumber"
                      type="text"
                      class="form-control"
                      placeholder="1234 5678 9012 3456"
                      maxlength="19"
                      required
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <label class="form-label">Cardholder Name *</label>
                    <input
                      v-model="formData.cardName"
                      type="text"
                      class="form-control"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label">Expiry Date *</label>
                    <input
                      v-model="formData.cardExpiry"
                      type="text"
                      class="form-control"
                      placeholder="MM/YY"
                      maxlength="5"
                      required
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <label class="form-label">CVV *</label>
                    <input
                      v-model="formData.cardCvv"
                      type="text"
                      class="form-control"
                      placeholder="123"
                      maxlength="3"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-check">
                <input
                  id="bank"
                  v-model="formData.paymentMethod"
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  value="bank"
                />
                <label class="form-check-label" for="bank">
                  <i class="bi bi-bank me-2"></i>
                  Bank Transfer
                </label>
              </div>

              <div
                v-if="formData.paymentMethod === 'bank'"
                class="bank-details mt-3 p-3 bg-light rounded"
              >
                <div class="row">
                  <div class="col-12 mb-3">
                    <label class="form-label">Bank Name *</label>
                    <select
                      v-model="formData.bankName"
                      class="form-select"
                      required
                    >
                      <option value="">Select Bank</option>
                      <option value="bank1">National Bank</option>
                      <option value="bank2">Commercial Bank</option>
                      <option value="bank3">International Bank</option>
                      <option value="bank4">City Bank</option>
                    </select>
                  </div>
                  <div class="col-12 mb-3">
                    <label class="form-label">Account Number *</label>
                    <input
                      v-model="formData.accountNumber"
                      type="text"
                      class="form-control"
                      placeholder="Enter your account number"
                      required
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <label class="form-label">Account Holder Name *</label>
                    <input
                      v-model="formData.accountHolder"
                      type="text"
                      class="form-control"
                      placeholder="Enter account holder name"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- ── Stripe ── -->
              <div class="form-check mt-3">
                <input
                  id="stripe"
                  v-model="formData.paymentMethod"
                  class="form-check-input"
                  type="radio"
                  name="payment"
                  value="stripe"
                />
                <label class="form-check-label stripe-label" for="stripe">
                  <span class="stripe-badge-sm me-2">Stripe</span>
                  Pay securely with Stripe
                </label>
              </div>

              <div
                v-if="formData.paymentMethod === 'stripe'"
                class="stripe-details mt-3 p-3 rounded"
              >
                <div class="d-flex align-items-center gap-2 mb-3">
                  <i class="bi bi-shield-lock-fill text-stripe"></i>
                  <span class="text-muted small"
                    >You will be redirected to Stripe's secure hosted payment
                    page to complete your purchase.</span
                  >
                </div>
                <!-- Stripe Pay button directly under the Stripe radio -->
                <button
                  class="btn btn-stripe w-100 mb-2"
                  :disabled="isStripeLoading"
                  @click.prevent="payWithStripe"
                >
                  <span v-if="isStripeLoading">
                    <span
                      class="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Redirecting to Stripe…
                  </span>
                  <span
                    v-else
                    class="d-flex align-items-center justify-content-center gap-2"
                  >
                    <span class="stripe-badge-white">Stripe</span>
                    Pay with Stripe
                  </span>
                </button>
                <div
                  class="d-flex align-items-center justify-content-center gap-2"
                >
                  <i class="bi bi-credit-card-2-front-fill text-stripe"></i>
                  <span class="text-muted small"
                    >Accepts Visa, Mastercard, American Express, and more.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h5 class="mb-4">Order Summary</h5>

              <div class="order-items mb-3">
                <div
                  v-for="item in cartItems"
                  :key="item.id"
                  class="d-flex justify-content-between mb-2"
                >
                  <span>{{ item.name }} × {{ item.quantity }}</span>
                  <span>${{ item.price * item.quantity }}</span>
                </div>
              </div>

              <hr />

              <div class="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${{ cartTotal }}</span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span class="text-success">Free</span>
              </div>

              <div class="d-flex justify-content-between mb-2">
                <span>Tax (15%):</span>
                <span>${{ tax }}</span>
              </div>

              <hr />

              <div class="d-flex justify-content-between mb-4">
                <span class="fw-bold">Total:</span>
                <span class="fw-bold text-primary h5 mb-0"
                  >${{ totalWithTax }}</span
                >
              </div>

              <!-- Standard Confirm Order button (COD / Card / Bank) -->
              <button
                v-if="formData.paymentMethod !== 'stripe'"
                class="btn btn-primary w-100 mb-3"
                :disabled="!isFormValid"
                @click="handleSubmit"
              >
                Confirm Order
              </button>

              <div class="text-center">
                <small class="text-muted">
                  <i class="bi bi-shield-check me-1"></i>
                  Secure and encrypted transaction
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../store/cartStore";
import { usePurchasesStore } from "../store/purchasesStore";
import { useAuthStore } from "../store/authStore";

const router = useRouter();
const cartStore = useCartStore();
const purchasesStore = usePurchasesStore();
const authStore = useAuthStore();

const isStripeLoading = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  notes: "",
  paymentMethod: "cod",
  cardNumber: "",
  cardName: "",
  cardExpiry: "",
  cardCvv: "",
  bankName: "",
  accountNumber: "",
  accountHolder: "",
});

const cartItems = computed(() => cartStore.items);
const cartTotal = computed(() => cartStore.cartTotal);
const tax = computed(() => Math.round(cartTotal.value * 0.15));
const totalWithTax = computed(() => cartTotal.value + tax.value);

const isFormValid = computed(() => {
  const basicValid =
    formData.value.firstName &&
    formData.value.lastName &&
    formData.value.phone &&
    formData.value.email &&
    formData.value.address &&
    formData.value.city &&
    formData.value.postalCode &&
    formData.value.paymentMethod;

  if (!basicValid) return false;

  // Stripe: no extra fields needed — redirect handles payment
  if (formData.value.paymentMethod === "stripe") return true;

  if (formData.value.paymentMethod === "card") {
    return (
      formData.value.cardNumber &&
      formData.value.cardName &&
      formData.value.cardExpiry &&
      formData.value.cardCvv
    );
  }

  if (formData.value.paymentMethod === "bank") {
    return (
      formData.value.bankName &&
      formData.value.accountNumber &&
      formData.value.accountHolder
    );
  }

  return true;
});

const handleSubmit = async () => {
  if (!isFormValid.value) {
    alert("Please fill in all required fields");
    return;
  }

  try {
    const orderDate = new Date().toISOString();

    const buyerData = {
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      fullName: `${formData.value.firstName} ${formData.value.lastName}`,
      phone: formData.value.phone,
      email: formData.value.email,
      address: formData.value.address,
      city: formData.value.city,
      postalCode: formData.value.postalCode,
      notes: formData.value.notes,
      paymentMethod: formData.value.paymentMethod,
      orderDate: orderDate,
    };

    const salesData = {
      items: cartItems.value.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity,
        image: item.image,
      })),
      subtotal: cartTotal.value,
      tax: tax.value,
      total: totalWithTax.value,
      orderDate: orderDate,
    };

    const buyerResponse = await fetch(
      "https://electronics-store-c9093-default-rtdb.firebaseio.com/Buyers.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buyerData),
      }
    );

    if (!buyerResponse.ok) {
      throw new Error("Failed to save buyer data");
    }

    const salesResponse = await fetch(
      "https://electronics-store-c9093-default-rtdb.firebaseio.com/Sales.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(salesData),
      }
    );

    if (!salesResponse.ok) {
      throw new Error("Failed to save sales data");
    }

    const buyerResult = await buyerResponse.json();
    const salesResult = await salesResponse.json();

    console.log("Buyer saved with ID:", buyerResult.name);
    console.log("Sales saved with ID:", salesResult.name);

    purchasesStore.addPurchase({
      items: salesData.items,
      subtotal: salesData.subtotal,
      tax: salesData.tax,
      total: salesData.total,
      shippingInfo: {
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        phone: formData.value.phone,
        email: formData.value.email,
        address: formData.value.address,
        city: formData.value.city,
        postalCode: formData.value.postalCode,
      },
      paymentMethod: formData.value.paymentMethod,
    });

    alert(
      "Your order has been confirmed successfully! We will contact you soon"
    );
    cartStore.clearCart();
    router.push("/");
  } catch (error) {
    console.error("Error saving order:", error);
    alert("There was an error processing your order. Please try again.");
  }
};

// ── Stripe Checkout ──────────────────────────────────────────
const payWithStripe = async () => {
  // We no longer validate the shipping form for Stripe since Stripe will collect it
  // if(!isFormValid.value) { ... }

  if (cartItems.value.length === 0) {
    alert("Your cart is empty");
    return;
  }

  // Get the firebase_uid from the logged-in user
  const firebaseUid =
    authStore.user?.uid ||
    authStore.user?.localId ||
    authStore.user?.email ||
    "guest";

  isStripeLoading.value = true;

  try {
    // Build cart_items array for the backend
    const cartPayload = cartItems.value.map((item) => ({
      product_id: item.id,
      quantity: item.quantity,
    }));

    const response = await fetch(
      "https://silver-partridge-790630.hostingersite.com/stripe-backend/creatCheckout.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart_items: cartPayload,
          firebase_uid: firebaseUid,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.error || "Failed to create Stripe session");
    }

    // Redirect to Stripe hosted checkout
    window.location.href = data.checkout_url;
  } catch (error) {
    console.error("Stripe checkout error:", error);
    alert("Payment error: " + error.message);
    isStripeLoading.value = false;
  }
};
</script>

<style scoped>
.order-items {
  max-height: 200px;
  overflow-y: auto;
}

.form-check-input:checked {
  background-color: #667eea;
  border-color: #667eea;
}

.card-details,
.bank-details,
.stripe-details {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Stripe branding ── */
.stripe-label {
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

.stripe-icon {
  vertical-align: middle;
}

.text-stripe {
  color: #635bff;
}

.stripe-details {
  background: linear-gradient(135deg, #f0efff 0%, #e8e6ff 100%);
  border: 1px solid #635bff33;
  border-radius: 8px;
}

/* Stripe pay button */
.btn-stripe {
  background: linear-gradient(135deg, #635bff 0%, #4f46e5 100%);
  border: none;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.3px;
  border-radius: 8px;
  padding: 0.65rem 1.25rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(99, 91, 255, 0.35);
}

.btn-stripe:hover:not(:disabled) {
  background: linear-gradient(135deg, #4f46e5 0%, #3730d6 100%);
  box-shadow: 0 6px 20px rgba(99, 91, 255, 0.5);
  transform: translateY(-1px);
  color: #fff;
}

.btn-stripe:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* ── New Stripe Badges ── */
.stripe-badge-sm {
  background-color: #635bff;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stripe-badge-white {
  background-color: white;
  color: #635bff;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
