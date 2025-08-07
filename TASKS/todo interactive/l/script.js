document.querySelectorAll('.todo-item').forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('completed');
  });
});