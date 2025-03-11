# Base Project with React

This is a basic project built with **React** and **pnpm**. The project serves as an assessment to practice React and understand how to work with its core concepts and components. It includes reusable components and a clean project structure that can be expanded upon.

## Project Setup

### Install dependencies using pnpm

To install the required dependencies, run:

```bash
pnpm install
```

## Start the Development Server

Once the dependencies are installed, you can start the development server with:

```bash
pnpm start
```

This will run the app at http://localhost:3000.

## Project Structure

The project is structured in the following way:

- **`components/layout/`**: Contains the layout components like the `Header` and the `MainContent`. `MainContent` holds the grid where content is displayed.
- **`components/shared/`**: Contains reusable components that can be used throughout the application, such as buttons, cards, etc.
- **`styles/`**: Contains global styles or CSS files.
- **`assets/`**: Contains images, icons, and other static files used in the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Development Progress

## First Step - Initial Project Setup and Basic Components

- ### Project Structure:
    I began by creating a template with a modular structure to make it easy to scale and maintain. The folder structure is designed with flexibility in mind, separating layout components and reusable ones.
- ### Reusable Components:
    - Created basic reusable components, such as `Button`, `Card`, `Grid`layout.
    - Designed a `Header`component that serves as the top navigation bar for all pages.

## Second Step - Adding Features and Enhancements

- ### Environment Variables:
                                                - Configured `.env` to store the API URL and ensure secure access to backend services.
                                                - Used `import.meta.env.VITE_API_URL` to fetch data from the backend.
- ### Backend Integration:

                                                - Implemented  services to interact with the API:
                                                    - Fetch existing posts.
                                                    - Add a new post
                                                - Frontend Enhancements
                                                    - Added a new form component for creating posts.
                                                    - Updated the Button component to accept props and allow customization.
                                                    - Improved Breadcrumbs component to enhance navigation:
                                                          - Styled it for better readability.
                                                          - Linked it to the homepage and the new form page for improved user experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **pnpm**: Fast and disk space-efficient package manager.
- **React** Router: Library for handling routing in a React app.
- **TypeScript**: Superset of JavaScript for static typing and better development experience.
- **CSS Grid & Flexbox**: For building responsive and flexible layouts.
- **Material UI**: For UI components like buttons, grids, etc. (optional if used).
