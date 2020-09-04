# Singleton Design Pattern

It is one of the Creational Design Pattern .It restricts the instantiation of a class to a single object.

**Pattern Name**: Singleton

**Description**: Allows only one instance of a class to exist in memory during the application's life cycle

**Problem Statement**: One instance should serve the request and should act as single shared resource namespace.

**Solution**: Instantate only if an existing instance is not available

**Implementation**: Can be implemented either using Object Literals or conditional instantiation in IIFE's

**Example**:

1.  <ins>Object Literal Notation</ins>
    Once you create an object literal in JavaScript you've reserved a little piece of memory and no other object will ever be just like that one.

    See: `singletonObjectLiteral.js`

    Run: `node index.js`

    There will be one and only one instance of SIngleton available.  
    For Eg: a config file in JS, or REACTJS.

2.  <ins>Conditional Instantiation</ins> Instance is only created if existing instance is not available.

    See: `singletonClass.js`

    Run : `node index.js`

### Read more:

- [Book by Addyosmani ](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)
- [post at robdodson.me](https://robdodson.me/javascript-design-patterns-singleton/)

## Disadvantages

- Tight coupling in the class-instance
- not possible to mock or patch privates
