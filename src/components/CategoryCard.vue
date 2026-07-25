<template>
  <div class="category-card">
    <router-link
      :to="{ name: 'Products', query: { category: category.id } }"
      class="text-decoration-none"
    >
      <div class="card border-0 shadow-sm h-100 text-center">
        <div
          class="card-body d-flex flex-column align-items-center justify-content-center py-4"
        >
          <i :class="category.icon" class="category-icon text-primary mb-3"></i>
          <h6 class="card-title mb-0">{{ category.name }}</h6>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.category-card {
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-card .card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card .card:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.category-card .card:hover .category-icon,
.category-card .card:hover .card-title {
  color: white !important;
}

.category-icon {
  font-size: 3rem;
  transition: color 0.3s ease;
}
</style>
