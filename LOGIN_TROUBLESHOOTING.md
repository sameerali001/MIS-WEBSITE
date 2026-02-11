# Login Troubleshooting Guide

## Issue: Unable to Login

### ✅ Step 1: Check MongoDB Connection

#### Option A: Using MongoDB Locally
1. Install MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```
3. Verify MongoDB is running:
   ```bash
   mongosh
   # Should open MongoDB shell without error
   ```

#### Option B: Using MongoDB Atlas (Cloud)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/miscareer`

### ✅ Step 2: Configure .env.local

Edit `.env.local` in your project root:

```env
# JWT Secret
JWT_SECRET=your-secret-key-change-in-production

# MongoDB Connection - Choose ONE:

# For Local MongoDB:
DATABASE_URL=mongodb://localhost:27017/miscareer

# OR For MongoDB Atlas:
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/miscareer
```

### ✅ Step 3: Generate Prisma Client

Run in terminal:
```bash
npm run db:generate
```

Expected output:
```
✔ Generated Prisma Client
```

### ✅ Step 4: Start Development Server

```bash
npm run dev
```

Expected output:
```
> next dev
  ▲ Next.js 16.1.6
  - Local:        http://localhost:3000
```

### ✅ Step 5: Test Login

1. Open: http://localhost:3000/login
2. Use credentials:
   - Username: `admin`
   - Password: `admin123`
3. Should redirect to dashboard

---

## Common Error Messages & Solutions

### "MongoDB connection error"
**Cause:** MongoDB is not running or connection string is wrong

**Solution:**
```bash
# Check if MongoDB is running (local)
tasklist | findstr mongo  # Windows
ps aux | grep mongo       # macOS/Linux

# Restart MongoDB
net start MongoDB         # Windows
brew services restart mongodb-community  # macOS
```

### "ECONNREFUSED connection"
**Cause:** MongoDB not running at localhost:27017

**Solution:**
1. Start MongoDB service (see Step 1)
2. Verify connection string in `.env.local`

### "Cannot find module @prisma/client"
**Cause:** Prisma client not generated

**Solution:**
```bash
npm run db:generate
```

### "User not found" or "Invalid password"
**Cause:** Default admin user not created

**Solution:**
```bash
# Trigger initialization
curl -X POST http://localhost:3000/api/init

# Or restart the app - initialization happens on first login attempt
npm run dev
```

---

## Verification Steps

Run these commands to verify setup:

```bash
# 1. Check MongoDB connection
mongosh

# 2. Check Prisma client
npm run db:generate

# 3. Check environment variables
cat .env.local

# 4. Check if PORT 3000 is available
netstat -ano | findstr :3000  # Windows

# 5. Start dev server
npm run dev

# 6. Test login in another terminal
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

---

## Quick Setup Script

If you have MongoDB running locally, run these commands:

```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma client
npm run db:generate

# 3. Ensure .env.local exists with correct DATABASE_URL
# Edit .env.local with: DATABASE_URL=mongodb://localhost:27017/miscareer

# 4. Start development server
npm run dev

# 5. Visit http://localhost:3000/login
# Login with: admin / admin123
```

---

## Still Having Issues?

Check the browser console and terminal logs for specific error messages. Most common issues are:

1. **MongoDB not running** - Start the service
2. **Wrong DATABASE_URL** - Update `.env.local`
3. **Prisma not generated** - Run `npm run db:generate`
4. **Port 3000 in use** - Kill process or use different port

Contact support with the full error message from the terminal.
