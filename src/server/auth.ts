import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { type NextAuthOptions } from "next-auth";
import { env } from "~/env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "./db";
import { type Adapter } from "next-auth/adapters";

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
  ],
  secret: env.NEXTAUTH_SECRET,
};

export default authOptions;
