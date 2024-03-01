# Welcome to nodejs-corekit!

nodejs-corekit is a comprehensive utility library designed to streamline common development tasks and enhance code efficiency. With a focus on error handling, asynchronous operations, and connection management, nodejs-corekit provides a robust set of tools to alleviate repetitive tasks and promote code reusability. Whether you're dealing with error handling scenarios, managing asynchronous operations, or handling connections to various resources, nodejs-corekit offers a versatile and extensible solution to meet your needs. With future expansions planned to further enhance its capabilities, nodejs-corekit serves as a central hub for developers seeking to optimize their workflow and build more reliable applications

in simple words, NodeJS-CoreKit is a comprehensive utility library designed to streamline common development tasks and enhance code efficiency. With a focus on error handling, asynchronous operations, and connection management, NodeJS-CoreKit provides a robust set of tools to alleviate repetitive tasks and promote code reusability.

# Features

**Error Handling** :  Simplify error handling scenarios with intuitive methods.
**Asynchronous Operations**: Manage asynchronous operations seamlessly for smoother execution.
**Error Middleware** : Error middleware for handling various types of errors, providing customized error messages and status codes.
**Connection Management**: Easily handle connections to mongodb with built-in utilities.
**Unhandled Rejection and Uncaught Exception Handling**: Nodjs-Corekit also includes robust mechanisms for handling unhandled rejections and uncaught exceptions to ensure the stability and reliability of your applications.
**Versatile and Extensible**: Adaptable to diverse development scenarios with room for customization.
**Optimized Workflow**: Enhance productivity and efficiency by reducing development overhead. 
**Continuous Updates**: Stay ahead with ongoing expansions and enhancements to meet evolving needs.

## Usage

Imports Functions

    // Import the required modules  
    const { ErrorHandler, CatchAsyncError, Connection, UnCaughtException, UnHandledException} = require('nodejs-corekit')

CatchAsyncError(async(req,res,next) => {...})

    // Example usage of asynchronous error catching 
    const asyncFunction = CatchAsyncError(async (req, res, next) => { 
	     // Your asynchronous code here 
    });
  
Connection(connectionURL)

    // Example usage of connection management  
    Connection('mongodb://localhost:27017/mydatabase');

ErrorHandler(message,statusCode)

    // Example usage of ErrorHandler : 
    function exampleFunction() { 
	    // Some condition that triggers an error  
	    const errorCondition = true; 
	    if (errorCondition) { 
		    const errorMessage = 'An error occurred'; 
		    const statusCode = 500; 
		    throw new ErrorHandler(errorMessage, statusCode); 
		} else { 
			// No error condition  console.log('No error occurred'); 
		}
	}

UnHandledException() && UnCaughtException()

    const  server =  require("./app");
    const { ErrorHandler} = require('nodejs-corekit');
    let  port =  process.env.PORT;
    
    // uncaughtException handling
    UnCaughtException()
    
    server.listen(port,"localhost",(err)=>{
		if(err){
			throw  new  ErrorHandler("Couldn't listen on port",500);
		}  
		console.log(`Listening on port ${port}`);
	});
	
	// unhandledRejection Error Handling
	UnHandledException();

Error Middleware : app.use(Error);

    // app.js
    const {Connection,Error} = require('nodejs-corekit');
    Connection(process.env.MONGODBURL);
    const  express =  require("express");
    const  app =  new  express();
	
	app.use(...)
	....
	
	// it will show the CastError or Duplicate Key Error
	app.use(Error);
	
	module.exports =  app;
	
## GitHub Repository 
Find the source code and contribute to the development of Nodejs-CoreKit on GitHub: (https://github.com/darshan-balar2400/nodejs-corekit)

## License 
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

## Keywords  
Error Handling 
Asynchronous Operations 
Connection Management (MONGODB)
Middleware Error
Utility Functions 
