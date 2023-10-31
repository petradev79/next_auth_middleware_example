import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith('/dashboard') &&
      request.nextauth.token?.user._doc.role !== 'admin'
    ) {
      return NextResponse.rewrite(new URL('/denied', request.url));
    }

    if (
      request.nextUrl.pathname.startsWith('/register') &&
      request.nextauth.token?.user._doc.role !== 'admin'
    ) {
      return NextResponse.rewrite(new URL('/denied', request.url));
    }

    if (
      request.nextUrl.pathname.startsWith('/contact') &&
      request.nextauth.token?.user._doc.role !== 'admin' &&
      request.nextauth.token?.user._doc.role !== 'manager'
    ) {
      return NextResponse.rewrite(new URL('/denied', request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
