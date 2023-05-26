import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };

/*
The handler defines the NextAuth configuration. It uses the Google provider with the provided client ID and client 
secret obtained from environment variables. The callbacks section contains two callback functions: session and signIn.

    The session callback modifies the session object to include the user ID retrieved from the MongoDB database based 
    on the user's email.
    The signIn callback is triggered when a user signs in. It first connects to the database using connectToDB function.
     Then it checks if the user already exists in the database based on their email. If not, it creates a new user 
     document with the email, username (derived from the profile name), and profile picture. Finally, it returns 
     true to allow the sign-in process to continue.
*/
