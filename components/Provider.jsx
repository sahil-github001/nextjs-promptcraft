"use client";

import { SessionProvider } from "next-auth/react";

// Provider component for session management
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;

/*
    Import the necessary dependencies:
        The SessionProvider component is imported from the "next-auth/react" module.

    Define the Provider component:
        The Provider component is a functional component that takes two props: children and session.
        The children prop represents the child components wrapped by the Provider.
        The session prop represents the session object provided by NextAuth.js.

    Wrap child components with SessionProvider:
        The SessionProvider component is used to wrap the children components and provides session management functionality.
        The session prop is passed to the SessionProvider component to initialize the session.

    Export the Provider component:
        The Provider component is exported as the default export, allowing it to be imported and used in other parts of the code.
*/
