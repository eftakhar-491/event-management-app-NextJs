import dbConnect, { collectionName } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const usersCol = await dbConnect(collectionName.users);
        const user = await usersCol.findOne({ email: credentials.email });
        if (!user) {
          return null;
        }
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (passwordsMatch) {
          const { password, ...userWithoutPassword } = user;
          console.log(userWithoutPassword);
          return userWithoutPassword;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email; // Add user ID to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email; // Add user ID to session
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
