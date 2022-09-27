# 1. What is node js?

#### Nodejs is an open source,cross platform backend js runtime environment where js code can be executed outside the web browser.
#### nodejs operates on single thread,non-blocking io codes.
#### it is used for easily building fast and scalable network applications.

# 2. what is NPM?

#### NPM stands for node package manager.its the default package manager for js runtime nodejs.
#### npm consists of two parts-1st is CLI(command-line-interface) which is used for publishing and downloading packages.2nd is an online repository which containes the js packages.
#### npm has more than 19lakh packages.

# 3. What are the different modules in Node.js?

* A module is a function or set of functions which we can use in our applications.it is similar to library in js.
* module is used because of its reusability and ability to break code into smaller chunk of pieces.
* there are three different kinds of module in nodejs---
1. in-built or core module
2. local module
3. third-party module

# 4. What is the purpose of the module.exports?

* it is used to export a given file so that other files are allowed to use it.we can export function,data etc with this.
* it promotes modular programming which means creating smaller chunk of modules which can be used and are independent of each other.
* it makes it easy to maintain the code base.

# 5. Difference between default export and named export?

### form a given file,only one default export is possible.when we export a value by default,we dont have to import it by using the same name.
### from a given file,there can be multiple named exports.when we export by name,we have to import it by using the same name.named exports should be within curly braces.
```                 Named export
                export const MyFunction = () => {
                 ... body
                 
                 }
                 export function Myfunction{
                 ...
                 }
                 
              Default export
              
              const MyComponent = () => {}

               export default MyComponent

               // or

              function MyComponent() {}

              export default MyComponent

              // or

            export default function() {}

               // or

           export default () => {}
            view raw 
          
```
# 6. How do you import any module in Node.js?

* To import our own Node JS module. var express = require("express"); To import existing Node JS Module Import Node JS “express” module; var arthmetic = require("express"); Import Node JS “mongoose” module; var mongoose = require("mongoose")
