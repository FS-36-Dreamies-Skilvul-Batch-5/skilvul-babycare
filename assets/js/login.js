function getFormData(){
  let username = document.querySelector('#username_field').value;
  let password = document.querySelector('#password_field').value;
  let rememberMe = document.querySelector('#remember_me').checked;

  return {
    username, password, rememberMe
  }
}

async function getUsers(){
  try{
    const response = await fetch('https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
    const data = await response.json();
  
    if(response.ok){
      return data;
    } else {
      console.log('Bad Response')
    }
  
  } catch (err) {
    console.log(err)
  }
}

function setLocalStorage(userData){
  const { id, name, username, password, baby_name, baby_birth, gender } = userData;

  localStorage.setItem('id', id);
  localStorage.setItem('name', name);
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('baby_name', baby_name);
  localStorage.setItem('baby_birth', baby_birth);
  localStorage.setItem('gender', gender);
}

const loginForm = document.getElementById('login_form');

loginForm.addEventListener('submit', async function(e){
  e.preventDefault()
  
  // Mendapatkan userinput
  const loginData = getFormData();

  // Mendapatkan seluruh user
  const allUser = await getUsers();

  // Variabel pengecekan jika userinput ada dan valid
  const isUserExist = allUser.find((user) => user.username == loginData.username && user.password == loginData.password);

  // Jika true redirect & setLocalStorage jika false tampilkan error
  if(isUserExist){
    location.replace("index.html");
    setLocalStorage(isUserExist);
  } else {
    document.getElementById('error_msg').classList.toggle('hidden');
  }
})
