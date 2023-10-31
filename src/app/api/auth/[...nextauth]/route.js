import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connect();

        if (!credentials) return;

        const user = await User.findOne({
          email: credentials.email,
        });

        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (credentials?.username !== user.username || !isPasswordCorrect) {
          console.log('Wrong Credentials!');
          // throw new Error('Wrong Credentials!');
          return;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = { ...user };
      }
      console.log('route token from jwt', token);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user = token.user;
      console.log('route session from session', token);

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
