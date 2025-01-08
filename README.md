# Product-Data-Grid

# 📊 Product Data Grid (React + Node.js + TypeScript)

This project is a **Product Data Grid** application built using **React.js (TypeScript)** for the frontend and **Node.js (Express)** for the backend. The application allows dynamic interaction with a data grid containing product details and provides features like sorting, dynamic calculations, row deletion, and filtering.

---

## 📦 Project Structure:
```plaintext
├── frontend/             # React.js (TypeScript) Frontend
│   ├── src/
│   │   ├── components/   # Core Components
│   │   │   ├── DataGrid.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Row.tsx
│   │   │   └── TotalRow.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   └── package.json
│   └── tsconfig.json
│   └── README.md
│   └── styles.css
│
├── backend/              # Node.js Backend
│   ├── data/
│   │   └── dataset.json
│   ├── index.js
│   └── package.json
│
└── README.md             # Project Documentation
```
## 🚀 Tech Stack:
### **Frontend:**
- React.js (TypeScript)
- Axios (for API calls)

### **Backend:**
- Node.js (Express)
- CORS (for cross-origin requests)

---

## 🎯 Features Implemented:
- ✅ **Dropdown Interaction:** Switch between **Location** and **Branch** views using a dropdown.  
- ✅ **Dynamic Total Calculation:** The total row calculates for **all numeric columns** and values are formatted as `$x.xxM` and `$x.xxK`.  
- ✅ **Sorting:** Column headers can be clicked to sort data (ascending/descending) without moving the **total row**.  
- ✅ **Row Deletion:** Clicking the **X** button deletes a row and dynamically recalculates the totals.  
- ✅ **Branch Filtering:** Clicking a location name filters branches associated with that location.  

---

## ⚙️ Setup Instructions:

### **1. Clone the Repository:**
```bash
git clone <repo-url>
cd product-data-grid
```

### **2. Run the Backend (Node.js + Express):**
```bash
cd backend
npm install
node index.js
```
Server will run on: http://localhost:5001

### **2. Run the Frontend (React + TypeScript):**
```bash
cd frontend
npm install
npm run start
```
Server will run on: http://localhost:3000

# 📊 API Endpoints (Backend):
- **GET /data?type=location** → Fetch location data
- **GET /data?type=branch** → Fetch branch data


