# Complete Setup Guide - Farhad Gul Portfolio Platform

## Prerequisites Checklist

Before running the platform, ensure you have:

- [ ] **PostgreSQL installed** on your system
- [ ] **PostgreSQL service running**
- [ ] **Node.js 18+** installed
- [ ] **Git** (optional, for version control)

---

## Step 1: Install PostgreSQL

### Windows:
1. Download from: https://www.postgresql.org/download/windows/
2. Run installer (use PostgreSQL 15 or 16)
3. Set password for `postgres` user (remember this!)
4. Keep default port: **5432**
5. Complete installation

### Verify Installation:
```bash
psql --version
```

---

## Step 2: Create Database

Open **pgAdmin** or **SQL Shell (psql)** and run:

```sql
CREATE DATABASE portfolio_platform;
```

---

## Step 3: Update Environment Variables

Edit `.env` file in the project root:

```env
# If your PostgreSQL username is 'postgres' and password is 'yourpassword':
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/portfolio_platform?schema=public"

# If you created a different user, update accordingly
```

**Example:**
- If password is `admin123`:
  ```env
  DATABASE_URL="postgresql://postgres:admin123@localhost:5432/portfolio_platform?schema=public"
  ```

---

## Step 4: Install Dependencies

```bash
npm install
```

---

## Step 5: Setup Database Schema

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push
```

---

## Step 6: Seed Database (Add Courses, Books, etc.)

```bash
npx tsx prisma/seed.ts
```

This will create:
- ✅ Admin user account
- ✅ 3 courses (Python, Databases, Agentic AI)
- ✅ 3 complete books with 13 chapters total
- ✅ Sample projects

---

## Step 7: Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:3000**

---

## 🔐 Default Login Credentials

- **Email**: admin@farhadgul.com
- **Password**: admin123

---

## 📁 Platform Features

### Pages Available:
- `/` - Home (Portfolio overview)
- `/certifications` - All certifications with verification links
- `/courses` - Browse and enroll in courses
- `/courses/[id]/book` - Read course books
- `/dashboard` - User dashboard with progress tracking
- `/login` - Login page
- `/signup` - Registration page

### Key Features:
- 📚 **3 Complete Books** with structured chapters
- 🏆 **Certifications Page** with verified credentials
- 📊 **Progress Tracking** with charts
- 🔐 **Secure Authentication** with JWT
- 📱 **Responsive Design** for mobile/desktop

---

## 🚨 Troubleshooting

### Database Connection Error:
```
Can't reach database server at localhost:5432
```

**Solution:**
1. Make sure PostgreSQL service is running
2. Check Windows Services (services.msc)
3. Look for "postgresql-x64-XX" and ensure it's "Running"
4. Verify your password in `.env` matches your PostgreSQL password

### Port Already in Use:
```
Port 3000 is already in use
```

**Solution:**
```bash
# Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Module Not Found:
```bash
npm install
npx prisma generate
```

---

## 📞 Need Help?

If you encounter issues:

1. **Check PostgreSQL is running**: Open pgAdmin and try to connect
2. **Verify `.env` credentials**: Make sure username/password match your PostgreSQL setup
3. **Check Node version**: `node --version` (should be 18+)
4. **Reinstall dependencies**: Delete `node_modules` folder and run `npm install`

---

## 🎯 Quick Commands Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database commands
npx prisma generate        # Generate Prisma Client
npx prisma db push         # Push schema to database
npx prisma db studio       # Open database GUI
npx tsx prisma/seed.ts     # Seed database with data
```

---

**Built for Farhad Gul**
LinkedIn: https://www.linkedin.com/in/farhad-gul
GitHub: https://github.com/farhadgul
