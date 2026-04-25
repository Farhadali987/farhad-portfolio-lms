# Farhad Gul - Portfolio & Learning Platform

A complete portfolio and learning platform with comprehensive book-based learning system and professional certifications.

## 🚀 Features

- **Portfolio Showcase**: Display projects, skills, and certifications
- **LinkedIn Integration**: Connected to [Farhad Gul's LinkedIn](https://www.linkedin.com/in/farhad-gul)
- **GitHub Integration**: Showcase GitHub repositories
- **Certifications Page**: Display all professional credentials with verification links
- **Course System**: Browse and enroll in courses with complete books
- **Book-Based Learning**: Full textbooks for each course (13 chapters total)
- **Progress Tracking**: Track chapter completion and course progress
- **User Authentication**: Secure JWT-based auth with bcrypt
- **Dashboard**: Comprehensive analytics with charts
- **Responsive Design**: Works on desktop and mobile

## 📚 Available Courses with Books

### 1. Python Programming Mastery (Beginner)
**Book**: The Complete Python Programming Guide (5 chapters)

### 2. Database Systems & SQL (Intermediate)
**Book**: Mastering Database Systems (4 chapters)

### 3. Agentic AI Development (Advanced)
**Book**: Building Intelligent AI Agents (4 chapters)

## 🏆 Professional Certifications

All certifications are verified and linked to credential verification pages:

1. **Generative AI with LLMs** - Coursera/DeepLearning.AI
   - Credential ID: 8AHX3ZWTCDJY

2. **Agentic AI using OpenAI Agent SDK** - Coursera/OpenAI
   - Credential ID: E652RXL4WCLY

3. **AI Python for Beginners** - Coursera/DeepLearning.AI
   - Credential ID: KF4JPMCCRXU9

4. **Prompt Engineering** - Coursera
   - Credential ID: U6YYEICMA2AA

5. **AI for Everyone** - Coursera/DeepLearning.AI
   - Credential ID: W6SD3QR36TGB

6. **Basic Computer Certificate** - Computer Science Fundamentals

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Edit `.env` with your database credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_platform?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
```

### 3. Setup Database
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

### 4. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 🔐 Default Login

- **Email**: admin@farhadgul.com
- **Password**: admin123

## 📁 Pages

- `/` - Home page with portfolio, certifications, and courses preview
- `/certifications` - Full certifications page with verification links
- `/courses` - Browse and enroll in courses
- `/courses/[id]/book` - Book reader for course
- `/dashboard` - User dashboard with progress tracking
- `/login` - Login page
- `/signup` - Registration page

## 👨‍💻 Author

**Farhad Gul**
- LinkedIn: https://www.linkedin.com/in/farhad-gul
- GitHub: https://github.com/farhadgul

## 📄 License

MIT License
