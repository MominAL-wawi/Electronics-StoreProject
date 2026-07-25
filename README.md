# TechVerse Electronic Store

A responsive web-based e-commerce platform for electronic devices, developed as a graduation project at the **Islamic University of Gaza**.

TechVerse provides customers with an organized online shopping experience where they can browse products, search and filter items, manage favorites and a shopping cart, complete checkout using multiple payment methods, and view their purchase history.

---

## Project Explanation Video

[Watch the project explanation on YouTube](https://www.youtube.com/watch?si=0jysrLAj3YjmN9Xh&v=A4uk5_-Hp10&feature=youtu.be)

---

## Main Features

- User registration and login.
- Browse electronic products by category.
- Search and filter products by category, brand, and price.
- View detailed product information and specifications.
- Add products to favorites.
- Add products to the shopping cart and control quantities.
- Responsive checkout form with shipping information.
- Multiple payment methods:
  - Cash on Delivery.
  - Credit Card.
  - Bank Transfer.
  - Stripe Checkout.
- Stripe webhook confirmation for successful payments.
- Cancel pending Stripe orders.
- View order and purchase history.
- Contact form for customer messages.
- Responsive design for desktop, tablet, and mobile devices.

---

## Technologies Used

### Frontend

- Vue.js 3
- Pinia
- Vue Router
- Bootstrap 5
- Bootstrap Icons
- JavaScript
- HTML5
- CSS3

### Backend and Databases

- Plain PHP
- REST API
- Firebase Realtime Database
- MySQL
- PDO

### Payment

- Stripe Checkout
- Stripe Webhooks

### Development and Deployment Tools

- Git and GitHub
- Visual Studio Code
- XAMPP
- Postman
- Stripe CLI
- Composer
- NPM
- Netlify
- Hostinger

---

## System Architecture

The project combines multiple technologies:

- **Vue.js** handles the user interface.
- **Pinia** manages shared application state such as authentication, products, cart, favorites, and purchases.
- **Vue Router** manages navigation and protected routes.
- **Firebase Realtime Database** stores products, users, purchase records, and contact messages.
- **Plain PHP** provides the Stripe payment API and order-management endpoints.
- **MySQL** stores Stripe order records and payment statuses.
- **Stripe Checkout** securely processes online payments.

---

## Project Methodology

The project was developed using the **Agile Scrum** methodology.

Work was divided into iterative sprints covering:

- Requirements analysis
- UI/UX design
- Development
- Testing
- Deployment
- Documentation

---

## Project Team

| Team Member | Role |
|---|---|
| Abdulrahman Ahmed Mohammed Al-Dimassi | UI/UX Designer |
| Momin Ahmed Rezg Alwawi | Frontend Lead / Scrum Master |
| Abdulrahman Alaa Nazmi Al-Jadili | Backend Lead |

---

## Supervisor

**Dr. Hazem A. Alrakhawi**

---

## Academic Information

- **University:** The Islamic University of Gaza
- **Faculty:** Faculty of Information Technology
- **Project Type:** Graduation Project
- **Date:** July 2026

---

## Future Improvements

- Admin dashboard.
- Arabic language support.
- Delivery and shipment tracking.
- Shipping-cost calculation.
- Reports and analytics.
- Native mobile applications.

---

## License

This project was developed for academic purposes as a graduation project.
