# GreenNest - Plant Nursery Application

Welcome to **GreenNest**, a React-based e-commerce application for browsing and purchasing curated houseplants. This project demonstrates a functional shopping cart with global state management using Redux.

## 🌿 Project Overview

GreenNest offers a seamless shopping experience where users can:
- **Discover Plants**: Browse a categorized selection of plants (Air Purifiers, Succulents, Low Light).
- **Manage Cart**: Add items, adjust quantities, and view real-time totals.
- **Navigate**: Smoothly transition between the landing page, product catalog, and shopping cart.

## 🚀 Features

### 1. Landing Page (`Landing.jsx`)
- **Visual Appeal**: Features a full-screen background image with a welcoming overlay.
- **Call to Action**: A "Get Started" button directs users to the product catalog.
- **Branding**: Introduces the "GreenNest" brand identity.

### 2. Product Catalog (`ProductList.jsx` & `PlantCard.jsx`)
- **Categorized View**: Plants are organized by category for easy browsing.
- **Smart Interactions**: Each plant card shows the price and an "Add to Cart" button.
- **State Integration**: The "Add to Cart" button automatically disables if the item is already in the cart, preventing duplicates.

### 3. Shopping Cart (`Cart.jsx` & `CartItem.jsx`)
- **Dynamic Updates**: Real-time calculation of Total Items and Total Price.
- **Item Management**: 
  - **Increment/Decrement**: Adjust the quantity of each plant.
  - **Remove**: Delete items from the cart entirely.
- **Navigation**: Options to "Checkout" (placeholder) or "Continue Shopping".

### 4. Navigation Header (`Header.jsx`)
- **Persistent Access**: Available across shopping pages.
- **Cart Badge**: A dynamic counter shows the total number of items in the cart at a glance.

## 🛠️ Tech Stack

- **Frontend**: React (Functional Components, Hooks)
- **State Management**: Redux Toolkit (presumed `cartSlice` for managing cart state)
- **Routing**: React Router DOM
- **styling**: Tailwind CSS (based on class names like `text-2xl`, `p-6`, `flex`, `grid`)

## 📂 Project Structure

The core logic resides in the `nursery` directory:

```
nursery/
├── Landing.jsx       # Homepage component
├── Header.jsx        # Navigation bar
├── ProductList.jsx   # Main product display grid
├── PlantCard.jsx     # Individual product component
├── Cart.jsx          # Shopping cart overview
└── CartItem.jsx      # Cart item row component
```

## 🔧 Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/namratha12-cloud/Nursery.git
   ```

2. **Install dependencies** (ensure you have `react`, `react-dom`, `react-redux`, `@reduxjs/toolkit`, `react-router-dom` installed).

3. **Run the application**:
   ```bash
   npm start
   ```

> **Note**: This project expects a Redux slice (`cartSlice.js`) and a data source (`plants.json`) to be present in `../redux/` and `../data/` relative to the component files.
