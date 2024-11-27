import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const getAllCookies = await cookies();
  const currentUser = getAllCookies.get('use-token')?.value;

  if (currentUser && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/pages/dashboard', request.url));
  };

  if (!currentUser && request.nextUrl.pathname.startsWith('/pages')) {
    return NextResponse.redirect(new URL('/', request.url));
  };

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
