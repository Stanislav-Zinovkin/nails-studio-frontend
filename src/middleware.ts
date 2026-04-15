import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const authHeader = request.headers.get('authorization');

        if(!authHeader) {
            return new NextResponse('Authentication required' , {
                status: 401,
                headers: { 'WWW-Authenticate' : 'Basic realm="Admin Area"'},
            });
        }

        const auth = authHeader.split(' ')[1];
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

        if (pwd !== process.env.ADMIN_PASSWORD) {
            return new NextResponse('Invalid password', {
                status: 401,
                headers: {'WWW-Authenticate' : 'Basic realm="Admin Area"'}
            });
        }
    }

    return NextResponse.next();
}
export const config = {
    matcher: '/admin/:path*',
}