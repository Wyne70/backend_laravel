# ITE183 Full-Stack Application

This repository contains the full-stack project for ITE183, featuring a Laravel backend and a React (Vite) frontend.

## 📁 Project Structure

```text
ITE183/
├── backend/               # Laravel backend application
│   ├── app/               # Application core code (Controllers, Models, Providers)
│   ├── routes/            # Web and console routes
│   ├── database/          # Migrations, seeders, and factories
│   └── composer.json      # PHP dependencies
└── frontend/
    └── hello-world/       # React + Vite frontend application
        ├── src/           # React components, pages (Home, Projects, Contact), contexts
        ├── index.html     # HTML entry point
        └── package.json   # Node dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **PHP** (>= 8.2) & **Composer**
- **Node.js** (>= 18) & **npm**

---

### Backend Setup (Laravel)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Set up the environment configuration:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Run database migrations:
   ```bash
   php artisan migrate
   ```

5. Start the backend server:
   ```bash
   php artisan serve
   ```
   The backend will run on `http://127.0.0.1:8000`.

---

### Frontend Setup (React + Vite)

1. Navigate to the frontend directory:
   ```bash
   cd frontend/hello-world
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

---

## 🛠️ Tech Stack

- **Backend:** [Laravel](https://laravel.com/), PHP, Composer
- **Frontend:** [React](https://react.dev/), [Vite](https://vite.dev/), React Router, CSS
- **Code Quality:** Oxlint, Laravel Pint, PHPUnit
