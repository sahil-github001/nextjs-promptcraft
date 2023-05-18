"use client";

import { SessionProvider } from "next-auth/react";
// check user signed in
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
};

export default Provider;
