// Transition to Angular:

// DONE
// ----------------------------------------------

// -- Load in angular in layout.ejs
// Create an angular controller in javascript/controllers/main.javascript
// Update the index.ejs view or layout.ejs views to have ng-app etc. all set up to use angular
// AND of course -- don't forget! inject controller and service into angular module in master.js
// And then ... should you create a service? presumably


// OUTSTANDING
// ----------------------------------------------

// Update the index.ejs view to use ng-bind and ng-model (I think) to accept input and then mirror that in cell phone view
// Rather than doing a form submit with action, you'll use an ng-click on the submit button to run a function in your controller
// Still need to understand how your routes will change as a result ... does the controller than just hit the same route...
//     or do you actually have to change something in the route?
// Will update routes to have the new routes you want ... /users , etc.
// Will probably also want to create pages where you can view all the users, edit, & delete them so you can test out and play with full CRUD functionality

angular.module('melonApp', ['melonController', 'userService']);
