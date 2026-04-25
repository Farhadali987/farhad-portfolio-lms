# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Set up your PostgreSQL Database

Create a new PostgreSQL database:
```sql
CREATE DATABASE portfolio_platform;
```

### Step 2: Update Environment Variables

Edit the `.env` file and update the DATABASE_URL with your actual PostgreSQL credentials:
```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/portfolio_platform?schema=public"
```

### Step 3: Run Setup

**Option A: Using the setup script (Windows)**
```bash
setup.bat
```

**Option B: Manual setup**
```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database
npx tsx prisma/seed.ts
```

## 🎯 Start the Application

```bash
npm run dev
```

Visit: http://localhost:3000

## 🔐 Default Login

- **Email**: admin@farhadgul.com
- **Password**: admin123

## 📝 Update Your Profile

After logging in, you can:
1. View your dashboard
2. Enroll in courses
3. Track your progress
4. Add new projects

## 🔗 Social Links

The platform is configured with:
- **LinkedIn**: https://www.linkedin.com/in/farhad-gul
- **GitHub**: https://github.com/farhadgul

To update these, edit the `.env` file and restart the server.

## 🎨 Customization

- Update portfolio content in `src/app/page.tsx`
- Modify colors in `tailwind.config.js`
- Add new courses via the API or Prisma Studio: `npm run db:studio`

## ⚠️ Troubleshooting

**Database Connection Error:**
- Verify your DATABASE_URL in `.env`
- Ensure PostgreSQL is running
- Check database exists

**Port Already in Use:**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Module Not Found:**
```bash
npm install
npx prisma generate
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

For questions or issues, please refer to the README.md
