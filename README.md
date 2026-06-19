# 📸 Dynamic Gallery App

A responsive, optimized React image gallery that showcases dynamic content layouts utilizing server-state caching and asynchronous performance features.

---

## 🚀 Key Features

*   **Server State Management**: Implements **TanStack React Query (v5)** for robust, automatic browser caching and network layer state synchronization.
*   **API Integration**: Consumes the real-time public [Lorem Picsum API](https://picsum.photos/) list endpoint.
*   **Hybrid Designed Pagination**: Features a fun, dual-pagination system using both highly-customizable **Material-UI (MUI)** page bars and custom icon-based pagination guards.
*   **Fluid Responsive Layout**: Uses **Tailwind CSS** alongside arbitrary pixel values to handle highly fluid, multi-row flex containers.

---

## 🛠️ Tech Stack & Architecture

*   **Core UI Library**: React (Vite environment template)
*   **Styles & Layout**: Tailwind CSS
*   **Component & Design System**: Material-UI (MUI) & Emotion
*   **Data Fetching Client**: Axios
*   **Cache Management Middleware**: TanStack React Query v5

---

## 📡 API Endpoint Details

The application communicates directly with the following JSON service structure:
*   **Base Target URL**: `https://picsum.photos/v2/list`
*   **Request Method**: `GET`
*   **Query Strings Handled**:
    *   `page`: Controls current payload offset context.
    *   `limit`: Sets the exact quantity threshold returned per frame (configured to `20`).

---

## 💻 Code Architecture Overview

### API Client Wrapper (`src/apiCall.js`)
Handles the asynchronous low-level HTTP transport layer. It unwraps the strict Axios response structure to return pure data blocks directly to the React Query cache manager.

```javascript
import axios from 'axios';

const getGalleryDataFromAPI = async (page, limit) => {
  const response = await axios.get(`https://picsum.photos{page}&limit=${limit}`);
  return response.data;
};

export default getGalleryDataFromAPI;
```

### Main Presentation Screen (`src/GalleryScreen2.jsx`)
Coordinates reactive UI synchronization. It automatically links state properties with Query Cache Keys to isolate page mutations seamlessly.

*   **Dual-Pagination Controls**: Connects TanStack React Query's cached page states simultaneously to an elegant MUI `<Pagination />` bar and standalone icon triggers.
*   **Dynamic Layout Rendering**: Calculates randomized container styles on the fly without breaking structural class composition targets.
*   **Pagination Safeguards**: Evaluates server bounds cleanly using array-length metadata metrics and React Query's `keepPreviousData` to prevent boundary index overruns and UI flickering.

---

## 📦 Local Installation & Setup

Follow these quick steps to execute and preview this application framework locally:

### 1. Clone the Project Repository
```bash
git clone <your-repository-ssh-or-https-url>
cd <your-project-directory-name>
```

### 2. Install Project Dependencies
```bash
npm install @tanstack/react-query axios @mui/material @emotion/react @emotion/styled
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open the local network host URL displayed in your terminal configuration (typically `http://localhost:5173`) to view and interact with your responsive media gallery framework.
