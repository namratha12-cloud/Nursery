# Nursery Plant Shopping Module

This module provides a complete shopping experience for a plant nursery application, built with React and Redux.

## Features

- **Landing Page**: A welcoming entry point with a "Get Started" call to action.
- **Product Listing**: Categorized display of plants (e.g., Air Purifiers, Succulents) with images and prices.
- **Shopping Cart**: Fully functional cart with the ability to:
  - Add items from the product list
  - Increment/Decrement quantities
  - Remove items
  - View total items and total price
- **Navigation**: Header with cart icon and item count badge.

## Components

The module consists of the following components:

### 1. `Landing.jsx`
The landing page component that introduces the nursery.
- **Key Features**: Background image, welcome text, navigation to products.

### 2. `Header.jsx`
The navigation bar.
- **Key Features**: Displays the shop name and a cart icon with a dynamic badge showing the total number of items in the cart.

### 3. `ProductList.jsx`
The main catalog page.
- **Key Features**: Renders plant categories and maps through the plant data to display `PlantCard` components.

### 4. `PlantCard.jsx`
Individual product card.
- **Key Features**: Displays plant image, name, price. Handles "Add to Cart" logic, disabling the button if the item is already in the cart.

### 5. `Cart.jsx`
The shopping cart page.
- **Key Features**: Lists all added items, shows total quantities and price, and provides Checkout/Continue Shopping buttons.

### 6. `CartItem.jsx`
Individual item in the cart.
- **Key Features**: Controls for increasing/decreasing quantity or removing the item from the cart.

## Setup & Dependencies

This module expects a Redux store setup with a `cartSlice` that handles the following actions:
- `addToCart`
- `increment`
- `decrement`
- `delete` (or `remove`)

It also expects a valid `react-router-dom` setup for navigation between pages.
