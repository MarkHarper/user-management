
//Creates html from user information in usersArray
function usersToList (array) {
  $.each(array, function (i, obj) {
   var name = array[i].firstNameKey + ' ' + array[i].lastNameKey;
   var listUser = $('<li class="list-item">').append('<span class="name">'+name+'</span><span class="close-item"> X </span><span class="email">'+array[i].emailKey+'</span>');
  $('#todo-list').append(listUser);
  });
}

//Deletes selected user from localStorage
function deleteFromStorage (emailForDeletion) {
  $.each(localStorage, function (i, obj) {
    if (JSON.parse(localStorage.getItem(i))['emailKey']==emailForDeletion) {
        localStorage.removeItem(i);
    }
  });
}

//Pulls users from localstorage and builds html
function init () {
  $.each(localStorage, function (i, obj) {
  usersArray.push(JSON.parse(localStorage.getItem(i)));
  });
  usersToList(usersArray);
}

//stores form input in localstorage
function inputToJSON () {
  $.each(usersArray, function (i, obj) {
    localStorage.setItem(i,JSON.stringify(usersArray[i]));
  });
}

//removes html list items
function removeLiElement (event) {
  $(event.target).closest('li').remove();
}

//find the email of the user that must be deleted
function userEmailToDelete (event) {
  var userToDelete = $(event.target).next('.email').text();
  return userToDelete;
}

//Removes correct user from usersArray
function removeFromArray (email) {
  for (var i = 0; i < usersArray.length; i++) {
    if (usersArray[i].emailKey==email) {
      usersArray.splice(i,1);
    }
  }
}

//Clears Ul element to load users from localStorage
function clearUl () {
  $('ul li').remove();
}

//Clears form elements
function clearForm () {
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';
}

//Runs init function unless localstorage is empty
function onPageLoad () {
  console.log(localStorage.key);
  if (localStorage.key==null) {
      return;
    }
  else {
      init();
    }
  }

var usersArray = [];

onPageLoad();

$('form').submit(function(e) {

 e.stopPropagation();
 e.preventDefault();

 var first = $('#firstName').val();
 var last = $('#lastName').val();
 var email = $('#email').val();
 var user = { firstNameKey: first, lastNameKey: last, emailKey: email };

 if (first === "" || last === "" || email === "") {
     return alert("Please fill out all fields.");
 }

 usersArray.push(user);

 inputToJSON();

 clearForm();

 clearUl();

 usersToList(usersArray);

 //For removing users that were created during the current session
 $('.close-item').click(function (e) {

  removeLiElement(e);

  removeFromArray(userEmailToDelete(e));

  deleteFromStorage($(e.target).next('.email').text());
  });
});

//For removing users after a refresh
$('.close-item').click(function (e) {

  removeLiElement(e);

  removeFromArray(userEmailToDelete(e));

  deleteFromStorage($(e.target).next('.email').text());
});
