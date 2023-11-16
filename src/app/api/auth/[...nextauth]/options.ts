import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "Your username ...",
        },
        password: {
          label: "Password: ",
          type: "text",
          placeholder: "Your password ...",
        },
      },
      async authorize(credentials) {
        const users = [
          {
            id: "1",
            name: "John Doe",
            email: "john@doe.com",
            username: "johnDoe",
            password: "password",
          },
          {
            id: "2",
            name: "Jane Doe",
            email: "jane@doe.com",
            username: "janeDoe",
            password: "password",
          },
        ];

        const user = users.find(
          u =>
            u.username === credentials?.username &&
            u.password === credentials?.password,
        );

        return user ? user : null;
      },
    }),
  ],
};
