import dbConnect, { collectionName } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
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
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const usersCol = await dbConnect(collectionName.users);
        const existingUser = await usersCol.findOne({ email: profile.email });

        if (!existingUser) {
          // If the user does not exist, create a new user
          await usersCol.insertOne({
            email: profile.email,
            userName: profile.name,

            role: "User", // Set a default role or any other fields you need
          });
        }
      }
      return true; // Return true to indicate successful sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email; // Add user email to the token
        token.role = user.role; // Add all user info to the token
        token.name = user.userName;
      }
      return token;
    },
    // session callback to add user info to session
    async session({ session, user, token }) {
      session.email = token.email; // Add all user info to session
      session.role = token.role;
      session.name = token.userName;

      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
