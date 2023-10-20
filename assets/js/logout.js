const logoutBtn = document.querySelectorAll('.logout_btn');

logoutBtn.forEach((btn) => (
  btn.addEventListener('click', function(){
    // Delete semua data yang ada di local storage
    localStorage.clear()
  
    // Check Auth
    if (localStorage.getItem("username") == null && localStorage.getItem("password") == null) {
      location.replace("../index.html");
    } 
  })
))