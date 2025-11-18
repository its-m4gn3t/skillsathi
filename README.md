# 🌐 Skillsathi– A Hyperlocal P2P Skill Exchange Platform  


## ✨ Features  

### 🔑 User Authentication & Role-Based Access  
- Role-based system: **Guru** (teacher) / **Shishya** (learner).  
- Secure authentication using **JWT**.  
- Passwords encrypted with **bcrypt.js**.  
- Middleware ensures protected & authorized routes.  

### 🎓 Guru-Centric Skill & Course Management  
- Full **CRUD** on skills.  
- Create structured workshops with title, duration, rate, seats, and mode (Online/Offline).  
- Upload **images & videos** with **Cloudinary**.  
- Location-aware listings with geospatial search support.  

### 🔍 Advanced Search & Discovery  
- **Keyword-based search** for skills.  
- **Geospatial “Nearby” search** using MongoDB `$geoWithin` and `$centerSphere`.  

### 📅 Booking & Review System  
- Direct session booking (hackathon version bypassed payments).  
- Prevents duplicate bookings.  
- Ratings (⭐1–5) + written reviews with live average rating updates.  

### 💬 Real-Time Communication  
- **Socket.IO-powered chat** between Gurus and Shishyas.  
- Auto-generated contact lists with role-based filtering.  

### 📊 Guru Dashboard & Analytics  
- Track KPIs: ⭐ Average Rating, 📖 Total Bookings, 💰 Earnings, 👩‍🎓 Students.  
- Realtime activity list & skill management.  
- Monthly earnings graph via **Recharts**.  

---

## 🛠️ Tech Stack  

**Frontend:**  
- ⚛️ React.js (Vite)  
- 🎨 Tailwind CSS + shadcn/ui  
- 🗂 Zustand (state management)  
- 🎬 Framer Motion (animations)  
- 🔗 Axios (API handling)  

**Backend:**  
- 🟢 Node.js + Express.js  
- 📦 Mongoose (ODM for MongoDB)  
- 🔐 JWT + bcrypt.js (Auth & Security)  
- 🌐 Socket.IO (Realtime chat)  
- 🖼 Multer + Cloudinary (Media handling)  

**Database:**  
- 🍃 MongoDB Atlas (with geospatial indexing)  

**Cross-Cutting Concerns:**  
- 🛡 Helmet + CORS (Security)  

---

## 🚀 Getting Started  
