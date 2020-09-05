# Mediator Design Pattern

In dictionary-A `Mediator` is a neutral party that assists in negotiations or conflict resolution.

It is a behavioral design pattern that allow us to expose a unified interface through which different part of a system may communicate.

![mediator design pattern](https://www.dofactory.com/images/diagrams/javascript/javascript-mediator.jpg)

The **Mediator** pattern provides central authority over a group of objects by encapsulating how these objects interact. This model is useful for scenarios where there is a need to manage complex conditions in which every object is aware of any state change in any other object in the group.

**Pattern Name**: Mediator

**Description**: A way to provide unified interface for interaction between different part of a system.

**Problem Statement**: When direct interactions between many objects increases, coupling between them increases and hence a mediator is used to decouple these interactions by providing a unified interface to facilitate these communications.

**Solution**: Provide a workflow in `mediator` describing how the interactions with different objects are to be performed.

**Implementation**:

**Example**:
A `Chatroom` with some `Participants` who wish to interact with each other.
`Chatroom` act as _Mediator_ here.

### Command to run: `node index.js`

## Disadvantages

- Can introduce a single point of failure for a system,
- Due to multiple Hops instead of direct contact, they could be performance impact.

## Similarity with Event Aggregator Design Pattern (Publish-Subscribe).

- Both the event aggregator and mediator, by design, use a third-party object to facilitate things.

- The event aggregator itself is a third-party to the event publisher and the event subscriber. It acts as a central hub for events to pass through.

- In the case of an event aggregator, the third party object is there only to facilitate the pass-through of events from an unknown number of sources to an unknown number of handlers. All workflow and business logic that needs to be kicked off is put directly into the object that triggers the events and the objects that handle the events.

- In the case of the mediator, though, the business logic and workflow is aggregated into the mediator itself. The mediator decides when an object should have its methods called and attributes updated based on factors that the mediator knows about.
- The individual objects involved in this workflow each know how to perform their own task. But it’s the mediator that tells the objects when to perform the tasks by making decisions at a higher level than the individual objects.

_An event aggregator facilitates a “fire and forget” model of communication. The object triggering the event doesn’t care if there are any subscribers. It just fires the event and moves on. A mediator, though, might use events to make decisions, but it is definitely not “fire and forget”. A mediator pays attention to a known set of input or activities so that it can facilitate and coordinate additional behavior with a known set of actors (objects)._

### When to use what

**_Event Aggregator_**: an event aggregator is used when you either have too many objects to listen to directly, or you have objects that are entirely unrelated.

Example: The way in Which jQuery manages 'click' (for eg) event handlers.

**_Mediator_**: A mediator is best applied when two or more objects have an indirect working relationship, and business logic or workflow needs to dictate the interactions and coordination of these objects.

Example: A wizard interface is a good example of this, as shown with the “orgChart” example, above. There are multiple views that facilitate the entire workflow of the wizard. Rather than tightly coupling the view together by having them reference each other directly, we can decouple them and more explicitly model the workflow between them by introducing a mediator.

## Similarity with Facade Design Pattern

They do both abstract the functionality of existing modules, but there are some subtle differences.

- The Mediator centralizes communication between modules where it's explicitly referenced by these modules. In a sense this is multidirectional.
- The Facade however just defines a simpler interface to a module or system but doesn't add any additional functionality. Other modules in the system aren't directly aware of the concept of a facade and could be considered unidirectional.

**Read More**:

- [Addyosami book](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript)
- [doFactory Mediator pattern](https://www.dofactory.com/javascript/design-patterns/mediator)
