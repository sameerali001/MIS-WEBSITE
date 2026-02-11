import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } from '@/lib/courseStorage';

function authenticateRequest(request: NextRequest): boolean {
  const token = request.cookies.get('authToken')?.value;
  if (!token) return false;
  
  const verified = verifyToken(token);
  return verified !== null;
}

// Cache courses for 10 seconds
let coursesCache: any = null;
let coursesCacheTime = 0;

export async function GET(request: NextRequest) {
  try {
    if (!authenticateRequest(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
      const course = await getCourseById(id);
      if (!course) {
        return NextResponse.json(
          { success: false, error: 'Course not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: course });
    }

    // Use cache if still valid
    const now = Date.now();
    if (coursesCache && (now - coursesCacheTime) < 10000) {
      return NextResponse.json({ success: true, data: coursesCache });
    }

    const courses = await getCourses();
    coursesCache = courses;
    coursesCacheTime = now;
    
    return NextResponse.json({ success: true, data: courses });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!authenticateRequest(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { name, description, duration, brochureData, brochureFileName } = await request.json();

    if (!name || !description) {
      return NextResponse.json(
        { success: false, error: 'Name and description are required' },
        { status: 400 }
      );
    }

    const course = await createCourse({
      name,
      description,
      duration: duration || '3 months',
      imageData: '' as any,
      imageFileName: '',
      brochureData: brochureData || '',
      brochureFileName: brochureFileName || 'brochure.pdf'
    });

    // Invalidate cache
    coursesCache = null;

    return NextResponse.json({ success: true, data: course }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    if (!authenticateRequest(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Course ID is required' },
        { status: 400 }
      );
    }

    const updates = await request.json();
    const course = await updateCourse(id, updates);

    if (!course) {
      return NextResponse.json(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    // Invalidate cache
    coursesCache = null;

    return NextResponse.json({ success: true, data: course });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!authenticateRequest(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Course ID is required' },
        { status: 400 }
      );
    }

    const deleted = await deleteCourse(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    // Invalidate cache
    coursesCache = null;

    return NextResponse.json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
