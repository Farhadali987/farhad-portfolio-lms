@echo off
echo ================================================
echo Farhad Gul - Portfolio Platform Setup
echo ================================================
echo.

echo IMPORTANT: Before running this script!
echo.
echo 1. Make sure PostgreSQL is installed and running
echo 2. Create database: CREATE DATABASE portfolio_platform;
echo 3. Update .env file with your PostgreSQL password
echo.
pause

echo.
echo Step 1: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.

echo Step 2: Generating Prisma Client...
call npx prisma generate
if errorlevel 1 (
    echo ERROR: Prisma generation failed!
    pause
    exit /b 1
)
echo.

echo Step 3: Creating database schema...
call npx prisma db push
if errorlevel 1 (
    echo ERROR: Database push failed!
    echo Make sure PostgreSQL is running and .env is configured correctly.
    pause
    exit /b 1
)
echo.

echo Step 4: Seeding database with courses and books...
call npx tsx prisma\seed.ts
if errorlevel 1 (
    echo ERROR: Database seeding failed!
    pause
    exit /b 1
)
echo.

echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo Default Login Credentials:
echo Email: admin@farhadgul.com
echo Password: admin123
echo.
echo To start the development server:
echo npm run dev
echo.
echo Then visit: http://localhost:3000
echo.
pause
