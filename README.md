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
---
## 07-Click_Events

1. In the Home.js file create a button.
2. We want to react to it when the user clicks on this button, i.e fire a function on button click.
3. So we will create a function inside the Home Component Function.
4. Let us call this function handleClick(), write  some basic functionality for this function
5. On the onClick event of the button call the handleClick function `{handleClick}`.
6. Remember we are passing a reference to the function not calling it. hence we have omitted the () at the end of `{handleClick}`
7. What if we want to pass an argument to the function, to do this we have to wrap the function call inside and anonymous function.
8. For understanding this concept create another button and the handlerFunction that takes an argument.
---
## 08-Using_State

1. What if we want certain variables to change over time or change due to some action.
2. For understanding this, we will clean up our Home.js and delete the handler method with the parameter and also clean up the code inside the handleClick
3. Let us create a variable and inititalize it
	`name="Jasdhir"`
4. Next is we output the name in the template like
	`<p>{name}</p>`
5. So the name is displayed on the web page.
6. What if we want to change the value of the name on click of the button.
7. Lets make changes in the handleClick() and update name to say "Ravi";
8. Now if we reload the page and click on the button the value of name is not changed from 'Jasdhir'  to 'Ravi' in the template.
9. The value of name changes but is not reflected(update) in the template.
10. To observe the change in value of name, use console.log(name) in clickHandle
11. Reload the page and Observe the console.
12. React dosen't watch for the changes to the variable "name"
13. So when the value changes, it doesnot trigger react to re-render the template with the new value.
14. To make this variable reactive, we use a Hook in React and for this we will use a hook called as `useState()`
15. So a Hook in react is a function that does a certain job.Hook in React starts with the word use.
16. The useState hook gives us a way to make a reactive value and also provides us with a way to change that value when ever we want.
17. In order to use the useState hook import it first.
18. Please clean up the variable declaration and clean the code inside the handleClick function.
19. Now write/use the useState Hook
20. Using the useState hook, it will re-render the template every time there is a change in the state / value of the name variable.
21. Let us practice by using some another variable let say for example age  
---
## 10-Outputting_Lists

1. Let us create some dummy data for our blog we will use the useState Hook.
2. Clean up the code for Home Component.
3. Let us create an array of posts for our blog.
4. Now we will output this data in our template.
5. To display the data we will iterate over the blogs array (Data) using the map() function
6. Each root element that we return in the list must have a key property.
7. React uses this key property to keep track of each item in the DOM as it outputs it, so if data changes at any point if we remove or add new items to the array, React can keep track of those items, so you always need to add a key attribute to each item that we output other wise React cannot distinguish between list item in the DOM, so this is normally an id property for each item in the array. and the key must be unique.
8. Also add some CSS for the list in the index.css. (Can copy the same from the repo)
---
## 11-Props

1. If we want to display some of the information in different - different component, essesntially we would be duplicating the code at multiple places. For example : our current code while displaying the blog list on Home.js
2. so we can write the code at one place, make it like a component and re use it again and again.
3. Let us make a BlogList component for our Blog.(BlogList.js)
4. Cut the logic to display the blog list from the Home.js component and place it on BlogList component.
5. List the BlogList component inside the Home Component
6. The application will give an error as blogs not defined, because in the BlogList component we are trying to use map() on the blog, so we are using data which is not in the BlogList component.
7. The solution is to use props, whereby we pass this data from the Home Component to BlogList component.
8. Props are a way to pass data from a parent component to a child component.
9. So the way is to create a property on the `<BlogList/> Tag`.So that it can be passed to the BlogList component.
10. The component can receive the property as the parameter to the Component function.
11. And we can extract the data from it by using the DOT operator like `props.`
12. You will observe the error is not gone and you can see the list of the blogs.
13. We can pass multiple props in a tag, for example we can pass the title
14. Instead of passing `props` and extracting the values using the DOT operator, we can use Destructuring and get the data.
---
## 12-Reusing_Components

---
## 13-Functions_As_Props

1. Now we want the allow the user to delete a blog by clicking on a button or some other user action.
2. So let us create a button for every blog that is listed in the BlogList.
3. Associate a onClick event handle with the button
4. Define the handle function for the button in the Home component in the Home.js file
and pass the handleDelete function as a prop.
---
## 14-useEffect_Hook

1. the useEffect Hook runs a function at every render of the component
2. The useEffect can be used to run code for every render.
3. In order to use the useEffect we need to import it first. In the Home component import the useState Hook.
4. useEffect hook is tipically used when we need to fetch data from an API, perform authentication etc, and these things are known as side effect in react.
5. Open your browser and open the developer tool in the browser.
6. reload the blog application, you can see the console output written inside useEffect.
7. if we change some data, let's say delete a blog entry the page will be re-rendered and the useEffect code will execute again.
8. Avoid updating the state inside the useEffect as it will end up in a continuous loop.
---
## 15-useEffect_Dependencies

1. The useEffect hook fires after every render. But you always want to that to happen. maybe we want a single render or a certain renders.
2. To do that we can use something called a dependency array and this is basically an array that we can pass into this useEffect hook as a second argument.
3. Modify the code in the Home component (Home.js)
4. Open the developer tool in the browser to check.
5. You will observe that the useEffect ran just once. Not on every re-render.
6. Now if we want to run the useEffect more than once. that is for a stateChange or some thing.
7. So let as add another useState hook and update a variable.
8. Add a button below the `<BlogList/> Tag` to call the setName on button click.
9. Open the developer tools in the browser and see useEffect did execute . also click on the change name button to see the useEffect hook executed again.
---
## 16-Using_JSON_Server

1.  useEffect is a good place to fetch data where the component first renders initially, and then we can use that data in our application.
2. we will be using json-server to make a fake rest api using a json file which will be the source for our data for the blog.
3. Create a folder `data`(can name this anything you want) in the root of the react project and create a json file , can use any file name, I will be using myBlog.json and enter some dummy data.
4. once done we need to start the json-server and watch the json file on some port , so we get the end point. Use the following command
` npx json-server -w ./data/myblog.json -p 3030`
-w is watch 
- p is port 
by default json-server listens on port 3000, to use other port use the -p switch.
5. Once the json-server starts open the browser and point it to 
	` http://localhost:3030/blogs`

---
## 17-Fetching_Data_with_useEffect

1.  We would be fetching the data using the fetch API from our json-server in useEffect hook
2. In our Home component clean up the initinal setState where we have initialized the hardcoded blog data and set it to null.
3. let us make the fetch request in the useEffect hook, pass the end point in the fetch call. Log the data to the console
4. Comment out the `<BlogList/> tag` to avoid any errors.
5. Check the console and the data from the json file using the json-server will be seen in the console.
6. once the data is visible on console , comment that line and call the setBlogs , useState method and pass the data as a parameter.
7. Also uncomment the `<BlogList/> Tag`, there might still be errors on the page. `Cannot read properties of null`
8. It takes a fraction of second to fetch and load the data from the json-server and the data is still null hence the error. and we are using thr map () method on null.
9. so we will eventually get the data , but untill we get the data , we need to combat that error.
10. We really don't want to output the `<BlogList/>` until we have a value for blogs, so what we could do is do a little dynamic check here
11. Also delete the handleDelete method for the time being. 
12. Also in the BlogList component delete the button for delete and also the handleDelete props.
---
## 18-Conditional_Loading_Message

1. At times the data from server takes time to load in such condition we should display the loading messages
2. we will create another piece of state for updating the loading state in the Home component
3. All another conditional rendering template above the `<BlogList/>` Tag to tell the state of the data loading or not.
4. Also update the isLoading value using the setIsPending method in the fetch call.
5. To simulate the loading message behaviour we will wrap the fetch call in a setTimeOut method.
---
## 19-Handling_Fetch_Errors

1. To handle the errors add a catch block in the fetch call.
2. we have to handle another condition as to when the server is not sending any data but is still sending responses, so we need to check that response object when we get it back , so check for the response to be OK. if not throw an error
3. Now we are catching the errors, so let us store the error in some kinde of state so that we can output it to the browser, so create a state for error, with a initial value of null.
4. In the catch block setError with the error message and using conditional rendering render the error message on the browser and also update the isPending state to false.
---
## 20-Custom_Hook

1. If we want to use the already created and developed code for fetching data with loading state and error state, we would simply be duplicating the code.
2. It would be good if we can make use of this code again in different components to make it bit more reusable.
3. One solution would be take this code and put it in own js file and then we just import that into the other components to use.
4. Another approach would be to create a custom hook with the specific ability to do specific tasks.
5. To make a custom hook create a new file, call it as useFetch.js 
6. Inside this file we will place all of the functionality to fetch the data exactly as we did in the Home component,
7. Create a function inside useFetch, we can call it useFetch, custom hooks in react start with "use" word.
8. Write the entire logic to fetch the data and maintain the state for loading and error in the created custom hook, useFetch.
9. Once we have moved all the code to useFetch hook, tweak the code a bit more, insted of using blogs , let us make it more generic by renaming them to data and setData respectively.
10. The useFetch hook that we have created return an object and place 3 values in that object , ` return { data, isPending, error };`
11. Also we can pas the url in the useFetch hook, instead of hardcoding it.
12. Also the url will be a dependency to useEffect, this means that whenever, we change the url the useEffect will run and make the fetch call.
13. Now import and use the useFetch() hook inside the Home component.
---
21-React_Router

1. Now is the time that we will start navigating to the other parts of our application.
2. To achieve this in React we will use React Router
3. To get going with the routing in react, we should first install the react router package, because it is not a part of core react library.
4. Open a new terminal and type the following command 
	`npm install react-router-dom`
5. Once we are done with installing the react-router-dom , its time to set up the routing
6. Open the root component i.e. App.js and import the following and define the routes
7. We need to surround our entire application with the router, so surround the div component in the return with the `<Router>` Tag.
8. The next step is to layout our page in terms of components, i.e. where we want our page content to go whe nwe go to different pages. 
9. So we use `<Switch>` Tag for this, the `<Switch>` components makes sure that only one route shows at any one time.
10. Now we will set up individual route inside the `<Switch>` component, to create a route for each page we have using the `<Route>` component.
11. so lets do the Route for our home page.
<br/>
<b>Important Note</b><br/>
a. From react-router-dom version 6 , the `<Switch>` is not longer used, instead we use `<Routes>`
b. Unlike the `<Switch>` API in v5, all `<Route path>` and `<Link to>` values under v6's `<Routes>` element are automatically relative to the parent route that rendered them. This makes it a lot easier to think about your React Router app as lots of small apps that are just stitched together at different "mount" points.
c. In React Router v6 we switched from using v5's `<Route component>` and `<Route render>` APIs to `<Route element>`. 

---

## 23-Router_Links

1. When we click on the Home and the New Blog , nothing happens, so let as add that feature.
2. React uses the `<Link>` Tag to navigate from one component to another.
3. Open the Navbar component and modifiy the anchor tags to work with the Link Tag.
---
## 25-Route_Parameters

1. Some times we need to pass dynamic values as part of a route, for example a blog details page
2. In our React app we should be able to use our Route Parameters and access those route parameters from our components.
3. we start with creating a BlogDetails component, this component will display the details of the blog post when user visits a particular blog post. 
4. Let us create a route for this component, so open the App.js and create the route.
5. Lets go back to BlogDetails component and try to get the dynamic blog id that is passed for a blog, for this we are going to use the useParam hook from reack-route-dom
6. On the Home component, we need to attach a link to each blog , so as when we click on the blog item, it will take us to to BlogDetails page and display it.
7. Finally add some css styles to the blog item in the BlogList component.
---
## 26-Reusing_Custom_Hooks

1. Inside the BlogDetails Page we can make the fetch request and get the details of the blog post from our API.
2. For this we would be reusing out useFetch hook created earlier.
3. Our custom hook useFetch returns 3 data : data,isPending,error - 
4. Inside the BlogDetails page use the useFetch hook to get the data for a individual blog post.
5. Once the changes are made, click on a Blog Post and you will be taken to the BlogDetails page for that post.
6. Also add some style for the BlogDetails page in index.css
---
## 27-React_Forms

1. We need a form , so that the user can type in a new blog post and make a call to fetch to save the post.
2. So we need to discuss about form fields and controlled inputs, controlled inputs are basically a way in react of setting up input fields in forms so that we can track their values. For Example a user can type into a input field and we can store that value of what they type in some kind of state and we can also make it so that if the state changes that in turn updates the value tat we see in the input field so we're always keeping the input field and our state in sync with each other.
3. So let us create a form in the Create component Create.js to create a form.
4. Also add some styles for the form
---
## 28-Submit_Events

1. So we have created the form now we want to submit the form and do something with the data
2. when a button is submitted inside a form, it fires a submit event on the form itself, so we can listen for that submit event and react to it .
3. Add a onSubmit event to the form and also add the handler function, i.e. handleSubmit.
---
## 30-Programmatic_Redirects

1. Once we submit the form and the data is added using the fetch API , we should redirect the user back to the home page.
2. For this we are going to use another hook, useNavigate  in the Create.js
---


