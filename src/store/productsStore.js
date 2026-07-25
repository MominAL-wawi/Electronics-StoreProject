import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 1199,
        originalPrice: 1299,
        image: "/iphone-15-pro-max.png",
        category: "smartphones",
        brand: "Apple",
        rating: 4.8,
        reviews: 1250,
        inStock: true,
        description:
          "The latest iPhone from Apple with A17 Pro chip and enhanced camera",
        specs: {
          screen: "6.7-inch Super Retina XDR",
          processor: "A17 Pro",
          ram: "8GB",
          storage: "256GB",
          camera: "48MP + 12MP + 12MP",
          battery: "4422 mAh",
        },
      },
      {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 1099,
        originalPrice: 1199,
        image: "/samsung-galaxy-s24-ultra.png",
        category: "smartphones",
        brand: "Samsung",
        rating: 4.7,
        reviews: 980,
        inStock: true,
        description: "Samsung's flagship phone with S Pen and 200MP camera",
        specs: {
          screen: "6.8-inch Dynamic AMOLED",
          processor: "Snapdragon 8 Gen 3",
          ram: "12GB",
          storage: "512GB",
          camera: "200MP + 50MP + 12MP + 10MP",
          battery: "5000 mAh",
        },
      },
      {
        id: 3,
        name: 'MacBook Pro 16"',
        price: 2499,
        originalPrice: 2699,
        image: "/macbook-pro-16-inch.jpg",
        category: "laptops",
        brand: "Apple",
        rating: 4.9,
        reviews: 750,
        inStock: true,
        description:
          "Professional laptop with M3 Max processor and Liquid Retina XDR display",
        specs: {
          screen: "16.2-inch Liquid Retina XDR",
          processor: "Apple M3 Max",
          ram: "32GB",
          storage: "1TB SSD",
          graphics: "40-core GPU",
          battery: "Up to 22 hours",
        },
      },
      {
        id: 4,
        name: "Dell XPS 15",
        price: 1799,
        originalPrice: 1999,
        image: "/dell-xps-15-laptop.jpg",
        category: "laptops",
        brand: "Dell",
        rating: 4.6,
        reviews: 620,
        inStock: true,
        description:
          "Powerful laptop for professionals with InfinityEdge display",
        specs: {
          screen: "15.6-inch 4K OLED",
          processor: "Intel Core i9-13900H",
          ram: "32GB DDR5",
          storage: "1TB SSD",
          graphics: "NVIDIA RTX 4060",
          battery: "Up to 12 hours",
        },
      },
      {
        id: 5,
        name: 'iPad Pro 12.9"',
        price: 1099,
        originalPrice: 1199,
        image: "/ipad-pro-12-9-inch.png",
        category: "tablets",
        brand: "Apple",
        rating: 4.8,
        reviews: 890,
        inStock: true,
        description:
          "Professional tablet with M2 chip and Liquid Retina XDR display",
        specs: {
          screen: "12.9-inch Liquid Retina XDR",
          processor: "Apple M2",
          ram: "8GB",
          storage: "256GB",
          camera: "12MP + 10MP",
          battery: "Up to 10 hours",
        },
      },
      {
        id: 6,
        name: "Samsung Galaxy Tab S9",
        price: 799,
        originalPrice: 899,
        image: "/samsung-galaxy-tab-s9.jpg",
        category: "tablets",
        brand: "Samsung",
        rating: 4.5,
        reviews: 540,
        inStock: true,
        description: "Advanced tablet with S Pen and Dynamic AMOLED display",
        specs: {
          screen: "11-inch Dynamic AMOLED",
          processor: "Snapdragon 8 Gen 2",
          ram: "8GB",
          storage: "256GB",
          camera: "13MP + 8MP",
          battery: "8400 mAh",
        },
      },
      {
        id: 7,
        name: "AirPods Pro 2",
        price: 249,
        originalPrice: 279,
        image: "/airpods-pro-2.jpg",
        category: "accessories",
        brand: "Apple",
        rating: 4.7,
        reviews: 2100,
        inStock: true,
        description: "Wireless earbuds with enhanced active noise cancellation",
        specs: {
          type: "In-ear headphones",
          noiseCancellation: "Active noise cancellation",
          battery: "Up to 6 hours",
          charging: "Wireless charging",
          waterResistance: "IPX4",
          connectivity: "Bluetooth 5.3",
        },
      },
      {
        id: 8,
        name: "Sony WH-1000XM5",
        price: 399,
        originalPrice: 449,
        image: "/sony-wh-1000xm5.png",
        category: "accessories",
        brand: "Sony",
        rating: 4.8,
        reviews: 1560,
        inStock: true,
        description:
          "Wireless headphones with industry-leading noise cancellation",
        specs: {
          type: "Over-ear headphones",
          noiseCancellation: "Intelligent noise cancellation",
          battery: "Up to 30 hours",
          charging: "Fast charging USB-C",
          waterResistance: "None",
          connectivity: "Bluetooth 5.2",
        },
      },
      {
        id: 9,
        name: "Apple Watch Series 9",
        price: 429,
        originalPrice: 479,
        image: "/apple-watch-series-9.jpg",
        category: "wearables",
        brand: "Apple",
        rating: 4.7,
        reviews: 1340,
        inStock: true,
        description: "Advanced smartwatch with S9 chip and brighter display",
        specs: {
          screen: "1.9-inch Always-On Retina",
          processor: "S9 SiP",
          storage: "64GB",
          sensors: "Heart rate, Blood oxygen, ECG",
          battery: "Up to 18 hours",
          waterResistance: "50 meters",
        },
      },
      {
        id: 10,
        name: "Samsung Galaxy Watch 6",
        price: 329,
        originalPrice: 379,
        image: "/samsung-galaxy-watch-6.jpg",
        category: "wearables",
        brand: "Samsung",
        rating: 4.6,
        reviews: 890,
        inStock: true,
        description: "Elegant smartwatch with comprehensive health monitoring",
        specs: {
          screen: "1.5-inch Super AMOLED",
          processor: "Exynos W930",
          storage: "16GB",
          sensors: "Heart rate, Blood oxygen, ECG, Body composition",
          battery: "Up to 40 hours",
          waterResistance: "5ATM + IP68",
        },
      },
      {
        id: 11,
        name: 'LG OLED C3 65"',
        price: 1799,
        originalPrice: 1999,
        image: "/lg-oled-c3-65-inch-tv.jpg",
        category: "tvs",
        brand: "LG",
        rating: 4.9,
        reviews: 670,
        inStock: true,
        description: "4K OLED TV with α9 Gen6 AI processor",
        specs: {
          screen: "65-inch OLED 4K",
          resolution: "3840 x 2160",
          hdr: "Dolby Vision IQ, HDR10, HLG",
          refreshRate: "120Hz",
          smart: "webOS 23",
          ports: "4x HDMI 2.1",
        },
      },
      {
        id: 12,
        name: "Sony PlayStation 5",
        price: 499,
        originalPrice: 549,
        image: "/sony-playstation-5-console.jpg",
        category: "gaming",
        brand: "Sony",
        rating: 4.8,
        reviews: 3200,
        inStock: true,
        description: "Next-gen gaming console with ultra-fast SSD",
        specs: {
          processor: "AMD Zen 2",
          graphics: "AMD RDNA 2",
          ram: "16GB GDDR6",
          storage: "825GB SSD",
          resolution: "Up to 8K",
          frameRate: "Up to 120fps",
        },
      },
    ],
    categories: [
      { id: "smartphones", name: "Smartphones", icon: "bi-phone" },
      { id: "laptops", name: "Laptops", icon: "bi-laptop" },
      { id: "tablets", name: "Tablets", icon: "bi-tablet" },
      { id: "accessories", name: "Accessories", icon: "bi-headphones" },
      { id: "wearables", name: "Wearables", icon: "bi-smartwatch" },
      { id: "tvs", name: "TVs", icon: "bi-tv" },
      { id: "gaming", name: "Gaming", icon: "bi-controller" },
    ],
    brands: ["Apple", "Samsung", "Dell", "Sony", "LG"],
    filters: {
      category: null,
      brand: null,
      minPrice: 0,
      maxPrice: 5000,
      sortBy: "featured",
      searchQuery: "",
    },
  }),

  getters: {
    filteredProducts: (state) => {
      let filtered = [...state.products];

      if (state.filters.searchQuery) {
        const query = state.filters.searchQuery.toLowerCase();
        filtered = filtered.filter((p) => {
          const categoryName =
            state.categories
              .find((c) => c.id === p.category)
              ?.name.toLowerCase() || "";
          const brandName = p.brand.toLowerCase();
          const productName = p.name.toLowerCase();
          return (
            categoryName.includes(query) ||
            brandName.includes(query) ||
            productName.includes(query)
          );
        });
      }

      if (state.filters.category) {
        filtered = filtered.filter(
          (p) => p.category === state.filters.category
        );
      }

      if (state.filters.brand) {
        filtered = filtered.filter((p) => p.brand === state.filters.brand);
      }

      filtered = filtered.filter(
        (p) =>
          p.price >= state.filters.minPrice && p.price <= state.filters.maxPrice
      );

      switch (state.filters.sortBy) {
        case "price-low":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          filtered.sort((a, b) => b.id - a.id);
          break;
      }

      return filtered;
    },

    getProductById: (state) => (id) => {
      return state.products.find((p) => p.id === Number.parseInt(id));
    },

    getProductsByCategory: (state) => (category) => {
      return state.products.filter((p) => p.category === category);
    },

    featuredProducts: (state) => {
      return state.products.filter((p) => p.rating >= 4.7).slice(0, 6);
    },
  },

  actions: {
    setFilter(filterName, value) {
      this.filters[filterName] = value;
    },

    resetFilters() {
      this.filters = {
        category: null,
        brand: null,
        minPrice: 0,
        maxPrice: 5000,
        sortBy: "featured",
        searchQuery: "",
      };
    },
  },
});
