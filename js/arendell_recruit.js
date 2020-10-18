var submit = document.getElementById('submit');
var popUp =document.getElementById('recruit-popup')

submit.addEventListener('click', function(){
  popUp.classList.add('show');
});

popUp.addEventListener('click', function(){
  popUp.classList.remove('show');
});