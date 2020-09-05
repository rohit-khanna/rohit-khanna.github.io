# Command Pattern

This is one of the Behavioral Design Pattern.

It encapsulates actions as objects. Command objects allow for loosely coupled systems by separating the objects that issue a request from the objects that actually process the request. These requests are called events and the code that processes the requests are called event handlers.

![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/c/c8/W3sDesign_Command_Design_Pattern_UML.jpg).

**participants**:

- _Client_
- _Receiver_: knows how to carry out the operation associated with the command
- _Command_ : maintains information about the action to be taken
- _Invoker_ : asks to carry out the request

**Pattern Name**: Command

**Description**: A way in which the system objects are segregated as the one's issuing commands and the one's executing commands.

**Example**:

_ReactJS: Redux-thunk_: They have `action`, `thunk`, `dispatch` and `reducer`.

`thunk`(**Invoker**) Issues an `action`(**Command** with some `action.type`) using `dispatch`(_execute()_) which is handled by `reducer`(**Receiver**)

## Command to run : `node index.js`
