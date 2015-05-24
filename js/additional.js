function usersToList (array) {
  $.each(array, function (i, obj) {
   var name = array[i].first + ' ' + array[i].last;
   var listUser = $('<li class="list-item">').append('<span class="name">'+name+'</span><span class="close-item"> X </span><span class="email">'+array[i].email+'</span>');
  $('body').append(listUser);
  });
}

function deleteFromStorage (emailForDeletion) {
  $.each(localStorage, function (i, obj) {
    if (JSON.parse(localStorage.getItem(i)['emailKey']==emailForDeletion) {
        localStorage.removeItem(i);
    }
  });
}
