


// write code that changes background color of UL to none if it's empty
// OR changes backcolor of UL to 0,0,0,.3 if it's not empty
// if LI exists on page, then $('ul').css = (background, 0,0,0,.3)






var usersArray = []; // must declare outside of the scope of the function below


// add form submissions as hashes to an array
$('form').submit(function(e) {
 e.stopPropagation();
 e.preventDefault();

 var first = $('#firstName').val();
 var last = $('#lastName').val();
 var email = $('#email').val();
 var user = { firstNameKey: first, lastNameKey: last, emailKey: email }; // what's happening here?

 if (first === "" || last === "" || email === "") {
     return alert("Please fill out all fields.");
 }
 usersArray.push(user);
 // console.log(usersArray[1]);

 $('.close-item').click(function (e) {
   var indexOfClick = this;
   usersArray.splice(indexOfClick,1);
 });
});






// display user on page
$('form').submit(function(e) {


  var first = $('#firstName').val();
  var last = $('#lastName').val();
  var email = $('#email').val();

  if (first === "" || last === "" || email === "") {
      return alert("Please fill out all fields.");
  }

  var userName = usersArray[usersArray.length-1].firstNameKey +' '+ usersArray[usersArray.length-1].lastNameKey;
  var userEmail = usersArray[usersArray.length-1].emailKey;

  var listUser = $('<li class="list-item">').append('<span class="name">'+userName+'</span><span class="close-item"> X </span><span class="email">'+userEmail+'</span>');
  $('#todo-list').append(listUser);

  //Removes Li element of user set for deletion (created users)
  $('.close-item').click(function (e) {
    $(e.target).closest('li').remove();
  });

  //Finds email for created users upon clicking delete button
  $('.close-item').click(function (e) {
    var userToDelete = $(e.target).next('.email').text();
  });
  console.log(usersArray);
});




// clear form inputs
$('form').submit(function(e) {
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';
});


//Removes Li element of user set for deletion (hardcoded users)
$('.close-item').click(function (e) {
  $(e.target).closest('li').remove();
});

console.log(usersArray);

//Finds email for hardcoded users upon clicking delete button
$('.close-item').click(function (e) {
  var userToDelete = $(e.target).next('.email').text();
});

/*
<li class="user">
  <span class="name"></span>
  <span class="email"></span>
</li>
*/
