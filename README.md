# Electronics Store - Vue.js E-commerce Application

A comprehensive e-commerce platform built with Vue.js 3 and Bootstrap 5 for selling electronic products, featuring a complete authentication system, shopping cart management, favorites, and purchase history tracking.

## 🌟 Features

### Authentication System

- **User Registration**: Create new accounts with data stored in Firebase
- **User Login**: Authenticate users using email and password
- **Protected Routes**: Secure pages requiring authentication (Cart, Checkout, Favorites, My Purchases)
- **Public Pages**: Browse products, search, and view details without login
- **Logout**: Sign out functionality with session management

### Product Management

- **Product Display**: View all products with images, prices, and details
- **Category Filtering**: Filter products by categories (Smartphones, Laptops, Tablets, Accessories, Wearables, TVs)
- **Brand Filtering**: Filter products by brands (Apple, Samsung, Dell, HP, Sony, LG, Xiaomi, Huawei)
- **Advanced Search**: Search across product names, categories, and brands from the header
- **Product Details**: Dedicated page for each product with full specifications

### Shopping Cart

- **Add to Cart**: Add products to shopping cart with quantity selection
- **Quantity Management**: Increase or decrease product quantities
- **Remove Items**: Delete products from cart
- **Total Calculation**: Automatic price calculation with subtotal and total
- **Persistent Cart**: Cart contents saved in localStorage per user

### Favorites (Wishlist)

- **Add to Favorites**: Mark products as favorites with heart icon
- **Favorites Page**: Dedicated page displaying all favorite products
- **Remove from Favorites**: Remove products from favorites list
- **Favorites Counter**: Display number of favorite items in header

### Purchase History

- **Order Tracking**: Track all completed purchases per user
- **My Purchases Page**: View purchase history with order details
- **Order Information**: Display items, quantities, prices, and order dates
- **Persistent Storage**: Purchase history saved locally per user

### User Interface

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Bootstrap 5**: Modern UI components and styling
- **Easy Navigation**: Clear navigation menu in header with mobile support
- **Professional Icons**: Bootstrap Icons throughout the application
- **Dark Theme**: Elegant dark color scheme with gradient accents

## 🛠️ Technologies Used

- **Vue.js 3**: Core framework with Composition API
- **Vue Router**: Client-side routing and navigation guards
- **Pinia**: State management for cart, products, auth, and purchases
- **Bootstrap 5**: UI framework for responsive design
- **Bootstrap Icons**: Icon library
- **Firebase API**: User authentication and data storage
- **localStorage**: Client-side storage for cart, favorites, and purchases

## 📁 Project Structure

\`\`\`
electronics-store/
├── public/
│ └── index.html
├── src/
│ ├── assets/
│ │ └── style.css
│ ├── components/
│ │ ├── CategoryCard.vue
│ │ ├── FooterComponent.vue
│ │ ├── HeaderComponent.vue
│ │ └── ProductCard.vue
│ ├── router/
│ │ └── index.js
│ ├── store/
│ │ ├── authStore.js
│ │ ├── cartStore.js
│ │ ├── productsStore.js
│ │ └── purchasesStore.js
│ ├── views/
│ │ ├── AboutPage.vue
│ │ ├── CartPage.vue
│ │ ├── CheckoutPage.vue
│ │ ├── ContactPage.vue
│ │ ├── FavoritesPage.vue
│ │ ├── HomePage.vue
│ │ ├── LoginPage.vue
│ │ ├── MyPurchasesPage.vue
│ │ ├── ProductDetailPage.vue
│ │ ├── ProductsPage.vue
│ │ └── SignupPage.vue
│ ├── App.vue
│ └── main.js
├── package.json
└── README.md
\`\`\`

## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd electronics-store
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run serve
   \`\`\`

4. **Open in browser**
   Navigate to: `http://localhost:8080`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

## ⚙️ Configuration

### Firebase API

The project uses Firebase API for user authentication and data storage. Current API endpoint:

\`\`\`
https://vue-test-e0e1e-default-rtdb.firebaseio.com/users.json
\`\`\`

To change the API endpoint:

1. Open `src/store/authStore.js`
2. Locate the `apiUrl` variable
3. Replace with your Firebase API URL

### Customizing Products

To add or modify products:

1. Open `src/store/productsStore.js`
2. Edit the `products` array in the state
3. Add new products or modify existing ones

Product structure example:
\`\`\`javascript
{
id: 1,
name: 'iPhone 14 Pro',
price: 999,
image: '/placeholder.svg?height=200&width=200',
category: 'Smartphones',
brand: 'Apple',
description: 'Product description here',
rating: 4.5
}
\`\`\`

## 📖 User Guide

### For New Users

1. **Registration**

   - Click "Sign Up" button in the header
   - Enter name, email, and password
   - Click "Sign Up" to create account

2. **Login**

   - Click "Login" button in the header
   - Enter email and password
   - Click "Login" to access your account

3. **Browse Products (No Login Required)**

   - From homepage, click any category card
   - Or navigate directly to "Products" page
   - View product details by clicking on any product

4. **Search for Products**

   - Use search input in the header
   - Type product name, category, or brand
   - Press Enter or click search icon

5. **Add to Cart (Login Required)**

   - Click "Add to Cart" button on product card
   - Or go to product details page and select quantity
   - Cart icon shows number of items

6. **Add to Favorites (Login Required)**

   - Click heart icon on product card
   - View favorites by clicking heart icon in header
   - Remove from favorites by clicking heart again

7. **Checkout (Login Required)**

   - Click cart icon in header
   - Review items and quantities
   - Click "Proceed to Checkout"
   - Fill in shipping information
   - Complete order

8. **View Purchase History (Login Required)**
   - Click "My Purchases" in header dropdown
   - View all completed orders
   - See order details, dates, and totals

## 🎨 Customization

### Colors

To change project colors, edit `src/assets/style.css`:

\`\`\`css
:root {
--primary-color: #007bff;
--secondary-color: #6c757d;
--success-color: #28a745;
--danger-color: #dc3545;
--warning-color: #ffc107;
}
\`\`\`

### Fonts

To change fonts, edit `src/assets/style.css`:

\`\`\`css
body {
font-family: 'Arial', sans-serif;
}
\`\`\`

## 🔒 Security

- Protected routes require authentication
- Public pages (Home, Products, Product Details, About, Contact) accessible without login
- Passwords stored securely in Firebase
- Local data (cart, favorites, purchases) stored per user in localStorage
- Navigation guards prevent unauthorized access

## 📱 Responsive Design

- Mobile-first approach
- Optimized layouts for all screen sizes
- Touch-friendly interface on mobile devices
- Collapsible navigation menu on small screens
- Responsive product grids and cards

## 🔄 State Management

### Stores

- **authStore**: User authentication and session management
- **productsStore**: Product data, filtering, and search
- **cartStore**: Shopping cart management per user
- **purchasesStore**: Purchase history tracking per user

### Data Persistence

- User sessions stored in localStorage
- Cart contents persist per user
- Favorites saved locally per user
- Purchase history maintained per user

## 📝 Notes

- Project uses demo product data
- Images are placeholders
- Can be connected to real API for product management
- Payment gateway integration can be added
- Email notifications can be implemented

## 🚀 Future Enhancements

- Payment gateway integration (Stripe, PayPal)
- Email notifications for orders
- Product reviews and ratings
- Admin dashboard for product management
- Order status tracking
- Multiple shipping addresses
- Discount codes and promotions
- Product recommendations

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for free use.

## 📞 Contact

For questions or suggestions, feel free to reach out.

---

**Built with ❤️ using Vue.js and Bootstrap**
