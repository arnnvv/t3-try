import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {
  type Session,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import { env } from "~/env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "./db";
import { type Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "kaj@kjd.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize() {
        return null;
      },
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (): Promise<Session | null> =>
  getServerSession(authOptions);

export default authOptions;
