# Design Patterns

Design Patterns are a scheme/guidelines and _not_ a code-base , which solves a particular problem. They have following main benefits:

1. They are proven solutions for a recurring problem.
2. They can be easily reused
3. They provide a common vocabulary , for Devs to communicate effectively

A scheme/set of guidelines, will be considered a Pattern if:

1. It Solves a particular problem.
   - they are not just to capture principles or strategies, but should SOLVE a problem
2. The Solution to the problem can't be obvious
3. The solution has to be proven

## Structure of a Design Pattern

A design pattern should have:

1. a _Pattern name_ and _description_
2. **Context** : the contexts in which the pattern is effective in addressing the user's problem.
3. **Problem Statement** : description of intent of the problem in hand
4. **Solution**: list of steps and procedures that solve the user's problem
5. **Implementation**: A guide to implement the pattern
6. **Illustrations** & **Examples** : visual representation of pattern components(classes) and implementation in minimal form

## Anti-Pattern

If we consider that a pattern represents a best practice, an anti-pattern represents a lesson that has been learned.

Knowledge of anti-patterns is critical for success. Once we are able to recognize such anti-patterns, we're able to refactor our code to negate them so that the overall quality of our solutions improves instantly.

## Design Pattern : Categories

### Creational Design Pattern

Focus on the the way the objects are created. A different way of object creation may lead to added complexity in the project at some later stage.
This Pattern _Controls_ the creation process. Some patterns in this category:

- Constructor
- Factory / Abstract
- Builder
- Prototype
- SIngleton
- **Module**
- **Revealing Module**

### Structural Design Pattern

Focus on the the way the _relationships_ are maintained between different objects.This ensures when one part of the system changes, the other part shouldn't need a corresponding change.
Some patterns in this category:

- Facade
- Decorator
- Adapter
- Proxy
- Bridge
- Composite

### Behavioral Design Patterns

Focus on the way, the different objects communicate/behave with each other. Some patterns in this category:

- Mediator
- Observer
- Visitor
- Iterator
- Chain Of Responsibility
- Command
- Momento
- Strategy
