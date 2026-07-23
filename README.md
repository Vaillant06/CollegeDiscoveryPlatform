# CollegeDiscoveryPlatform

A full-stack web application that helps students discover, compare, and evaluate colleges across India. Browse detailed college profiles, explore courses and entrance exams, compare institutions side-by-side, and use the predictor tool to find your best-fit colleges.

## Features

- **College Directory** — Browse 500+ colleges with detailed profiles including fees, ratings, placement rates, NIRF rankings, campus info, and more.
- **College Comparison** — Compare up to 3 colleges side-by-side across all key parameters.
- **Exam-Based Predictor** — Enter your exam scores to get personalized college recommendations.
- **Course Explorer** — Browse courses with duration, stream, and program details.
- **Exam Directory** — View entrance exams and discover which colleges accept each exam.
- **User Reviews** — Read and submit ratings and reviews for colleges.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8, React Router 7, Bootstrap 5 |
| Backend | Express 5, Node.js 22 |
| Database | PostgreSQL with Prisma ORM |
| Language | JavaScript (frontend: ESM, backend: CommonJS) |

## Project Structure

```
CollegeDiscoveryPlatform/
├── client/
│   └── frontend/
│       ├── public/
│       ├── Pages/              # 6 route pages
│       ├── src/
│       │   ├── components/     # 9 reusable components
│       │   ├── assets/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── vite.config.js
│       └── package.json
├── server/
│   ├── prisma/
│   │   ├── schema.prisma      # 4 database models
│   │   └── migrations/        # 11 migration files
│   ├── controllers/           # 4 controllers
│   ├── routes/                # 6 API endpoints
│   ├── index.js
│   ├── db.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 22+
- PostgreSQL running locally

### Setup

1. **Clone the repo**
   ```sh
   git clone https://github.com/your-username/CollegeDiscoveryPlatform.git
   cd CollegeDiscoveryPlatform
   ```

2. **Backend setup**
   ```sh
   cd server
   npm install
   ```
   Create a `.env` file in `server/` with:
   ```
   DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/collegediscoverydb"
   ```
   Run migrations:
   ```sh
   npx prisma migrate deploy
   ```
   Start the server:
   ```sh
   node index.js
   ```

3. **Frontend setup**
   ```sh
   cd client/frontend
   npm install
   npm run dev
   ```

4. Open **http://localhost:5173** in your browser.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/colleges` | Get all colleges |
| GET | `/api/colleges/:id` | Get college by ID |
| GET | `/api/exams` | Get all exams |
| GET | `/api/exams/:id` | Get exam by ID |
| GET | `/api/courses` | Get all courses |
| POST | `/api/predictor` | Predict colleges based on exam scores |
