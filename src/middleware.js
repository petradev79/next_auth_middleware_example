// export { default } from "next-auth/middleware"
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    // console.log(request.nextUrl.pathname);
    console.log('middleware token', request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith('/dashboard') &&
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

// export const config = { matcher: ['/dashboard'] };
