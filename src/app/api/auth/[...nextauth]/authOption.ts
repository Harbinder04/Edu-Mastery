import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@db/src/db.ts";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  user_id: string;
  name: string | null;
  email: string;
  password: string | null;
  image: string | null;
  googleId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Fill required fields properly");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select:{
            user_id: true,
            password: true,
            name: true
          }
        });
        if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }
        return user;
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile?.email }
        });
        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: profile?.email as string,
              name: profile?.name,
              image: profile?.image,
              googleId: profile?.sub,
            },
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user_id = user.user_id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, user }) {
      session.user.user_id = user.user_id;
      session.user.name = user.name;
      session.user.email = user.email;
      session.user.image = user.image;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

export default async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  const params = req.query;
  const cookies = req.cookies; 
  const headers = req.headers;

  // Now you can safely access params, cookies, and headers
  // Example: const someParam = params.nextauth;
  // Example: const allCookies = cookies.getAll();
  // Example: for (const header of headers) { ... }

  return NextAuth(req, res, authOptions);
}
