# 🌾 SellSmart – Farmers Crop Price Online Platform

SellSmart is a React-based web application created to help farmers easily view crop market prices, calculate profits, and make better decisions about where to sell their goods.

---

## 🚀 Features

### 🔓 Public (Before Login)
Users who are not logged in can only access:
- 🏠 Home
- 💹 Market Prices
- 🔑 Login
- 📝 Signup

❌ Profit Calculator is **not visible** before login.

---

### 🔐 After Login
Once a user logs in, the navbar updates dynamically and shows:
- 🏠 Home
- 💹 Market Prices
- 💰 Profit Calculator
- 👤 Profile
- 🚪 Logout

---

## 👤 Profile Page
The profile page displays:
- Username (user's email or name)
- Logout button

---

## 💰 Profit Calculator
Allows farmers to estimate profit based on:
- Crop price
- Market selling value
- Quantity
- Transport cost
- Final estimated profit

---

## 🛠 Tech Stack
- React.js
- React Router
- LocalStorage (for auth state)
- CSS (custom styles inside `assets/`)
- Optional backend (Django/Node depending on integration)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── MarketPrices.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── ProfitCalculator.jsx
│   ├── Profile.jsx
│
├── assets/
│   ├── navbar.css
│   ├── auth.css
│   ├── home.css
│
├── App.js
└── index.js
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/sellsmart.git
cd sellsmart
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm start
```

---

## 🔐 Authentication Logic
- Login and Signup store the user's email in `localStorage`
- Navbar reads login status and updates links
- ProtectedRoute ensures only logged-in users access:
  - Profit Calculator
  - Profile Page

---

## 📌 Purpose of SellSmart
SellSmart helps farmers:
- Check crop prices across multiple states & cities
- View market price per quintal
- Make smarter selling decisions
- Calculate profitability before selling
- Use an easy and modern interface

---

## ✔️ Current Status
- Login & Signup working
- Navbar updates correctly after login
- Profile page implemented
- Profit Calculator added
- Market Prices page structured

---

## 🤝 Contributions
Feel free to contribute or improve features.

---

## 📄 License
This project is open-source and free to use.
