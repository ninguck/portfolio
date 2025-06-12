import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/app/services/email';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const result = await sendContactEmail(data);
        
        if (result.success) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json(result, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to send email' }, 
            { status: 500 }
        );
    }
} 