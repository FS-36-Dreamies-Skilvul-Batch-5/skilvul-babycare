function authCheck(){
  if (localStorage.getItem("username") == null && localStorage.getItem("password") == null) {
    location.replace("../index.html");
  } 
}

authCheck()