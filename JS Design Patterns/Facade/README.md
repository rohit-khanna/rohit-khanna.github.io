# Facade Design Pattern

It is one of the Structural Design Pattern.

This pattern provides a high level interface to a fairlry larger body of code, hence hiding the true complexity.
Think of it as simplifying the API being presented to other developers, something which almost always improves usability.

Facilitates:

- ease of use,
- often a small size-footprint in implementing the pattern.

**Pattern Name**: Facade

**Description**: Provide a simple interface by hiding complex implementation logic.

**Problem Statement**: A messy or too complex code is difficult to undertand and implement for the consumers of that library.

**Solution**: The intent of the Façade is to provide a high-level interface (properties and methods) that makes a subsystem or toolkit easy to use for the client.

**Implementation**:

**Example**:

![Order Facade Sample](https://miro.medium.com/max/1920/1*nrm8teBV3PNZIiR9gtuSqg.png)

To Apply for a Successful `Mortgage`, the interface is pretty simple- `applyFor()`. Howeever , at backend it may have to deal with `Bank` clarifications, `Credit` Score evaulation and `Background` verification.

### Command to run: `node index.js`
