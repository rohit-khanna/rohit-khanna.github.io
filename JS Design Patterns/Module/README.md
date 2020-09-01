# Module Design Pattern

It is one of the Creational Design Pattern . Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

_Variables can't technically be declared as being public nor private and so we use function scope to simulate this concept. Within the Module pattern, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone_.

All of the code that runs inside the function lives in a closure, which provides privacy and state throughout the lifetime of our application.

**Pattern Name**: Module

**Description**: A way to provide both private and public encapsulation for classes. It is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object

**Problem Statement**: Shield particular parts of class object from accessing in a global scope and reduce likelihood of name conflicts with other functions defined in additional scripts on the page.

**Solution**: Encapsulate object functions, properties using _closures_ to expose a public API for consumption.

**Implementation**: IIFE (Immediately Invoked Function Expression)- that exposes an object.

**Example**: In the example, the methods `fetch` and `add` are namespaced in their respective modules. And few private methods/properties are not available for consumption, like `logRequest()`,`users`,`books`,`logMessage`.

### Read More: [Module-Pattern-In-Depth, By Ben Cherry](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)

## Disadvantages

- inability to create automated unit tests for private members.
- not possible to mock or patch privates
- The methods which were added later stage in the "returned" object , via `Augmentation- see Above ReadMore Link`, wont be able to access the private members of this namespace.

## Command To Run

`node index.js`
