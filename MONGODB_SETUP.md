# MongoDB Database Setup Guide

## Features Added

### ✅ MongoDB Integration
- Prisma ORM for database management
- User credentials stored securely in MongoDB
- Course data with PDF support stored in database
- Automatic initialization on first request

### ✅ User Management
- Admin user created automatically on first startup
- Secure password hashing with bcryptjs
- User profiles with email and name
- Session management with JWT tokens

### ✅ Course Management
- Courses stored in MongoDB
- PDF brochure storage (Base64 encoded)
- Full CRUD operations
- Timestamps for tracking

---

## Setup Instructions

### 1. MongoDB Setup

#### Option A: MongoDB Atlas (Recommended for Production)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/miscareer`)

#### Option B: Local MongoDB
1. Download and install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (if installed via Homebrew)
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

### 2. Update Environment Variables

Edit `.env.local` and set your MongoDB connection string:

```env
# JWT Secret Key
JWT_SECRET=your-secret-key-change-in-production

# MongoDB Connection String
# For MongoDB Atlas:
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/miscareer

# For Local MongoDB:
DATABASE_URL=mongodb://localhost:27017/miscareer
```

### 3. Generate Prisma Client

Run the following command to generate Prisma client:

```bash
npm run db:generate
```

### 4. Initialize Database

The application will automatically initialize the database and create a default admin user on the first login attempt. Or manually trigger it:

```bash
curl -X POST http://localhost:3000/api/init
```

### 5. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000/login with default credentials:
- **Username:** admin
- **Password:** admin123

---

## Database Schema

### Users Collection
```
{
  _id: ObjectId,
  username: String (unique),
  password: String (hashed),
  email: String (unique),
  name: String,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### Courses Collection
```
{
  _id: ObjectId,
  name: String,
  description: String,
  duration: String,
  brochureData: String (Base64 PDF),
  brochureFileName: String,
  createdAt: DateTime,
  updatedAt: DateTime
}
```

---

## Available Commands

```bash
# Start development server
npm run dev

# Generate Prisma client
npm run db:generate

# Run database migrations
npm run db:migrate

# Open Prisma Studio (visual database editor)
npm run db:studio

# Build for production
npm build

# Start production server
npm start
```

---

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with username/password
- `POST /api/auth/logout` - Logout user
- `POST /api/init` - Initialize database

### Courses
- `GET /api/courses` - Get all courses (requires auth)
- `GET /api/courses?id={id}` - Get specific course (requires auth)
- `POST /api/courses` - Create course (requires auth)
- `PUT /api/courses?id={id}` - Update course (requires auth)
- `DELETE /api/courses?id={id}` - Delete course (requires auth)
- `GET /api/courses/{id}/download` - Download brochure PDF (requires auth)

---

## Features

### Login System
- Secure JWT-based authentication
- HttpOnly cookies for session management
- Password hashing with bcryptjs
- Automatic admin user creation

### Course Management Dashboard
- Add new courses
- Edit existing courses
- Delete courses
- Upload PDF brochures
- Generate PDFs from content
- Download course brochures

### Data Persistence
- All data stored in MongoDB
- Automatic timestamps
- No data loss on server restart

---

## Troubleshooting

### "Cannot find module @prisma/client"
```bash
npm run db:generate
```

### MongoDB Connection Error
- Check `.env.local` has correct DATABASE_URL
- Ensure MongoDB is running (local) or reachable (Atlas)
- Verify network access in MongoDB Atlas settings

### Default Admin User Not Created
```bash
curl -X POST http://localhost:3000/api/init
```

### Port Already in Use
```bash
# Change port in next.config.ts or run on different port
npm run dev -- -p 3001
```

---

## Security Notes

1. **Change JWT_SECRET** in production
2. **Use MongoDB Atlas** for production (more secure)
3. **Enable SSL/TLS** for MongoDB connections
4. **Change default admin password** after first login
5. **Use environment variables** for sensitive data
6. **Enable MongoDB authentication** on production

---

## Next Steps

1. Set up MongoDB connection
2. Update `.env.local` with your connection string
3. Run `npm run dev`
4. Login with admin/admin123
5. Create courses and manage brochures

Enjoy your new database-backed dashboard!
