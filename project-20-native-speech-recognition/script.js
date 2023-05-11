const button = document.querySelector('.subtitle-btn');

button.addEventListener('click', function() {
  if (button.classList.contains('selected')) {
    button.classList.remove('selected');
    button.style.backgroundColor = '#fff';
    button.style.color = 'rgb(5,5,5)';
    button.style.boxShadow = 'none';
  } else {
    button.classList.add('selected');
    button.style.backgroundColor = 'rgb(5,5,5)';
    button.style.color = '#fff';
    button.style.boxShadow = '4px 4px 5px rgba(0, 0, 0, 0.8)';
  }
});





