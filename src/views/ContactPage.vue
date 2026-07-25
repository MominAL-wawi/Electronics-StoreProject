<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero bg-gradient text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="display-4 fw-bold mb-3">Contact Us</h1>
            <p class="lead">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
          <div class="col-lg-6">
            <img
              loading="lazy"
              src="/images/contact-hero.jpg"
              alt="Customer Support"
              class="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Contact Information -->
          <div class="col-lg-4">
            <div class="contact-info">
              <h3 class="fw-bold mb-4">Get In Touch</h3>
              <p class="text-muted mb-4">
                Have questions? We're here to help! Reach out to us through any
                of the following channels.
              </p>

              <div class="info-item d-flex mb-4">
                <div class="icon-box me-3">
                  <i class="bi bi-geo-alt-fill fs-4 text-primary"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Address</h5>
                  <p class="text-muted mb-0">
                    King Fahd Road, Riyadh<br />Saudi Arabia
                  </p>
                </div>
              </div>

              <div class="info-item d-flex mb-4">
                <div class="icon-box me-3">
                  <i class="bi bi-telephone-fill fs-4 text-success"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Phone</h5>
                  <p class="text-muted mb-0">920000000<br />Available 24/7</p>
                </div>
              </div>

              <div class="info-item d-flex mb-4">
                <div class="icon-box me-3">
                  <i class="bi bi-envelope-fill fs-4 text-warning"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Email</h5>
                  <p class="text-muted mb-0">
                    support@electronicsstore.com<br />info@electronicsstore.com
                  </p>
                </div>
              </div>

              <div class="info-item d-flex mb-4">
                <div class="icon-box me-3">
                  <i class="bi bi-clock-fill fs-4 text-danger"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-1">Working Hours</h5>
                  <p class="text-muted mb-0">
                    Saturday - Thursday: 9AM - 10PM<br />Friday: 2PM - 10PM
                  </p>
                </div>
              </div>

              <div class="social-links mt-4">
                <h5 class="fw-bold mb-3">Follow Us</h5>
                <div class="d-flex gap-3">
                  <a href="#" class="social-icon">
                    <i class="bi bi-facebook fs-4"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="bi bi-twitter fs-4"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="bi bi-instagram fs-4"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="bi bi-youtube fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="contact-form-wrapper p-4 bg-light rounded">
              <h3 class="fw-bold mb-4">Send Us a Message</h3>
              <form @submit.prevent="handleSubmit">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label fw-bold">Full Name *</label>
                    <input
                      v-model="formData.name"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold">Email Address *</label>
                    <input
                      v-model="formData.email"
                      type="email"
                      class="form-control"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold">Phone Number</label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      class="form-control"
                      placeholder="05xxxxxxxx"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold">Subject *</label>
                    <select
                      v-model="formData.subject"
                      class="form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="product">Product Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label class="form-label fw-bold">Message *</label>
                    <textarea
                      v-model="formData.message"
                      class="form-control"
                      rows="6"
                      required
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg px-5"
                      :disabled="isSubmitting"
                    >
                      <i class="bi bi-send me-2"></i>
                      {{ isSubmitting ? "Sending..." : "Send Message" }}
                    </button>
                  </div>
                </div>
              </form>

              <div
                v-if="submitStatus"
                class="alert mt-4"
                :class="
                  submitStatus === 'success' ? 'alert-success' : 'alert-danger'
                "
              >
                <i
                  class="bi"
                  :class="
                    submitStatus === 'success'
                      ? 'bi-check-circle'
                      : 'bi-exclamation-circle'
                  "
                ></i>
                {{ submitMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-4">
          <h3 class="fw-bold">Visit Our Store</h3>
          <p class="text-muted">
            Come see our products in person at our showroom
          </p>
        </div>
        <div class="map-placeholder rounded overflow-hidden shadow">
          <img
            loading="lazy"
            src="/images/contact-office.jpg"
            alt="Store Location"
            class="img-fluid w-100"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const formData = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const submitStatus = ref(null);
const submitMessage = ref("");
const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    const messageData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const response = await fetch(
      "https://electronics-store-c9093-default-rtdb.firebaseio.com/Messages.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    submitStatus.value = "success";
    submitMessage.value =
      "Thank you for your message! We will get back to you within 24 hours.";

    // Reset form
    setTimeout(() => {
      formData.name = "";
      formData.email = "";
      formData.phone = "";
      formData.subject = "";
      formData.message = "";
      submitStatus.value = null;
    }, 3000);
  } catch (error) {
    submitStatus.value = "error";
    submitMessage.value = "Failed to send message. Please try again later.";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.contact-info {
  position: sticky;
  top: 100px;
}

.icon-box {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  flex-shrink: 0;
}

.info-item {
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.info-item:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.social-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  color: #667eea;
}

.contact-form-wrapper {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-control,
.form-select {
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.map-placeholder {
  height: 400px;
  background: #f5f5f5;
}

.alert {
  border-radius: 8px;
  border: none;
}
</style>
