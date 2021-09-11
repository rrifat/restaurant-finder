# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run this app locally after downloading or cloning this project got to project folder and run `yarn` to install all dependencies and then run `yarn start`.\
[Live Demo](https://nostalgic-neumann-eceef3.netlify.app)
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##Reasoning Behind Technical Choices
As I have to use React and Redux, Typescript, and Ant Design as per instructions, I don't find it necessary to use many other tools to build this app.

I've used `axios` to make HTTP requests over the `fetch`. The reasons behind this are,
- backward compatibility as a wide range of browser support
- automatic transformation of response to JSON data
- built-in support HTTP interceptor, download progress, etc.

I'm not saying that I'm not achieving these features by fetch. Most of them are possible but not built-in with fetch.

I've not used standard `redux` here. I've used `@reduxjs/toolkit` and `react-redux`. Purpose behind this

- I like it because it simplifies many common use cases. Like store setup, creating a slice of a state, underlying immutable state update by immer.js, and no need to create different action creators.
- It makes it easier to write redux applications by allowing some options to configure global stores, create both actions and reducers more elegantly by abstracting the Redux API as much as possible.
- This is also the redux team's official approach to write redux logic

##Reasoning Behind Architectural Choices
As it is a very simple app and, I try to make it as simple as possible. 
I've divided this app into two main components: Search Bar and Map. 
And wrap those components by a parent component FindRestaurant. 
As react don’t mind on how I put files into the folders, 
I tried to group the folders by feature. 
On my features folder into a specific feature folder I put my component, 
redux slice and css for this specific feature. 
There is a component folder. Here I put some reusable components. 
I can also split into common components and feature based components 
when the project grows. I find this approach pretty flexible to structure my app.

##Trade Offs Might Have Been Made
In this project I could’ve used `react-query` for data fetching, updating and caching. 
As this project has only a couple of http calls, no api for data updating and no need for caching 
at this stage so I don’t add any extra library to solve this purpose. But for any 
medium or large projects with a whole bunch of api calls I use it a lot and, 
it will be my go to library for data fetching, updating and caching till now. 
We can also add this library in this project also if we need. We don’t need too 
many changes to do it. 

And for the map component I’ve used Google map javascript api. For this reason I 
had to use the dom api directly in the map component. I think that shouldn’t be in this way. 
That should be in “React Way”. And there is a popular package as `google-map-react`in 
the market. But I don’t have the confidence to dive into this. As on this package 
details I find it is a component written over a small set of the 
Google map api. So I had to go through the details to find out what are they providing 
and which on do I need. On the other hand I find things very easily from Google map javascript api which I required.

##Things Could've Been Different
If I could’ve spent more time on this project I would've thought about the map component.
As an alternative, I would've tried to write the component in more of a "React Way" and focus more on testing.
I would've added some information on Google map. Like the direction between places.
I might've inspected the design and tried to make some improvements. As nothing is perfect.
Always there might be a better option. So might've tried to found something better.
