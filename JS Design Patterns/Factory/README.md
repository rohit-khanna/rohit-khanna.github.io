# Factory Design Pattern

It is one of the Creational Design Pattern. It provides an alternative method to object creation than `new` keyword.

There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.

**Pattern Name**: Factory

**Description**: A way to delegate the object creation to a factory without losing the say in the way, how the objects are created.

**Problem Statement**: We might need to create object instances dynamically, as per user requests. Or Refrain the consumers to know the exact details of object classes.

**Solution**: Provide a factory to instantiate specific type of classes.

**Implementation**:

**Example**:
![](https://www.c-sharpcorner.com/UploadFile/BlogImages/06152019215721PM/uml.png)

### Command to Run: `node index.js`

### Advantages:

- **Dynamic object creation**: It can be used in cases where the type of the object is decided at runtime.
- **Abstraction**: The user never really has to access the actual object’s constructor.

- **Reusability/Maintenance**: Same factories can be used for similar objects and it allows us to add/remove new object classes easily without changing a lot of code.
