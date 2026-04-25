# 🚀 QUICK START

## Before You Begin

You need **PostgreSQL** installed and running.

---

## 3-Step Setup

### 1️⃣ Update `.env` File

Open `.env` and change `YOUR_PASSWORD` to your PostgreSQL password:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/portfolio_platform?schema=public"
```

### 2️⃣ Run Setup Script

Double-click `setup.bat` or run:

```bash
npm install
npx prisma db push
npx tsx prisma/seed.ts
```

### 3️⃣ Start Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## 🔐 Login

- **Email**: admin@farhadgul.com
- **Password**: admin123

---

## 📚 What's Included

✅ Portfolio homepage
✅ Certifications page with 6 verified credentials
✅ 3 courses with complete books (13 chapters)
✅ Book reader with sidebar navigation
✅ Progress tracking and charts
✅ User authentication
✅ Responsive design

---

For detailed setup instructions, see `SETUP_GUIDE.md`
