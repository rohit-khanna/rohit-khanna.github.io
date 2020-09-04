# Observer Design Pattern

It is a behavioral design Pattern. The Observers Subscribe to a subject for an event and subject notifies them when that event occurs.

**Pattern Name**: Observer

**Description**: One or more observers `subscribe` to an `event` on `Subject`. Observers can `unsubscribe` too.

**Problem Statement**: An `object` or `observer` should be informed of an `event` whenever certain it occurs. This will remove the need for a sync or polling with the Subject.

**Solution**: Observer subscribes to the `event` of `subject` and Subject `notify` it, once event occured.

**Implementation**:

![](https://www.dofactory.com/images/diagrams/javascript/javascript-observer.jpg)

In NodeJS, the observer pattern is already built into the core and available through EventEmitter class.
![Even Emitter](https://miro.medium.com/max/872/0*9sNEu5C1LWsxixBE.png)

**Example**:

`subject.js`: is the Concrete Suject here. It has an event which triggers every 1 sec and it notifies its subscribers of this event.

Checkboxes- are `observers`. They subscribe to this subject-event when they are `checked`. On subscription , they pass a function reference, that is invoked whenever `subject` notifies of the `event`.

Here `event` is Time Sec Change. All subscribers are notified of this so that they can display this new state onto their UI.

### open `index.html` in browser to run

## Observer vs Publish/Subscribe

The Observer pattern requires that the observer (or object) wishing to receive topic notifications must subscribe this interest to the object firing the event (the subject).

The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application specific events which can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.

![](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/httpatomoreillycomsourceoreillyimages1547803.png)

### Read More:

- [Book by Addyosmani ](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
- [doFactory Observer Pattern](https://www.dofactory.com/javascript/design-patterns/observer)

## Advantages of both

-encourage us to think hard about the relationships between different parts of our application.
these patterns remain one of the best tools for designing decoupled systems

## Disadvantages

- In Publish/Subscribe, by decoupling publishers from subscribers, it can sometimes become difficult to obtain guarantees that particular parts of our applications are functioning as we may expect.
- subscribers are quite ignorant to the existence of each other and are blind to the cost of switching publishers. Due to the dynamic relationship between subscribers and publishers, the update dependency can be difficult to track.
