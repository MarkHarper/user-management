function usersToList (array) {
  $.each(array, function (i, obj) {
   var name = array[i].firstNameKey + ' ' + array[i].lastNameKey;
   var listUser = $('<li class="list-item">').append('<span class="name">'+name+'</span><span class="close-item"> X </span><span class="email">'+array[i].emailKey+'</span>');
  $('#todo-list').append(listUser);
  });
}

function deleteFromStorage (emailForDeletion) {
  $.each(localStorage, function (i, obj) {
    if (JSON.parse(localStorage.getItem(i)['emailKey']==emailForDeletion) {
        localStorage.removeItem(i);
    }
  });
}

function init () {
  $.each(localStorage, function (i, obj) {
  usersArray.push(JSON.parse(localStorage.getItem(i)));
  });
  usersToList(usersArray);
}

function inputToJSON () {
  $.each(usersArray, function (i, obj) {
    localStorage.setItem(i,JSON.stringify(usersArray[i]));
  });
}

function removeLiElement () {
  $(e.target).closest('li').remove();
}

function userEmailToDelete () {
  var userToDelete = $(e.target).next('.email').text();
  return userToDelete;
}

function removeFromArray (email) {
  $.each(usersArray, function (i, obj) {
    if (obj.emailKey==email) {
      usersArray.splice(i,1);
    }
  });
}

function clearForm () {
  document.querySelector('#firstName').value = '';
  document.querySelector('#lastName').value = '';
  document.querySelector('#email').value = '';
}
