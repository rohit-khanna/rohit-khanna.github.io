const Chatroom = function () {
  var participants = {};

  function register(participant) {
    participants[participant.name] = participant;
    participant.chatroomInstance = this;
    console.log(`${participant.name} Joined the chat!`);
  }

  function send(message, from, to) {
    if (to) {
      to.receive(message, from);
    } else {
      // broadcast
      console.log("~~~ BROADCAST start ~~");
      Object.keys(participants).forEach(function (name) {
        participants[name].receive(message, from);
      });
      console.log("~~~ BROADCAST end ~~");
    }
  }

  return {
    register,
    send,
  };
};

const Participant = function (name) {
  this.name = name;
  this.chatroomInstance = null;
};
Participant.prototype.send = function (message, to) {
  this.chatroomInstance.send(message, this, to);
};

Participant.prototype.receive = function (message, from) {
  console.log(`${this.name} Received ${message} from ${from.name}`);
};

module.exports = { Chatroom, Participant };
