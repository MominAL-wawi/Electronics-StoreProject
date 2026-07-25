<template>
  <div class="signup-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-5">
          <div class="card shadow">
            <div class="card-body p-3 p-sm-4 p-md-5">
              <h2 class="text-center mb-4">Create New Account</h2>

              <div
                v-if="successMessage"
                class="alert alert-success"
                role="alert"
              >
                {{ successMessage }}
              </div>

              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>

              <form @submit.prevent="handleSignup">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    class="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="form-control"
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    id="password"
                    v-model="formData.password"
                    type="password"
                    class="form-control"
                    required
                    placeholder="Enter your password"
                    minlength="6"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary w-100 mb-3"
                  :disabled="isLoading"
                >
                  <span
                    v-if="isLoading"
                    class="spinner-border spinner-border-sm me-2"
                  ></span>
                  {{ isLoading ? "Signing up..." : "Sign Up" }}
                </button>

                <div class="text-center">
                  <p class="mb-0">
                    Already have an account?
                    <router-link to="/login" class="text-decoration-none"
                      >Login</router-link
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  name: "",
  email: "",
  password: "",
});

const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const handleSignup = async () => {
  isLoading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    // 1- جلب كل المستخدمين الموجودين
    const checkResponse = await fetch(
      "https://electronics-store-c9093-default-rtdb.firebaseio.com/Sign%20up.json"
    );
    const existingUsers = await checkResponse.json();

    // 2- نتأكد إذا الإيميل مستخدم من قبل
    const emailExists =
      existingUsers &&
      Object.values(existingUsers).some(
        (user) => user.email === formData.value.email
      );

    if (emailExists) {
      errorMessage.value = "This email is already registered. Please login.";
      isLoading.value = false;
      return;
    }

    // 3- إنشاء الحساب لو الإيميل غير مستخدم
    const response = await fetch(
      "https://electronics-store-c9093-default-rtdb.firebaseio.com/Sign%20up.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.value.name,
          email: formData.value.email,
          password: formData.value.password,
          createdAt: new Date().toISOString(),
        }),
      }
    );

    const data = await response.json();

    // التحقق من نجاح التسجيل بناءً على وجود المفتاح الذي أرجعه Firebase
    if (data && data.name) {
      successMessage.value =
        "Account created successfully! You will be redirected to the login page...";
      formData.value = { name: "", email: "", password: "" };

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      errorMessage.value =
        "An error occurred while creating the account. Please try again.";
    }
  } catch (error) {
    console.error(error);
    errorMessage.value =
      "Connection error. Please check your internet connection.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.signup-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
}

.card {
  border: none;
  border-radius: 15px;
}

.btn-primary {
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 8px;
}

/* Added responsive styles for mobile devices */
@media (max-width: 576px) {
  .signup-page {
    min-height: calc(100vh - 150px);
    padding: 1rem 0;
  }

  .card-body h2 {
    font-size: 1.5rem;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 10px;
  }

  .form-label {
    font-size: 0.9rem;
  }

  .form-control {
    font-size: 0.9rem;
  }
}
</style>
