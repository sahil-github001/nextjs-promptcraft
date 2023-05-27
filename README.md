# PromptCraft


https://github.com/sahil-github001/nextjs-promptcraft/assets/119884239/41710db1-7bf5-4b95-90a6-a9a152339dc8


## Description

PromptCraft is a full-stack web application developed using Next.js, MongoDB, and Tailwind CSS. It provides a platform for users to create and share prompts, With Google authentication, users can easily sign in and access the features of the application.

## Features

- **User Authentication**: Users can sign in to PromptCraft using their Google accounts, thanks to the integration of Google Cloud's authentication service.
- **Prompt Creation**: Once signed in, users can create prompts by entering a prompt text and adding relevant tags.
- **Prompt Feed**: The home page displays a feed of all prompts created by users. Each prompt card includes the prompt text, tags, and an option to copy the prompt to the clipboard.
- **User Profile**: Users can access their profile page, which displays all the prompts they have created. From this page, users can edit or delete their prompts as desired.
- **Search Functionality**: PromptCraft includes a search bar that allows users to search for prompts based on tags or prompt content. Clicking on a specific tag displays related prompts.
- **Responsive Design**: The application is designed to be responsive, ensuring an optimal user experience across various devices and screen sizes.

## Technologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering and provides an efficient development environment.
- **MongoDB**: MongoDB is used as the database to store prompt data and user details.
- **Tailwind CSS**: Tailwind CSS is utilized for styling the application, providing a flexible and customizable CSS framework.
- **NextAuth.js**: NextAuth.js is employed for session management and handling user authentication.

## Getting Started

To run the PromptCraft web application on your local machine, follow these steps:

### Prerequisites

- Node.js installed on your system
- MongoDB database connection

### Installation

1.  Clone the repository from GitHub:

    ```bash
    git clone https://github.com/sahil-github001/nextjs-promptcraft.git

    ```

2.  Navigate to the project directory:

    cd nextjs-promptcraft or <project name>

3.  Install the dependencies:

    npm install

4.  Obtain the necessary credentials:

    Google Client ID and Client Secret:
    Go to the Google Cloud Console.
    Create a new project or select an existing project.
    Enable the necessary APIs: Google+ API and Google Identity.
    Configure the OAuth consent screen and create credentials (OAuth client ID).
    Copy the generated Client ID and Client Secret.

    MongoDB Connection URI:
    Sign in to MongoDB Atlas or set up a MongoDB instance locally.
    Create a new project or select an existing project.
    Configure a cluster, set up a database user, and whitelist your IP address.
    Retrieve the MongoDB connection URI.

    NextAuth.js Secret:
    Generate a secure secret using a tool of your choice (e.g., openssl).
    Run the following command in your terminal to generate a random string:
    openssl rand -base64 32
    Copy the generated random string.

5.  Update the environment variables:

    -Create a .env.local file in the project root directory.
    -Add the following environment variables with the obtained values:

        GOOGLE_ID=your-google-client-id
        GOOGLE_CLIENT_SECRET=your-google-client-secret
        MONGODB_URI=your-mongodb-connection-uri
        NEXTAUTH_URL=http://localhost:3000
        NEXTAUTH_URL_INTERNAL=http://localhost:3000
        NEXTAUTH_SECRET=your-nextauth-secret

    Replace your-google-client-id, your-google-client-secret, your-mongodb-connection-uri, and your-nextauth-secret with the actual values.

6.  Start the development server:

    npm run dev

7.  Open your browser and visit http://localhost:3000 to access the PromptCraft application
