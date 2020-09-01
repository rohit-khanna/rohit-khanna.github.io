# Revealing Module Design Pattern

It is one of the Creational Design Pattern . Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

**Christian Heilmann** - Proposed a slightly imprived pattern over existing _Module Pattern_

## Changes w.r.t Module Pattern

- All members, whether public or private, are defined in the closure.

- The return object is an object literal with no function definitions. All right hand side expressions are closure variables

- All references are via the closure variables, not the return object.

**Example**: Amending the same example (as used in `Module/index.js`), with changes requested in Revealing Module Pattern.

- Better readability of Public Exposed Object Literal
