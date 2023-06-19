# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---
## Main Branch : This is the starter commit, we can use this branch as the base for creating the app.

### Lesson 2 - Create React App
1. To create a react app, use the create-react-app tool.
	use the following command : ` npx create-react-app `
2. Open VS code and navigate to the folder you want to create your react app in.
3. Open the terminal and type the command to create a react app followed by the name of the app.

` npx create-react-app my-blog`

4. Once the project is created navigate to project directory
5. next step is to execute the app by launching the dev server
	use the following command in the terminal to launch the app in dev server
		`npm run start`

---
## 03-Components and Templates
1. Components are the building blocks of any React application
2. A page for a react app might be built using multiple components.
3. Each component is a self contained section oc content.
	For example :- a navbar 
4. In React, components contain their own Logic and Template, i.e. the html structure and javascript logic.
5. In the base application we have only one component which is the `<App/>` component in index.js
6. The `<App/>` component is known as the root component, please open the App.js to view.
7. When we open the App.js we basically see a function App() and that returns what looks like as some HTML code.
*NOTE:  The function starts with a capital letter.
8. The contents inside the App() function looks like HTML but it is not, infact it is JSX.
9. JSX allows us to create html style templates and components and in the back ground a transpiler called babel converts this jsx template into html when we save the file and it renders that html.
10. One big difference between JSX and HTML is the way we add classes. In HTML we use class where as in JSX we use className attribute. 
11. In older version of react we need to import react in top of every file, now we do not require them.From version 17 onwards we do not need the import.
12. Let us do some clean up, so open the App.js and delete what is inside the App() function in the div tag.
13. Let the return statement be there, and inside the return with the div tag.
14. Inside the div tag create another div tag with h1 tag.
15. Delete the import for logo at the top.
16. Save the file and see the output on the browser
17. At the end of the file there is an export statement, we always export our components so as that we can use it in other files.

---
## 04-Dynamic_Values_In_Template
1. We can output dynamic values in the JSX template.
2. Create a variable inside the App() function. 
3. Inside the h1 tag in the JSX template use `{title}` to display the dynamic value.
4. We can oupput numbers,string, arrays in `{}` but boolenas and Objects, we can't.
5. We can also write the dynamic values and javascript statement inside the curly brackets that returns a valid value , either a string , a number or an array
For Example : `{10}` -- `{"Hello}`
---
## 05-Multiple_Components

1. So far we have only one component App component and this is known as the root component of the application.
2. In react components are structured in a way that it makes a component tree. 
3. The App component sits on top and if we were to make more components we nest them inside the root component.
4. To make a new component we need a new file , make it inside the src folder, name the file as Navbar.js.
5. Remember a component is a function which returns JSX template and that function is exported.
Extras : Install a package Simple React Snippets 
6. write code the create a functional component , we are creating a Navbar component
7. Once the code is complete for Navbar, import the component to App.js, and nest in the App component.
8. Nest the Navbar above the content div.
9. Check the application on the browser.
10. Create a new component for Home page. Create a file Home.js
11. Import the Home Component inside the App.js and nest it inside the content div
---
## 06-Adding_Styles

1. Now let us add some css to our components.
2. In the root component (App.js) file there is already a import for App.css
3. This App.css is also applicable on the other components which are displayed on the App component.
4. For large project we can use CSS modules in React by using <ComponentName>.module.css
5. Since we are making a small project we will put all our CSS into 1 single css file and that file would be index.css, that is the global css and would be applicable to all components.
6. the index.css file is imported in index.js file 
7. Delete the import for App.css from the App.js( you can also delete the App.css file)
8. Since we are going to use index.css, delete all the code from index.css first and then create our styling rules.
* Note : You can copy the styles from the repo or create your own styles.
9. Also we will add some inline styling in the Navbar.js