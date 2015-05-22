





var usersArray = []; // must declare outside of the scope of the function below


function init () {
  $.each(localStorage, function (i, obj) {
  usersArray.push(JSON.parse(localStorage.getItem(i)));
  });
}

if (localStorage!=='') {
    init();
}

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
 $.each(usersArray, function (i, obj) {
   localStorage.setItem(i,JSON.stringify(usersArray[i]));
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
    $.each(usersArray, function (i, obj) {
      if (obj.emailKey==userToDelete) {
        usersArray.splice(i,1);
      }
    });
  });
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


//Finds email for hardcoded users upon clicking delete button
$('.close-item').click(function (e) {
  var userToDelete = $(e.target).next('.email').text();
  for (var i = 0; i<usersArray.length; i++) {
    if (userToDelete==usersArray[i].emailKey) {
      usersArray.splice(i,1);
    }
  }
});


/*
<li class="user">
  <span class="name"></span>
  <span class="email"></span>
</li>
*/
