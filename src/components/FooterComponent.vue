<template>
  <footer class="footer bg-dark text-white mt-auto">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-3 mb-4">
          <h5 class="mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-shop text-warning fs-3"></i>
            <span>Electronics Store</span>
          </h5>
          <p class="text-muted">
            Your premier destination for the latest electronics at the best
            prices
          </p>
          <div class="social-links mt-3">
            <a href="#" class="text-white me-3"
              ><i class="bi bi-facebook fs-5"></i
            ></a>
            <a href="#" class="text-white me-3"
              ><i class="bi bi-twitter fs-5"></i
            ></a>
            <a href="#" class="text-white me-3"
              ><i class="bi bi-instagram fs-5"></i
            ></a>
            <a href="#" class="text-white"
              ><i class="bi bi-youtube fs-5"></i
            ></a>
          </div>
        </div>

        <div class="col-md-3 mb-4">
          <h6 class="mb-3">Quick Links</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/" class="text-muted text-decoration-none"
                >Home</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/products"
                class="text-muted text-decoration-none"
                >Products</router-link
              >
            </li>
            <li class="mb-2">
              <router-link to="/about" class="text-muted text-decoration-none"
                >About Us</router-link
              >
            </li>
            <li class="mb-2">
              <router-link to="/contact" class="text-muted text-decoration-none"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-4">
          <h6 class="mb-3">Customer Service</h6>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#" class="text-muted text-decoration-none"
                >Return Policy</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted text-decoration-none"
                >Shipping & Delivery</a
              >
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted text-decoration-none">FAQ</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted text-decoration-none">Warranty</a>
            </li>
          </ul>
        </div>

        <div id="icons" class="col-md-3 mb-4">
          <h6 class="mb-3">Contact Us</h6>
          <ul class="list-unstyled text-muted">
            <li class="mb-2">
              <i class="bi bi-geo-alt me-2"></i>
              Riyadh, Saudi Arabia
            </li>
            <li class="mb-2">
              <i class="bi bi-telephone me-2"></i>
              920000000
            </li>
            <li class="mb-2">
              <i class="bi bi-envelope me-2"></i>
              info@electronics-store.com
            </li>
          </ul>
        </div>
      </div>

      <hr class="my-4 bg-secondary" />

      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="text-muted mb-0">
            &copy; 2025 Electronics Store. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <img
            loading="lazy"
            src="/visa.png?height=30&width=50"
            alt="Visa"
            class="me-2 payment-logo"
          />
          <img
            loading="lazy"
            src="/mastercard.png?height=30&width=50"
            alt="Mastercard"
            class="me-2 payment-logo"
          />
          <img
            loading="lazy"
            src="/mada.png?height=30&width=50"
            alt="Mada"
            class="payment-logo"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  margin-top: 5rem;
}

.social-links a {
  transition: opacity 0.3s;
}

.social-links a:hover {
  opacity: 0.7;
}

.footer a:hover {
  color: #ff9900 !important;
}
.social-links a:hover {
  color: #fff !important;
}
.payment-logo {
  height: 30px;
  width: auto;
  object-fit: contain;
  background: white;
  padding: 4px;
  border-radius: 4px;
}

.bi-shop {
  color: #ff9900;
}
</style>
