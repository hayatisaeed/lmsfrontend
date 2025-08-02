import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { authConfig as GET, authConfig as POST };
