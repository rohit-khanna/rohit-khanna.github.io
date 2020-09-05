// Mediator Pattern

const Chatroom = require("./Model").Chatroom;
const Participant = require("./Model").Participant;

const chatRoom = new Chatroom();

const john = new Participant("john");
const martha = new Participant("martha");
const alice = new Participant("alice");

chatRoom.register(john);
chatRoom.register(martha);
chatRoom.register(alice);

martha.send("Hello All!"); // Broadcast a message
alice.send("Hi Martha, How are you!", martha);
john.send("Hi Martha!", martha);
john.send("HI Alice!", alice);
