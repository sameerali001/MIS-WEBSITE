import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Fallback in-memory storage if MongoDB is unavailable
const fallbackUsers: { [key: string]: { password: string; email: string; name: string } } = {};

let isMongoConnected = true;

// Test MongoDB connection on startup
async function testMongoConnection() {
  try {
    await prisma.$queryRaw`db.adminCommand({ ping: 1 })`;
    isMongoConnected = true;
    console.log('✅ MongoDB connected');
  } catch (error) {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB not available, using fallback storage');
    // Initialize fallback with default user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    fallbackUsers['admin'] = {
      password: hashedPassword,
      email: 'admin@miscareer.com',
      name: 'Admin User'
    };
  }
}

testMongoConnection().catch(console.error);

// Initialize default admin user
export async function initializeDefaultUser() {
  try {
    if (!isMongoConnected) {
      // Use fallback storage
      if (!fallbackUsers['admin']) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        fallbackUsers['admin'] = {
          password: hashedPassword,
          email: 'admin@miscareer.com',
          name: 'Admin User'
        };
      }
      console.log('✅ Default user ready (using fallback storage)');
      return;
    }

    const existingAdmin = await prisma.user.findUnique({
      where: { username: 'admin' }
    });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await prisma.user.create({
        data: {
          username: 'admin',
          password: hashedPassword,
          email: 'admin@miscareer.com',
          name: 'Admin User'
        }
      });
      console.log('✅ Default admin user created: admin / admin123');
    }
  } catch (error) {
    console.error('⚠️ MongoDB initialization failed, using fallback:', error);
    // Switch to fallback
    isMongoConnected = false;
    const hashedPassword = await bcrypt.hash('admin123', 10);
    fallbackUsers['admin'] = {
      password: hashedPassword,
      email: 'admin@miscareer.com',
      name: 'Admin User'
    };
  }
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): { username: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { username: string };
    return decoded;
  } catch {
    return null;
  }
}

export async function authenticateUser(
  username: string,
  password: string
): Promise<{ success: boolean; token?: string; error?: string }> {
  try {
    // Try MongoDB first
    if (isMongoConnected) {
      try {
        const user = await prisma.user.findUnique({
          where: { username }
        });

        if (!user) {
          return { success: false, error: 'User not found' };
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          return { success: false, error: 'Invalid password' };
        }

        const token = generateToken(username);
        return { success: true, token };
      } catch (dbError) {
        console.warn('MongoDB error, switching to fallback:', dbError);
        isMongoConnected = false;
      }
    }

    // Use fallback storage
    const user = fallbackUsers[username];

    if (!user) {
      return { success: false, error: 'User not found' };
    }

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return { success: false, error: 'Invalid password' };
    }

    const token = generateToken(username);
    return { success: true, token };
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

export async function getUser(username: string) {
  try {
    if (isMongoConnected) {
      try {
        return await prisma.user.findUnique({
          where: { username },
          select: {
            username: true,
            email: true,
            name: true,
            createdAt: true
          }
        });
      } catch (error) {
        isMongoConnected = false;
      }
    }

    const user = fallbackUsers[username];
    if (user) {
      return {
        username,
        email: user.email,
        name: user.name,
        createdAt: new Date()
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

export async function getAllUsers() {
  try {
    if (isMongoConnected) {
      try {
        return await prisma.user.findMany({
          select: {
            username: true,
            email: true,
            name: true,
            createdAt: true
          }
        });
      } catch (error) {
        isMongoConnected = false;
      }
    }

    return Object.entries(fallbackUsers).map(([username, user]) => ({
      username,
      email: user.email,
      name: user.name,
      createdAt: new Date()
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export async function createUser(
  username: string,
  email: string,
  name: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (isMongoConnected) {
      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [{ username }, { email }]
          }
        });

        if (existingUser) {
          return { success: false, error: 'Username or email already exists' };
        }

        const hashedPassword = await hashPassword(password);
        await prisma.user.create({
          data: {
            username,
            email,
            name,
            password: hashedPassword
          }
        });

        return { success: true };
      } catch (error) {
        isMongoConnected = false;
      }
    }

    // Use fallback storage
    if (fallbackUsers[username]) {
      return { success: false, error: 'Username already exists' };
    }

    const hashedPassword = await hashPassword(password);
    fallbackUsers[username] = {
      password: hashedPassword,
      email,
      name
    };

    return { success: true };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: 'Failed to create user' };
  }
}
