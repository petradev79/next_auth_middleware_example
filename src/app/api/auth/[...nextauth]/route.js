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
      // profile(profile) {
      //   console.log('profile', profile);
      //   return {
      //     ...profile,
      //     role: profile.role ?? 'user',
      //     id: profile.id.toString(),
      //   };
      // },
      async authorize(credentials) {
        //Check if the user exists.

        await connect();

        const user = await User.findOne({
          email: credentials.email,
        });

        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user.password
        );

        if (credentials?.username === user.username && isPasswordCorrect) {
          // console.log('user from route', user);
          return user;
        } else {
          console.log('Wrong Credentials!');
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
