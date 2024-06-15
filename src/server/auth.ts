import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { type NextAuthOptions } from "next-auth";
import { env } from "~/env";

const authOptions: NextAuthOptions = {
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
