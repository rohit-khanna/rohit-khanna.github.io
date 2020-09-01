// Revealing Module Pattern
/**
 * - All members, whether public or private, are defined in the closure.
   - The return object is an object literal with no function definitions. All right hand side expressions are closure variables
   - All references are via the closure variables, not the return object.
 * 
 */

const UserAPIModule = (function() {
  // private members
  var users = ["Rohit"];
  var logMessage = "Request is Processed";

  function logRequest() {
    console.log(logMessage, new Date());
  }
  function privateFetchUsers() {
    // returning a string and not actual object
    return users.join(",");
  }
  function privateAddUsers(userName) {
    logRequest();
    return `New Users Count: ${users.push(userName)}`;
  }

  // public exposed
  return {
    fetch: privateFetchUsers,
    add: privateAddUsers
  };
})();

console.log(UserAPIModule.add("Steven")); // should print 2
console.log(UserAPIModule.fetch()); // returns Rohit,Steven
console.log(UserAPIModule.users); // undefined - not accessible
