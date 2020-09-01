// Module Design Pattern

// Here Only the relevant functions are exposed for consumption
// some private functions are doin there job, which might not be concerned / governed by End User

const UserAPIModule = (function() {
  // private members
  var users = ["Rohit"];
  var logMessage = "Request is Processed";

  function logRequest() {
    console.log(logMessage, new Date());
  }
  // public exposed
  return {
    fetch: function() {
      // returning a string and not actual object
      return users.join(",");
    },
    add: function(userName) {
      logRequest();
      return `New Users Count: ${users.push(userName)}`;
    }
  };
})();

const BookAPIModule = (function() {
  // private members
  var books = ["Harry Potter", "Alice In Wonderland"];
  var logMessage = "Request is Processed";

  function logRequest() {
    console.log(logMessage, new Date());
  }
  // public exposed
  return {
    fetch: function() {
      return books.join(",");
    },
    add: function(bookName) {
      logRequest();
      return ` New Book Count: ${books.sort().push(bookName)}`;
    }
  };
})();

console.log(UserAPIModule.add("Steven")); // should print 2
console.log(BookAPIModule.add("100 days")); // should print 3
console.log(UserAPIModule.fetch()); // returns Rohit,Steven
console.log(BookAPIModule.fetch()); // returns Alice In Wonderland,Harry Potter,100 days

console.log(UserAPIModule.users); // undefined - not accessible
console.log(BookAPIModule.books); // undefined - not accessible
