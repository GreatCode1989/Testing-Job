

document.addEventListener("DOMContentLoaded", function () {
    var gridItems = document.querySelectorAll(".grid-item");
    var popup = document.getElementById("popup");
  
    gridItems.forEach(function (item) {
      item.addEventListener("click", function () {
        popup.style.display = "block"; // Открываем всплывающее окно
      });
    });
  
    popup.addEventListener("click", function () {
      popup.style.display = "none"; // Закрываем всплывающее окно при клике на него
    });
  });
  