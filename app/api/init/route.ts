import { NextRequest, NextResponse } from 'next/server';
import { initializeDefaultUser } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await initializeDefaultUser();
    return NextResponse.json({
      success: true,
      message: 'Database initialized. Default admin user created/verified.'
    });
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
}
