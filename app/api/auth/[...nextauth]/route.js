import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDb } from "@utils/database"; // connect database
import User from "@models/user"; // mongodb model

// console.log({clientId: process.env.GOOGLE_ID,clientSecret: process.env.GOOGLE_CLIENT_SECRET})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
        // To find which user is online
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        
        session.user.id = sessionUser._id.toString();

        return session
    },
    async signIn({ profile }) {
        try {
            // serverless -> lambda -> dynamodb
            await connectToDb();
            // check if user already exits
            const userExist = await User.findOne({
                email: profile.email
            })
            // if not, create a new user
            if(!userExist){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ","").toLowerCase(),
                    image: profile.picture
                })
            }
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST };