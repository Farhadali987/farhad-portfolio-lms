import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@farhadgul.com' },
    update: {},
    create: {
      name: 'Farhad Gul',
      email: 'admin@farhadgul.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Created admin user:', admin.email)

  // Create courses
  const pythonCourse = await prisma.course.upsert({
    where: { id: 'course-python-101' },
    update: {},
    create: {
      id: 'course-python-101',
      title: 'Python Programming Mastery',
      description: 'Complete Python course from basics to advanced concepts including OOP, decorators, and async programming',
      level: 'BEGINNER',
    },
  })

  const dbCourse = await prisma.course.upsert({
    where: { id: 'course-databases-101' },
    update: {},
    create: {
      id: 'course-databases-101',
      title: 'Database Systems & SQL',
      description: 'Learn database design, SQL, PostgreSQL, and optimization techniques for modern applications',
      level: 'INTERMEDIATE',
    },
  })

  const aiCourse = await prisma.course.upsert({
    where: { id: 'course-agentic-ai' },
    update: {},
    create: {
      id: 'course-agentic-ai',
      title: 'Agentic AI Development',
      description: 'Build intelligent AI agents using OpenAI API, LangChain, and modern AI frameworks',
      level: 'ADVANCED',
    },
  })

  console.log('✅ Created courses')

  // Python Course Book
  const pythonBook = await prisma.book.upsert({
    where: { course_id: pythonCourse.id },
    update: {},
    create: {
      course_id: pythonCourse.id,
      title: 'The Complete Python Programming Guide',
      description: 'Master Python programming from fundamentals to advanced topics',
    },
  })

  await prisma.chapter.createMany({
    data: [
      {
        book_id: pythonBook.id,
        title: 'Chapter 1: Introduction to Python',
        content: `# Chapter 1: Introduction to Python

## What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages worldwide.

## Why Learn Python?

- **Easy to Learn**: Python's syntax is straightforward and resembles English
- **Versatile**: Used in web development, data science, AI, automation, and more
- **Large Community**: Extensive libraries and strong community support
- **High Demand**: Python developers are in high demand across industries

## Installing Python

### Windows:
1. Visit python.org/downloads
2. Download the latest Python version
3. Run installer and check "Add Python to PATH"
4. Click "Install Now"

### Verify Installation:
Open terminal and type:
\`\`\`bash
python --version
\`\`\`

You should see: Python 3.x.x

## Your First Python Program

Create a file named \`hello.py\`:

\`\`\`python
print("Hello, World!")
\`\`\`

Run it:
\`\`\`bash
python hello.py
\`\`\`

Output:
\`\`\`
Hello, World!
\`\`\`

## Python Interactive Shell

You can run Python directly in the terminal:

\`\`\`bash
python
>>> print("Hello!")
Hello!
>>> exit()
\`\`\`

## Key Takeaways

✅ Python is beginner-friendly and powerful
✅ Easy to install and set up
✅ Write your first program in one line
✅ Use the interactive shell for testing

## Practice Exercise

1. Install Python on your computer
2. Create a file that prints your name
3. Run it and verify the output

---

*Congratulations! You've taken your first step into Python programming.*`,
        order: 1,
      },
      {
        book_id: pythonBook.id,
        title: 'Chapter 2: Variables and Data Types',
        content: `# Chapter 2: Variables and Data Types

## What are Variables?

Variables are containers that store data values. Think of them as labeled boxes that hold information.

\`\`\`python
# Creating variables
name = "Farhad"
age = 25
height = 5.9
is_student = True

print(name)  # Output: Farhad
print(age)   # Output: 25
\`\`\`

## Python Data Types

### 1. Strings (str)
Text data enclosed in quotes:

\`\`\`python
first_name = "John"
last_name = 'Doe'
message = "Hello, World!"

# String operations
full_name = first_name + " " + last_name
print(full_name)  # Output: John Doe

# String methods
print(first_name.upper())  # Output: JOHN
print(len(first_name))     # Output: 4
\`\`\`

### 2. Integers (int)
Whole numbers without decimal points:

\`\`\`python
age = 25
year = 2026
temperature = -5

# Arithmetic operations
sum_result = 10 + 5      # 15
difference = 20 - 8      # 12
product = 6 * 7          # 42
quotient = 100 / 4       # 25.0
remainder = 17 % 5       # 2
power = 2 ** 10          # 1024
\`\`\`

### 3. Floats (float)
Numbers with decimal points:

\`\`\`python
price = 19.99
pi = 3.14159
temperature = 98.6

# Rounding
rounded = round(3.14159, 2)  # 3.14
\`\`\`

### 4. Booleans (bool)
True or False values:

\`\`\`python
is_active = True
is_complete = False

# Comparison operations
print(10 > 5)   # True
print(10 == 10) # True
print(10 != 5)  # True
\`\`\`

## Type Conversion

\`\`\`python
# Converting between types
age = 25
age_str = str(age)        # "25"

price = "19.99"
price_float = float(price)  # 19.99

quantity = 3.7
quantity_int = int(quantity)  # 3
\`\`\`

## Getting User Input

\`\`\`python
name = input("Enter your name: ")
age = int(input("Enter your age: "))

print(f"Hello {name}, you are {age} years old!")
\`\`\`

## Practice Exercise

Create a program that:
1. Asks for user's name, age, and favorite number
2. Calculates the square of their favorite number
3. Prints a formatted message with all information

---

*Master these fundamentals before moving to the next chapter!*`,
        order: 2,
      },
      {
        book_id: pythonBook.id,
        title: 'Chapter 3: Control Flow and Loops',
        content: `# Chapter 3: Control Flow and Loops

## Conditional Statements

Control the flow of your program using if, elif, and else.

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
\`\`\`

## Comparison Operators

\`\`\`python
x = 10
y = 20

print(x == y)  # Equal: False
print(x != y)  # Not equal: True
print(x > y)   # Greater than: False
print(x < y)   # Less than: True
print(x >= 10) # Greater or equal: True
print(x <= 9)  # Less or equal: False
\`\`\`

## Logical Operators

\`\`\`python
age = 25
has_id = True

# AND - both conditions must be true
if age >= 18 and has_id:
    print("Entry allowed")

# OR - at least one condition true
if age < 12 or age > 60:
    print("Discount eligible")

# NOT - reverses the condition
is_raining = False
if not is_raining:
    print("No umbrella needed")
\`\`\`

## For Loops

Iterate over sequences:

\`\`\`python
# Loop through a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I like {fruit}")

# Loop with range
for i in range(5):
    print(i)  # Output: 0, 1, 2, 3, 4

# Range with start, end, step
for i in range(2, 10, 2):
    print(i)  # Output: 2, 4, 6, 8

# Loop through a string
for char in "Python":
    print(char)
\`\`\`

## While Loops

Repeat while condition is true:

\`\`\`python
count = 0

while count < 5:
    print(f"Count is {count}")
    count += 1

# Output:
# Count is 0
# Count is 1
# Count is 2
# Count is 3
# Count is 4
\`\`\`

## Loop Control Statements

\`\`\`python
# Break - exit loop early
for i in range(10):
    if i == 5:
        break
    print(i)  # Output: 0, 1, 2, 3, 4

# Continue - skip current iteration
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Output: 1, 3, 5, 7, 9

# Pass - placeholder (does nothing)
for i in range(5):
    pass  # TODO: implement later
\`\`\`

## List Comprehensions

Pythonic way to create lists:

\`\`\`python
# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
\`\`\`

## Practice Exercise

1. Create a program that prints multiplication table (1-10)
2. Write a number guessing game using while loop
3. Create a list of prime numbers using list comprehension

---

*Control flow is essential for creating dynamic programs!*`,
        order: 3,
      },
      {
        book_id: pythonBook.id,
        title: 'Chapter 4: Functions and Modules',
        content: `# Chapter 4: Functions and Modules

## What are Functions?

Functions are reusable blocks of code that perform specific tasks.

\`\`\`python
# Defining a function
def greet():
    print("Hello, World!")

# Calling a function
greet()  # Output: Hello, World!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Farhad")  # Output: Hello, Farhad!
\`\`\`

## Return Values

\`\`\`python
def add(a, b):
    return a + b

result = add(10, 5)
print(result)  # Output: 15

# Multiple return values
def get_user_info():
    name = "Farhad"
    age = 25
    return name, age

user_name, user_age = get_user_info()
\`\`\`

## Default Parameters

\`\`\`python
def create_profile(name, age, city="Lahore"):
    print(f"{name}, {age} years old, lives in {city}")

create_profile("Farhad", 25)  # Uses default city
create_profile("Ali", 30, "Karachi")  # Overrides default
\`\`\`

## Keyword Arguments

\`\`\`python
def create_post(title, content, author="Anonymous", tags=[]):
    print(f"Title: {title}")
    print(f"Author: {author}")
    print(f"Tags: {tags}")

create_post(
    title="Python Guide",
    content="Learn Python basics",
    author="Farhad Gul",
    tags=["python", "tutorial"]
)
\`\`\`

## Lambda Functions

Anonymous single-line functions:

\`\`\`python
# Traditional function
def square(x):
    return x ** 2

# Lambda equivalent
square_lambda = lambda x: x ** 2

# Using with sorted()
students = [
    ("Ali", 85),
    ("Farhad", 92),
    ("Nida", 78)
]

# Sort by grade
sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
\`\`\`

## Modules

Modules are Python files containing reusable code.

\`\`\`python
# Import entire module
import math

print(math.pi)      # 3.14159...
print(math.sqrt(16))  # 4.0

# Import specific items
from random import randint, choice

print(randint(1, 10))  # Random number 1-10

# Import with alias
import datetime as dt

today = dt.date.today()
print(today)
\`\`\`

## Creating Your Own Module

Create \`calculator.py\`:

\`\`\`python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    return "Error: Division by zero"
\`\`\`

Use it in another file:

\`\`\`python
from calculator import add, subtract, multiply

result = add(10, 5)
print(result)  # Output: 15
\`\`\`

## Practice Exercise

1. Create a function that checks if a number is prime
2. Build a calculator module with basic operations
3. Write a function that takes a list and returns unique items

---

*Functions make your code organized and reusable!*`,
        order: 4,
      },
      {
        book_id: pythonBook.id,
        title: 'Chapter 5: Object-Oriented Programming',
        content: `# Chapter 5: Object-Oriented Programming

## What is OOP?

Object-Oriented Programming (OOP) organizes code using classes and objects.

## Classes and Objects

\`\`\`python
# Creating a class
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return f"{self.name} says Woof!"

# Creating objects
my_dog = Dog("Buddy", 3)
print(my_dog.name)        # Output: Buddy
print(my_dog.bark())      # Output: Buddy says Woof!
\`\`\`

## The __init__ Method

The constructor method initializes object attributes:

\`\`\`python
class Student:
    def __init__(self, name, student_id, grades=None):
        self.name = name
        self.student_id = student_id
        self.grades = grades if grades else []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        if len(self.grades) == 0:
            return 0
        return sum(self.grades) / len(self.grades)

# Usage
student = Student("Farhad", "S001")
student.add_grade(85)
student.add_grade(92)
print(f"Average: {student.get_average()}")  # Output: 88.5
\`\`\`

## Inheritance

Create new classes from existing ones:

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name)
        self.can_fly = can_fly
    
    def speak(self):
        return f"{self.name} says Chirp!"

# Usage
cat = Cat("Whiskers")
bird = Bird("Tweety")

print(cat.speak())   # Whiskers says Meow!
print(bird.speak())  # Tweety says Chirp!
\`\`\`

## Encapsulation

Protect data using private attributes:

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return amount
        return 0
    
    def get_balance(self):
        return self.__balance

# Usage
account = BankAccount("Farhad", 1000)
account.deposit(500)
print(account.get_balance())  # Output: 1500
\`\`\`

## Polymorphism

Same method, different behavior:

\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        import math
        return math.pi * self.radius ** 2

# Polymorphic behavior
shapes = [Rectangle(5, 10), Circle(7)]

for shape in shapes:
    print(f"Area: {shape.area():.2f}")
\`\`\`

## Practice Exercise

1. Create a Library class that manages Book objects
2. Build a Vehicle class with Car and Motorcycle subclasses
3. Implement a ShoppingCart class with Item objects

---

*OOP helps build complex, maintainable applications!*`,
        order: 5,
      },
    ],
  })

  console.log('✅ Created Python book with chapters')

  // Database Course Book
  const dbBook = await prisma.book.upsert({
    where: { course_id: dbCourse.id },
    update: {},
    create: {
      course_id: dbCourse.id,
      title: 'Mastering Database Systems',
      description: 'Complete guide to databases, SQL, and PostgreSQL',
    },
  })

  await prisma.chapter.createMany({
    data: [
      {
        book_id: dbBook.id,
        title: 'Chapter 1: Introduction to Databases',
        content: `# Chapter 1: Introduction to Databases

## What is a Database?

A database is an organized collection of structured information, typically stored electronically in a computer system. Databases are controlled by a Database Management System (DBMS).

## Why Use Databases?

- **Data Organization**: Store information systematically
- **Data Integrity**: Ensure accuracy and consistency
- **Data Security**: Control access and protect information
- **Scalability**: Handle growing amounts of data efficiently
- **Concurrent Access**: Multiple users can access data simultaneously

## Types of Databases

### 1. Relational Databases (SQL)
Organize data into tables with rows and columns:

- **PostgreSQL**: Advanced, open-source
- **MySQL**: Popular for web applications
- **SQLite**: Lightweight, file-based
- **SQL Server**: Microsoft's enterprise solution

### 2. NoSQL Databases
Flexible schema for unstructured data:

- **MongoDB**: Document-based
- **Redis**: Key-value store
- **Cassandra**: Wide-column store
- **Neo4j**: Graph database

## Relational Database Concepts

### Tables
Data is stored in tables (also called relations):

\`\`\`
+----+----------+----------+-------+
| ID |   Name   |   Email  |  Age  |
+----+----------+----------+-------+
| 1  | Farhad   | f@g.com  |  25   |
| 2  | Nida     | n@g.com  |  23   |
| 3  | Ali      | a@g.com  |  30   |
+----+----------+----------+-------+
\`\`\`

### Rows (Records)
Each row represents a single entity

### Columns (Fields)
Each column represents an attribute

### Primary Key
Uniquely identifies each row:

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);
\`\`\`

### Foreign Key
Creates relationships between tables:

\`\`\`sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    user_id INTEGER REFERENCES users(id)
);
\`\`\`

## Database Design Principles

### 1. Normalization
Organize data to reduce redundancy:

- **First Normal Form (1NF)**: Eliminate duplicate columns
- **Second Normal Form (2NF)**: Remove partial dependencies
- **Third Normal Form (3NF)**: Remove transitive dependencies

### 2. ACID Properties

- **Atomicity**: All or nothing transactions
- **Consistency**: Database remains valid
- **Isolation**: Transactions don't interfere
- **Durability**: Committed data persists

## Installing PostgreSQL

### Windows:
1. Download from postgresql.org
2. Run installer
3. Set password for postgres user
4. Default port: 5432

### Verify Installation:
\`\`\`bash
psql --version
\`\`\`

### Connect to Database:
\`\`\`bash
psql -U postgres
\`\`\`

## Practice Exercise

1. Install PostgreSQL on your system
2. Connect using psql command
3. Create your first database: CREATE DATABASE mydb;
4. List databases: \\l

---

*Understanding databases is fundamental for any developer!*`,
        order: 1,
      },
      {
        book_id: dbBook.id,
        title: 'Chapter 2: SQL Fundamentals',
        content: `# Chapter 2: SQL Fundamentals

## What is SQL?

SQL (Structured Query Language) is the standard language for managing relational databases.

## Creating Tables

\`\`\`sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER CHECK (age > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Data Types

### Common PostgreSQL Data Types:

- **INTEGER**: Whole numbers
- **VARCHAR(n)**: Variable-length string
- **TEXT**: Unlimited text
- **BOOLEAN**: True/False
- **DATE**: Date values
- **TIMESTAMP**: Date and time
- **DECIMAL(p,s)**: Precise numbers
- **SERIAL**: Auto-incrementing integer

## INSERT - Adding Data

\`\`\`sql
-- Insert single row
INSERT INTO students (name, email, age)
VALUES ('Farhad', 'farhad@example.com', 25);

-- Insert multiple rows
INSERT INTO students (name, email, age)
VALUES 
    ('Nida', 'nida@example.com', 23),
    ('Ali', 'ali@example.com', 30),
    ('Sara', 'sara@example.com', 22);
\`\`\`

## SELECT - Retrieving Data

\`\`\`sql
-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT name, email FROM students;

-- Select with condition
SELECT * FROM students WHERE age > 23;

-- Select with ordering
SELECT * FROM students ORDER BY name ASC;
SELECT * FROM students ORDER BY age DESC;

-- Limit results
SELECT * FROM students LIMIT 2;
\`\`\`

## WHERE Clause - Filtering

\`\`\`sql
-- Equality
SELECT * FROM students WHERE age = 25;

-- Comparison
SELECT * FROM students WHERE age > 20;
SELECT * FROM students WHERE age <= 25;

-- Not equal
SELECT * FROM students WHERE age != 25;

-- Between
SELECT * FROM students WHERE age BETWEEN 20 AND 25;

-- IN operator
SELECT * FROM students WHERE age IN (23, 25, 30);

-- LIKE operator (pattern matching)
SELECT * FROM students WHERE name LIKE 'F%';  -- Starts with F
SELECT * FROM students WHERE email LIKE '%@example.com';
\`\`\`

## UPDATE - Modifying Data

\`\`\`sql
-- Update specific record
UPDATE students 
SET age = 26 
WHERE name = 'Farhad';

-- Update multiple columns
UPDATE students 
SET age = 24, email = 'newemail@example.com'
WHERE name = 'Nida';

-- Update all (be careful!)
UPDATE students SET created_at = CURRENT_TIMESTAMP;
\`\`\`

## DELETE - Removing Data

\`\`\`sql
-- Delete specific record
DELETE FROM students WHERE id = 3;

-- Delete with condition
DELETE FROM students WHERE age < 18;

-- Delete all (be very careful!)
DELETE FROM students;
\`\`\`

## Aggregate Functions

\`\`\`sql
-- Count
SELECT COUNT(*) FROM students;

-- Sum
SELECT SUM(age) FROM students;

-- Average
SELECT AVG(age) FROM students;

-- Minimum/Maximum
SELECT MIN(age), MAX(age) FROM students;
\`\`\`

## GROUP BY

\`\`\`sql
-- Count students by age
SELECT age, COUNT(*) as count
FROM students
GROUP BY age;

-- Having clause (filter groups)
SELECT age, COUNT(*) as count
FROM students
GROUP BY age
HAVING COUNT(*) > 1;
\`\`\`

## Practice Exercise

1. Create a products table with id, name, price, category
2. Insert 10 sample products
3. Find all products priced above $50
4. Count products by category
5. Update prices by 10% for a specific category

---

*SQL is the foundation of database interaction!*`,
        order: 2,
      },
      {
        book_id: dbBook.id,
        title: 'Chapter 3: Database Design and Relationships',
        content: `# Chapter 3: Database Design and Relationships

## Database Relationships

### One-to-One
One record relates to exactly one other record:

\`\`\`sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(200) NOT NULL
);

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE REFERENCES users(id),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT
);
\`\`\`

### One-to-Many
One record relates to multiple records:

\`\`\`sql
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author_id INTEGER REFERENCES authors(id)
);

-- One author can have many books
-- Each book has one author
\`\`\`

### Many-to-Many
Multiple records relate to multiple records:

\`\`\`sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL
);

-- Junction table
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    UNIQUE(student_id, course_id)
);
\`\`\`

## JOINs - Combining Tables

### INNER JOIN
Returns matching rows from both tables:

\`\`\`sql
SELECT students.name, courses.title
FROM enrollments
INNER JOIN students ON enrollments.student_id = students.id
INNER JOIN courses ON enrollments.course_id = courses.id;
\`\`\`

### LEFT JOIN
Returns all rows from left table, matching from right:

\`\`\`sql
SELECT students.name, courses.title
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;
\`\`\`

### RIGHT JOIN
Returns all rows from right table, matching from left:

\`\`\`sql
SELECT students.name, courses.title
FROM students
RIGHT JOIN enrollments ON students.id = enrollments.student_id
RIGHT JOIN courses ON enrollments.course_id = courses.id;
\`\`\`

## Normalization

### First Normal Form (1NF)
- Eliminate repeating groups
- Each column contains atomic values

\`\`\`sql
-- Bad design
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    courses VARCHAR(200)  -- "Python,SQL,AI"
);

-- Good design (1NF)
CREATE TABLE student_courses (
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
    PRIMARY KEY (student_id, course_id)
);
\`\`\`

### Second Normal Form (2NF)
- Must be in 1NF
- No partial dependencies

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies

\`\`\`sql
-- Bad: Transitive dependency
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    department_location VARCHAR(100)  -- Depends on department
);

-- Good: 3NF
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department_id INTEGER REFERENCES departments(id)
);

CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(100)
);
\`\`\`

## Indexes

Improve query performance:

\`\`\`sql
-- Create index
CREATE INDEX idx_students_name ON students(name);
CREATE INDEX idx_email ON students(email);

-- Composite index
CREATE INDEX idx_name_age ON students(name, age);

-- View indexes
\\di
\`\`\`

## Practice Exercise

1. Design a blog database with users, posts, comments
2. Create proper relationships between tables
3. Add indexes for frequently queried columns
4. Write JOIN queries to retrieve related data

---

*Good database design prevents data anomalies and improves performance!*`,
        order: 3,
      },
      {
        book_id: dbBook.id,
        title: 'Chapter 4: Advanced PostgreSQL',
        content: `# Chapter 4: Advanced PostgreSQL

## Subqueries

Queries within queries:

\`\`\`sql
-- Find students older than average
SELECT name, age
FROM students
WHERE age > (SELECT AVG(age) FROM students);

-- Find courses with enrollments
SELECT title
FROM courses
WHERE id IN (SELECT DISTINCT course_id FROM enrollments);
\`\`\`

## Views

Virtual tables for complex queries:

\`\`\`sql
-- Create view
CREATE VIEW student_enrollments AS
SELECT 
    s.name as student_name,
    c.title as course_title,
    e.enrollment_date
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id;

-- Use view
SELECT * FROM student_enrollments
WHERE student_name = 'Farhad';
\`\`\`

## Transactions

Ensure data integrity:

\`\`\`sql
BEGIN;

UPDATE accounts 
SET balance = balance - 100 
WHERE id = 1;

UPDATE accounts 
SET balance = balance + 100 
WHERE id = 2;

COMMIT;  -- Or ROLLBACK;
\`\`\`

## Functions

Create reusable SQL functions:

\`\`\`sql
CREATE OR REPLACE FUNCTION get_student_count()
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM students);
END;
$$ LANGUAGE plpgsql;

-- Use function
SELECT get_student_count();
\`\`\`

## Triggers

Automate actions on events:

\`\`\`sql
-- Create audit table
CREATE TABLE student_audit (
    id SERIAL PRIMARY KEY,
    student_id INTEGER,
    action VARCHAR(50),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create trigger function
CREATE OR REPLACE FUNCTION log_student_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO student_audit (student_id, action)
    VALUES (NEW.id, 'UPDATED');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger
CREATE TRIGGER student_update_trigger
AFTER UPDATE ON students
FOR EACH ROW
EXECUTE FUNCTION log_student_changes();
\`\`\`

## Window Functions

Advanced analytics:

\`\`\`sql
-- Ranking
SELECT 
    name,
    age,
    RANK() OVER (ORDER BY age DESC) as age_rank
FROM students;

-- Running total
SELECT 
    name,
    age,
    SUM(age) OVER (ORDER BY id) as running_total
FROM students;

-- Partitioning
SELECT 
    name,
    age,
    AVG(age) OVER (PARTITION BY department_id) as dept_avg
FROM employees;
\`\`\`

## Query Optimization

### EXPLAIN ANALYZE

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM students WHERE age > 20;
\`\`\`

### Best Practices:

1. **Use Indexes**: Create indexes on frequently queried columns
2. **Avoid SELECT ***: Specify only needed columns
3. **Use LIMIT**: Restrict result set size
4. **Analyze Queries**: Use EXPLAIN to understand execution
5. **Avoid N+1 Queries**: Use JOINs instead of multiple queries

## Backup and Restore

\`\`\`bash
# Backup database
pg_dump -U postgres mydb > backup.sql

# Restore database
psql -U postgres mydb < backup.sql

# Backup specific table
pg_dump -U postgres -t students mydb > students.sql
\`\`\`

## Practice Exercise

1. Create a view that shows student enrollment statistics
2. Write a transaction that transfers money between accounts
3. Create a trigger that logs deletions
4. Optimize a slow query using EXPLAIN ANALYZE

---

*Advanced features make PostgreSQL powerful and flexible!*`,
        order: 4,
      },
    ],
  })

  console.log('✅ Created Database Systems book with chapters')

  // Agentic AI Course Book
  const aiBook = await prisma.book.upsert({
    where: { course_id: aiCourse.id },
    update: {},
    create: {
      course_id: aiCourse.id,
      title: 'Building Intelligent AI Agents',
      description: 'Complete guide to creating autonomous AI agents',
    },
  })

  await prisma.chapter.createMany({
    data: [
      {
        book_id: aiBook.id,
        title: 'Chapter 1: Introduction to AI Agents',
        content: `# Chapter 1: Introduction to AI Agents

## What are AI Agents?

AI agents are autonomous software systems that use artificial intelligence to perceive their environment, make decisions, and take actions to achieve specific goals.

## Key Components of AI Agents

### 1. Perception
Agents gather information from their environment:

- **Text Input**: User messages, documents
- **API Data**: Web services, databases
- **Sensors**: Real-world data streams
- **Files**: Images, audio, documents

### 2. Reasoning
Agents process information and make decisions:

- **Analysis**: Understanding context
- **Planning**: Creating action steps
- **Decision Making**: Choosing best course of action
- **Learning**: Improving from experience

### 3. Action
Agents execute tasks:

- **Generate Text**: Responses, reports, code
- **Call APIs**: External services
- **Execute Code**: Python, JavaScript
- **Store Data**: Databases, files

## Types of AI Agents

### Simple Reflex Agents
React to current percepts:

\`\`\`python
def simple_agent(percept):
    if "weather" in percept:
        return get_weather_response()
    elif "time" in percept:
        return get_time_response()
    return "I don't understand"
\`\`\`

### Model-Based Agents
Maintain internal state:

\`\`\`python
class ModelAgent:
    def __init__(self):
        self.memory = {}
    
    def process(self, percept):
        self.update_memory(percept)
        return self.decide_action()
\`\`\`

### Goal-Based Agents
Work toward specific goals:

\`\`\`python
def goal_agent(percept, goal):
    current_state = get_state(percept)
    actions = get_possible_actions(current_state)
    best_action = select_action(actions, goal)
    return execute(best_action)
\`\`\`

### Learning Agents
Improve over time:

\`\`\`python
class LearningAgent:
    def __init__(self):
        self.model = load_model()
        self.experiences = []
    
    def learn(self, experience):
        self.experiences.append(experience)
        self.update_model()
\`\`\`

## Real-World Applications

### 1. Customer Service
- Chatbots handling inquiries
- Automated ticket routing
- 24/7 support availability

### 2. Personal Assistants
- Scheduling meetings
- Managing emails
- Setting reminders

### 3. Data Analysis
- Processing large datasets
- Generating insights
- Creating reports

### 4. Code Generation
- Writing code from descriptions
- Debugging assistance
- Code review

## AI Agent Architecture

\`\`\`
┌─────────────────────────────────┐
│         Environment             │
└──────────────┬──────────────────┘
               │
               ▼
┌─────────────────────────────────┐
│      Perception Layer           │
│  (Input processing, parsing)    │
└──────────────┬──────────────────┘
               │
               ▼
┌─────────────────────────────────┐
│      Reasoning Engine           │
│   (LLM, decision making)        │
└──────────────┬──────────────────┘
               │
               ▼
┌─────────────────────────────────┐
│       Action Layer              │
│   (Execute, respond, store)     │
└─────────────────────────────────┘
\`\`\`

## Setting Up Your Environment

\`\`\`bash
# Install required packages
pip install openai
pip install langchain
pip install python-dotenv

# Create project structure
mkdir ai-agent
cd ai-agent
touch .env
touch agent.py
\`\`\`

### .env file:
\`\`\`
OPENAI_API_KEY=your-api-key-here
\`\`\`

## Your First AI Agent

\`\`\`python
import openai
from dotenv import load_dotenv

load_dotenv()

def simple_agent(user_input):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant"},
            {"role": "user", "content": user_input}
        ]
    )
    return response.choices[0].message.content

# Test the agent
result = simple_agent("What is Python?")
print(result)
\`\`\`

## Practice Exercise

1. Set up OpenAI API account
2. Install required packages
3. Create a simple conversational agent
4. Test with different inputs

---

*AI agents represent the future of autonomous software!*`,
        order: 1,
      },
      {
        book_id: aiBook.id,
        title: 'Chapter 2: OpenAI API Fundamentals',
        content: `# Chapter 2: OpenAI API Fundamentals

## Getting Started with OpenAI API

### API Keys
1. Visit platform.openai.com
2. Create account
3. Generate API key
4. Store securely in .env

\`\`\`python
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")
\`\`\`

## Chat Completions API

### Basic Usage

\`\`\`python
import openai

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful coding assistant"},
        {"role": "user", "content": "Write a Python function to reverse a string"}
    ]
)

print(response.choices[0].message.content)
\`\`\`

### Message Roles

- **system**: Sets agent behavior/persona
- **user**: User input
- **assistant**: Previous AI responses
- **function**: Function call results

\`\`\`python
messages = [
    {"role": "system", "content": "You are a math tutor"},
    {"role": "user", "content": "What is the derivative of x^2?"},
    {"role": "assistant", "content": "The derivative of x^2 is 2x"},
    {"role": "user", "content": "Can you explain why?"}
]
\`\`\`

## Important Parameters

### temperature
Controls randomness (0.0 to 2.0):

\`\`\`python
# Deterministic responses
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    temperature=0.0
)

# Creative responses
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    temperature=0.8
)
\`\`\`

### max_tokens
Limit response length:

\`\`\`python
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    max_tokens=100  # Limit to 100 tokens
)
\`\`\`

### top_p
Nucleus sampling:

\`\`\`python
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    top_p=0.9  # Consider top 90% probability mass
)
\`\`\`

## Building a Conversational Agent

\`\`\`python
import openai

class ChatAgent:
    def __init__(self, system_prompt):
        self.messages = [
            {"role": "system", "content": system_prompt}
        ]
    
    def chat(self, user_input):
        self.messages.append(
            {"role": "user", "content": user_input}
        )
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=self.messages,
            temperature=0.7
        )
        
        assistant_reply = response.choices[0].message.content
        self.messages.append(
            {"role": "assistant", "content": assistant_reply}
        )
        
        return assistant_reply

# Usage
agent = ChatAgent("You are a friendly tutor who helps learn Python")
while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    response = agent.chat(user_input)
    print(f"Agent: {response}")
\`\`\`

## Function Calling

Enable agents to use tools:

\`\`\`python
functions = [
    {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                }
            },
            "required": ["location"]
        }
    }
]

response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    functions=functions
)
\`\`\`

## Streaming Responses

\`\`\`python
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=messages,
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")
\`\`\`

## Error Handling

\`\`\`python
import openai

try:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=messages
    )
except openai.error.RateLimitError:
    print("Rate limit exceeded. Please wait.")
except openai.error.APIError as e:
    print(f"API error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
\`\`\`

## Best Practices

1. **Use System Prompts**: Define clear behavior
2. **Manage Context**: Keep relevant conversation history
3. **Handle Errors**: Gracefully manage API failures
4. **Monitor Usage**: Track token consumption
5. **Set Timeouts**: Prevent hanging requests

## Practice Exercise

1. Create a coding tutor agent
2. Implement conversation memory
3. Add error handling and retry logic
4. Build a streaming chat interface

---

*The OpenAI API is the foundation for intelligent agents!*`,
        order: 2,
      },
      {
        book_id: aiBook.id,
        title: 'Chapter 3: Building Autonomous Agents',
        content: `# Chapter 3: Building Autonomous Agents

## What Makes an Agent Autonomous?

Autonomous agents can:
- Plan multi-step solutions
- Use tools independently
- Learn from feedback
- Handle complex workflows

## ReAct Pattern (Reasoning + Acting)

Combines thinking and doing:

\`\`\`python
def react_agent(question):
    thought = llm_think(question)
    action = llm_decide_action(thought)
    observation = execute_action(action)
    answer = llm_conclude(thought, observation)
    return answer
\`\`\`

## Tool Use

### Creating Tools

\`\`\`python
from typing import Dict, Any

class Tool:
    def __init__(self, name, description, function):
        self.name = name
        self.description = description
        self.function = function

# Define tools
tools = [
    Tool(
        name="calculator",
        description="Perform mathematical calculations",
        function=calculate
    ),
    Tool(
        name="search",
        description="Search the internet for information",
        function=web_search
    ),
    Tool(
        name="file_reader",
        description="Read contents of a file",
        function=read_file
    )
]
\`\`\`

### Tool Selection

\`\`\`python
def select_tool(question, tools):
    prompt = f"Given question: {question}\\nSelect appropriate tool"
    tool_name = llm_predict(prompt)
    return find_tool(tool_name, tools)
\`\`\`

## Building a Research Agent

\`\`\`python
class ResearchAgent:
    def __init__(self):
        self.tools = self.initialize_tools()
        self.memory = []
    
    def research(self, topic):
        # Plan research
        plan = self.create_plan(topic)
        
        # Execute research steps
        for step in plan:
            tool = self.select_tool(step)
            result = tool.execute(step)
            self.memory.append({
                'step': step,
                'result': result
            })
        
        # Synthesize findings
        return self.synthesize_results()
    
    def create_plan(self, topic):
        prompt = f"Create research plan for: {topic}"
        plan = llm_generate(prompt)
        return parse_plan(plan)
    
    def synthesize_results(self):
        prompt = f"Synthesize findings: {self.memory}"
        return llm_generate(prompt)
\`\`\`

## Memory Management

### Short-term Memory
Current conversation context:

\`\`\`python
class ShortTermMemory:
    def __init__(self, max_tokens=4000):
        self.messages = []
        self.max_tokens = max_tokens
    
    def add_message(self, role, content):
        self.messages.append({
            "role": role,
            "content": content
        })
        self.trim_if_needed()
    
    def trim_if_needed(self):
        while self.token_count() > self.max_tokens:
            self.messages.pop(0)
\`\`\`

### Long-term Memory
Persistent knowledge storage:

\`\`\`python
import json

class LongTermMemory:
    def __init__(self, filepath='memory.json'):
        self.filepath = filepath
        self.data = self.load()
    
    def load(self):
        try:
            with open(self.filepath, 'r') as f:
                return json.load(f)
        except:
            return []
    
    def save(self):
        with open(self.filepath, 'w') as f:
            json.dump(self.data, f)
    
    def add(self, information):
        self.data.append(information)
        self.save()
    
    def search(self, query):
        return [item for item in self.data 
                if query.lower() in item.lower()]
\`\`\`

## Iterative Refinement

Agents improve output through cycles:

\`\`\`python
def iterative_agent(task, max_iterations=3):
    result = generate_initial(task)
    
    for i in range(max_iterations):
        feedback = evaluate(result)
        if feedback.is_satisfactory:
            break
        result = improve(result, feedback)
    
    return result
\`\`\`

## Multi-Agent Systems

Collaborating specialized agents:

\`\`\`python
class MultiAgentSystem:
    def __init__(self):
        self.researcher = ResearchAgent()
        self.writer = WritingAgent()
        self.reviewer = ReviewAgent()
    
    def generate_report(self, topic):
        # Research phase
        research = self.researcher.research(topic)
        
        # Writing phase
        draft = self.writer.write(research)
        
        # Review phase
        feedback = self.reviewer.review(draft)
        
        # Revision
        final = self.writer.revise(draft, feedback)
        
        return final
\`\`\`

## Practice Exercise

1. Build a research agent for a topic
2. Implement memory with persistence
3. Create a multi-agent writing system
4. Add iterative refinement to outputs

---

*Autonomous agents can solve complex problems independently!*`,
        order: 3,
      },
      {
        book_id: aiBook.id,
        title: 'Chapter 4: LangChain Framework',
        content: `# Chapter 4: LangChain Framework

## What is LangChain?

LangChain is a framework for developing applications powered by language models. It provides:
- Modular components for LLM workflows
- Easy integration with external tools
- Memory management
- Chain composition

## Installation

\`\`\`bash
pip install langchain
pip install langchain-openai
pip install langchain-community
\`\`\`

## Core Components

### 1. Models

\`\`\`python
from langchain_openai import ChatOpenAI

# Initialize model
llm = ChatOpenAI(
    model="gpt-4",
    temperature=0.7
)

# Use model
response = llm.invoke("What is AI?")
\`\`\`

### 2. Prompts

\`\`\`python
from langchain.prompts import ChatPromptTemplate

# Create prompt template
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} specializing in {topic}"),
    ("user", "{input}")
])

# Format prompt
formatted = prompt.format(
    role="tutor",
    topic="Python programming",
    input="Explain lists"
)
\`\`\`

### 3. Chains

\`\`\`python
from langchain.chains import LLMChain

# Create chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run chain
result = chain.run({
    "role": "tutor",
    "topic": "Python",
    "input": "Explain dictionaries"
})
\`\`\`

## Building with LangChain

### Simple Q&A Chain

\`\`\`python
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

# Create conversation chain
memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

# Chat
response = conversation.predict(
    input="What are the benefits of Python?"
)
print(response)

# Continue conversation
response = conversation.predict(
    input="Can you give me examples?"
)
print(response)
\`\`\`

### Retrieval Chain

For document Q&A:

\`\`\`python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS

# Load document
loader = TextLoader("book.txt")
documents = loader.load()

# Split into chunks
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
texts = text_splitter.split_documents(documents)

# Create embeddings
embeddings = OpenAIEmbeddings()
db = FAISS.from_documents(texts, embeddings)

# Query documents
query = "What is the main topic?"
docs = db.similarity_search(query)

# Answer with context
from langchain.chains import RetrievalQA

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=db.as_retriever()
)

answer = qa_chain.run(query)
\`\`\`

## Agents in LangChain

\`\`\`python
from langchain.agents import initialize_agent, Tool
from langchain.agents import AgentType

# Define tools
tools = [
    Tool(
        name="Search",
        func=search_function,
        description="Search for information"
    ),
    Tool(
        name="Calculator",
        func=calculate_function,
        description="Perform calculations"
    )
]

# Initialize agent
agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# Run agent
result = agent.run(
    "What is the population of Pakistan multiplied by 2?"
)
\`\`\`

## Memory Types

### Conversation Buffer Memory
Stores all messages:

\`\`\`python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)
\`\`\`

### Conversation Summary Memory
Summarizes conversation:

\`\`\`python
from langchain.memory import ConversationSummaryMemory

memory = ConversationSummaryMemory(llm=llm)
\`\`\`

### Vector Store Memory
Stores in vector database:

\`\`\`python
from langchain.memory import VectorStoreRetrieverMemory

memory = VectorStoreRetrieverMemory(
    retriever=db.as_retriever()
)
\`\`\`

## Building a Complete Application

\`\`\`python
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

# Setup
llm = ChatOpenAI(model="gpt-4")
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# Create chain
qa_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=db.as_retriever(),
    memory=memory
)

# Use
query = "Explain chapter 3"
result = qa_chain({"question": query})
print(result["answer"])
\`\`\`

## Best Practices

1. **Use Prompt Templates**: Standardize inputs
2. **Implement Memory**: Maintain context
3. **Add Error Handling**: Manage failures gracefully
4. **Monitor Tokens**: Track usage
5. **Test Chains**: Validate outputs

## Practice Exercise

1. Build a document Q&A system
2. Create a conversational agent with memory
3. Implement a multi-tool agent
4. Add streaming responses

---

*LangChain simplifies building complex LLM applications!*`,
        order: 4,
      },
    ],
  })

  console.log('✅ Created Agentic AI book with chapters')

  // Create sample projects
  await prisma.project.createMany({
    data: [
      {
        title: 'Portfolio & Learning Platform',
        description: 'Full-stack web application with authentication, courses, books, and progress tracking',
        github_url: 'https://github.com/farhadgul/portfolio-platform',
        linkedin_url: 'https://www.linkedin.com/in/farhad-gul',
        tech_stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
        user_id: admin.id,
      },
      {
        title: 'AI-Powered Chatbot',
        description: 'Intelligent chatbot using OpenAI API with custom training data and LangChain',
        github_url: 'https://github.com/farhadgul/ai-chatbot',
        tech_stack: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'React'],
        user_id: admin.id,
      },
      {
        title: 'Database Management System',
        description: 'PostgreSQL administration tool with query optimization and monitoring',
        github_url: 'https://github.com/farhadgul/db-manager',
        tech_stack: ['Python', 'PostgreSQL', 'Flask', 'D3.js'],
        user_id: admin.id,
      },
    ],
  })

  console.log('✅ Created projects')

  console.log('🎉 Database seeding completed!')
  console.log('\\n📚 Books Created:')
  console.log('  - The Complete Python Programming Guide (5 chapters)')
  console.log('  - Mastering Database Systems (4 chapters)')
  console.log('  - Building Intelligent AI Agents (4 chapters)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
