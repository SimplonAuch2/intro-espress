$('#connect').on('click', function(){
  var login= $('input[name=login]').val();
  console.log(login);
  var password= $('input[name=password]').val();
  console.log(password);

  $.ajax({
    method: "POST",
    url: "/",
    data: { login: login, password: password }
  }).done(function() {
    console.log( "success" );
  }).fail(function() {
    console.log( "error" );
  }).always(function() {
    console.log( "complete" );
  });
});
