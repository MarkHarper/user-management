

var usersArray = []; // must declare outside of the scope of the function below


// add form submissions as hashes to an array
$('form').submit(function(e) {
 e.stopPropagation();
 e.preventDefault();

 var first = $('#firstName').val();
 var last = $('#lastName').val();
 var email = $('#email').val();
 var user = { first, last, email }; // what's happening here?

 usersArray.push(user);
 // console.log(usersArray[1]);

});



// clear form inputs
$('form').submit(function(e) {
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';
});



// display user on page
$('form').submit(function(e) {


});
