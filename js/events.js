//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(i) {
    i.addClass("tasty");

  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which === 47) {
      alert('You have pressed a G');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();

});
