window.addEventListener('DOMContentLoaded', function(){
          navID = document.getElementById("show-nav");
          navID.classList.remove('show');
          
          var myScrollFunc = function () {
              var y = window.scrollY;
              console.log(y);
              if (y >= 100) {
                  // navID.className = "topMenu show"
                  navID.classList.add('show');
                  navID.classList.remove('hide');
              } else {
                  // navID.className = "topMenu hide"
                  navID.classList.add('hide');
                  navID.classList.remove('show');
              }
          };
          
          document.addEventListener("scroll", myScrollFunc);
})