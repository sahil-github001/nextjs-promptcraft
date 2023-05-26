import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

// Metadata for the page
export const metadata = {
  title: "PromptCraft",
  description: "Discover & Share AI Prompts",
};

// RootLayout component
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
