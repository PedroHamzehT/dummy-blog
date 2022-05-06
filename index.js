document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.add-product').forEach(function(element) {
    element.addEventListener('click', function(e) {
      var currentTotal = document.querySelector('#total').innerText;
      var newTotal = (parseInt(currentTotal) || 0) + parseInt(e.target.value);
  
      document.querySelector('#total').innerText = newTotal;
    });
  });
});
