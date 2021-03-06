# Todo App

## Introduction
A simple Todo App built using [ReactJS](https://reactjs.org/docs/getting-started.html). The [Ant Design](https://ant.design/) (A UI component library) was also used in this project. 
See it live in action [here](https://silly-engelbart-95c9db.netlify.app/)

## Getting Started
Clone this repository then run **yarn install** from the root of this repository to automatically install the necessary dependencies, which you can also inspect from the *package.json* file. Then run **yarn start** to start the development server. Your default browser should launch and the app will be loaded automatically. Any changes you make to the code will now be reflected on your locally hosted version of the app.

## Testing
The app performs as expected. In the development version you should get a warning for using **findDomNode** which is now deprecated. This is used by the [button](https://ant.design/components/button/) component implemented by **Ant Desgin**. I found an open [issue](https://github.com/ant-design/ant-design/issues/22493) about this on Ant Desgin's GitHub repository. However this error wouldn't be displayed in the build version of the app.

