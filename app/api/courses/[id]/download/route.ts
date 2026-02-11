import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getCourseById } from '@/lib/courseStorage';

function authenticateRequest(request: NextRequest): boolean {
  const token = request.cookies.get('authToken')?.value;
  if (!token) return false;
  
  const verified = verifyToken(token);
  return verified !== null;
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!authenticateRequest(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    const courseData = await getCourseById(id);

    if (!courseData) {
      return NextResponse.json(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    // Create PDF response
    if (courseData.brochureData) {
      const buffer = Buffer.from(courseData.brochureData, 'base64');
      const response = new NextResponse(buffer);
      response.headers.set('Content-Type', 'application/pdf');
      response.headers.set('Content-Disposition', `attachment; filename="${courseData.brochureFileName}"`);
      return response;
    }

    return NextResponse.json(
      { success: false, error: 'No brochure available' },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
