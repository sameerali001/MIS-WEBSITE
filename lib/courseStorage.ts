import { prisma } from './prisma';

export interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  imageData: string;
  imageFileName: string;
  brochureData: string;
  brochureFileName: string;
  createdAt: string;
  updatedAt: string;
}

// Fallback in-memory storage for courses
const fallbackCourses: { [key: string]: Course } = {};
let isMongoConnected = true;

// Test connection on startup
async function testConnection() {
  try {
    await prisma.$queryRaw`db.adminCommand({ ping: 1 })`;
    isMongoConnected = true;
  } catch (error) {
    isMongoConnected = false;
    console.warn('⚠️ Using fallback course storage (MongoDB unavailable)');
  }
}

testConnection().catch(() => {
  isMongoConnected = false;
});

export async function getCourses(): Promise<Course[]> {
  try {
    if (isMongoConnected) {
      try {
        const courses = await prisma.course.findMany({
          orderBy: { createdAt: 'desc' }
        });
        return courses.map((course: any) => ({
          ...course,
          createdAt: course.createdAt.toISOString(),
          updatedAt: course.updatedAt.toISOString()
        }));
      } catch (error) {
        isMongoConnected = false;
        console.warn('MongoDB error, switching to fallback');
      }
    }

    // Return fallback data
    return Object.values(fallbackCourses).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export async function getCourseById(id: string): Promise<Course | null> {
  try {
    if (isMongoConnected) {
      try {
        const course = await prisma.course.findUnique({
          where: { id }
        });
        if (!course) return null;
        return {
          ...course,
          createdAt: course.createdAt.toISOString(),
          updatedAt: course.updatedAt.toISOString()
        };
      } catch (error) {
        isMongoConnected = false;
      }
    }

    // Use fallback
    return fallbackCourses[id] || null;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

export async function createCourse(
  course: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Course | null> {
  try {
    if (isMongoConnected) {
      try {
        const newCourse = await prisma.course.create({
          data: {
            name: course.name,
            description: course.description,
            duration: course.duration,
            imageData: course.imageData,
            imageFileName: course.imageFileName,
            brochureData: course.brochureData,
            brochureFileName: course.brochureFileName
          }
        });
        return {
          ...newCourse,
          createdAt: newCourse.createdAt.toISOString(),
          updatedAt: newCourse.updatedAt.toISOString()
        };
      } catch (error) {
        isMongoConnected = false;
      }
    }

    // Use fallback
    const id = Date.now().toString();
    const newCourse: Course = {
      ...course,
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    fallbackCourses[id] = newCourse;
    return newCourse;
  } catch (error) {
    console.error('Error creating course:', error);
    return null;
  }
}

export async function updateCourse(
  id: string,
  updates: Partial<Omit<Course, 'id' | 'createdAt'>>
): Promise<Course | null> {
  try {
    if (isMongoConnected) {
      try {
        const updated = await prisma.course.update({
          where: { id },
          data: {
            name: updates.name,
            description: updates.description,
            duration: updates.duration,
            imageData: updates.imageData,
            imageFileName: updates.imageFileName,
            brochureData: updates.brochureData,
            brochureFileName: updates.brochureFileName
          }
        });
        return {
          ...updated,
          createdAt: updated.createdAt.toISOString(),
          updatedAt: updated.updatedAt.toISOString()
        };
      } catch (error) {
        isMongoConnected = false;
      }
    }

    // Use fallback
    const course = fallbackCourses[id];
    if (!course) return null;

    const updated: Course = {
      ...course,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    fallbackCourses[id] = updated;
    return updated;
  } catch (error) {
    console.error('Error updating course:', error);
    return null;
  }
}

export async function deleteCourse(id: string): Promise<boolean> {
  try {
    if (isMongoConnected) {
      try {
        await prisma.course.delete({
          where: { id }
        });
        return true;
      } catch (error) {
        isMongoConnected = false;
      }
    }

    // Use fallback
    if (fallbackCourses[id]) {
      delete fallbackCourses[id];
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting course:', error);
    return false;
  }
}
