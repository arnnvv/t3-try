import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { type NextAuthOptions } from "next-auth";

const getCredentials: () => {
  googleClientId: string;
  googleClientSecret: string;
  githubClientId: string;
  githubClientSecret: string;
} = (): {
  googleClientId: string;
  googleClientSecret: string;
  githubClientId: string;
  githubClientSecret: string;
} => {
  const googleClientId: string | undefined = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret: string | undefined =
    process.env.GOOGLE_CLIENT_SECRET;

  const githubClientId: string | undefined = process.env.GITHUB_CLIENT_ID;
  const githubClientSecret: string | undefined =
    process.env.GITHUB_CLIENT_SECRET;

  if (!googleClientId || googleClientId.length === 0) {
    throw new Error("GOOGLE_CLIENT_ID is not set");
  }

  if (!googleClientSecret || googleClientSecret.length === 0) {
    throw new Error("GOOGLE_CLIENT_SECRET is not set");
  }

  if (!githubClientId || githubClientId.length === 0) {
    throw new Error("GITHUB_CLIENT_ID is not set");
  }

  if (!githubClientSecret || githubClientSecret.length === 0) {
    throw new Error("GITHUB_CLIENT_SECRET is not set");
  }

  return {
    googleClientId,
    googleClientSecret,
    githubClientId,
    githubClientSecret,
  };
};

const authOptions: NextAuthOptions = {
  providers: [
    /*CredentialsProvider({
      name: "Credentials",
      credentials: {
        number: {
          label: "Phone No",
          type: "text",
          placeholder: "1234567890",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "**********",
          required: true,
        },
      },
      async authorize(credentials) {
        if (!validate(credentials)) return null;
        //OTP validation
        const hash = await bcrypt.hash(credentials?.password, 10);
        const user = await db.user.findFirst({
          where: {
            number: credentials?.number,
          },
        });
        if (user) {
          const passwordValidate = await bcrypt.compare(
            credentials.password,
            user.password,
          );
          if (passwordValidate) {
            return {
              id: user.id.toString(),
              name: user.name,
              email: user.email,
            };
          }
          return null;
        }
        try {
          const user = await db.user.create({
            data: {
              number: credentials.number,
              password: hash,
              Balances: {
                create: {
                  amount: 0,
                  locked: 0,
                },
              },
            },
            include: {
              Balances: true,
            },
          });

          console.log(`User created: ${user}`);
          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (error) {
          console.error(`Error in validation: ${error}`);
        }
        return null;
      },
    }),
    */
    GoogleProvider({
      clientId: getCredentials().googleClientId,
      clientSecret: getCredentials().googleClientSecret,
    }),
    GithubProvider({
      clientId: getCredentials().githubClientId,
      clientSecret: getCredentials().googleClientSecret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
