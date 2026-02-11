# Admin Dashboard - Features Guide

## ✨ New Features Added

### 1. **Authentication System**
- Login page with JWT-based authentication
- Secure cookie-based session management
- Protected dashboard routes

**Demo Credentials:**
- Username: `admin`
- Password: `admin123`

### 2. **Course Management Dashboard**
- Create new courses
- Edit existing courses
- Delete courses
- View all courses in a table

### 3. **Brochure Management**
- Upload PDF brochures
- Write custom brochure content
- Generate PDF from content
- Download brochures
- Store brochure data with courses

### 4. **API Endpoints**

#### Authentication
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

#### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses?id={id}` - Get specific course
- `POST /api/courses` - Create course
- `PUT /api/courses?id={id}` - Update course
- `DELETE /api/courses?id={id}` - Delete course
- `GET /api/courses/{id}/download` - Download brochure PDF

## 🚀 Getting Started

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Update `.env.local` with your JWT secret:
   ```
   JWT_SECRET=your-custom-secret-key
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open in browser: `http://localhost:3000`

## 📍 Access Points

### Public Pages
- Home: `http://localhost:3000/`
- Login: `http://localhost:3000/login`

### Protected Pages
- Dashboard: `http://localhost:3000/dashboard` (requires login)

## 📁 Project Structure

```
app/
├── api/
│   ├── auth/
│   │   ├── login/route.ts
│   │   └── logout/route.ts
│   └── courses/
│       ├── route.ts
│       └── [id]/download/route.ts
├── components/
│   ├── CourseForm.tsx
│   ├── CourseList.tsx
│   └── ...
├── login/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
└── ...
lib/
├── auth.ts (Authentication utilities)
├── courseStorage.ts (Course data management)
└── ...
```

## 🔐 Security Notes

1. **For Production:**
   - Change `JWT_SECRET` in `.env.local`
   - Implement proper database (MongoDB, PostgreSQL, etc.)
   - Use HTTPS only
   - Add password hashing verification
   - Implement rate limiting
   - Add CSRF protection

2. **Current Implementation:**
   - Uses in-memory storage (data lost on restart)
   - Basic JWT authentication
   - HttpOnly cookies for session management

## 📝 Usage Examples

### Add a Course
1. Go to `/dashboard`
2. Login with admin/admin123
3. Click "Add New Course"
4. Fill in course details
5. Upload PDF or write content
6. Click "Save Course"

### Edit Course
1. On dashboard, click "Edit" on any course
2. Modify details
3. Click "Save Course"

### Download Brochure
1. On dashboard, click "Download PDF"
2. PDF will be downloaded automatically

## 🛠️ Dependencies Added

- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing
- `jspdf` - PDF generation
- `html2pdf.js` - HTML to PDF conversion

## 📌 Notes

- Course data is stored in memory and will reset on server restart
- For production, connect to a real database
- Customize styling using Tailwind CSS classes
- All API endpoints require authentication (except /api/auth/login)

## 🤝 Support

For issues or questions, contact the development team.
