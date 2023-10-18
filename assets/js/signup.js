function getFormData(){
  let username = document.querySelector('#username_field').value;
  let email = document.querySelector('#email_field').value;
  let password = document.querySelector('#password_field').value;
  let isAgree = document.querySelector('#agree_status').checked;

  return {
    username, email, password, isAgree
  }
}

async function createUser(newUser){
  const response = await fetch('https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(newUser)
  })

  const data = await response.json();

  return data;
}

const signUpForm = document.getElementById('signup_form');

signUpForm.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = getFormData();

  // Validasi simple untuk kondisi jika user telah menerima atau belum menerima Ketentuan dan Kebijakan
  if(formData.isAgree){
    // Membuat object new user
    const newUserData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    }

    // Melakukan proses create new user
    const isSuccess = await createUser(newUserData)

    // Jika true redirect
    if(isSuccess){
      location.replace("register-success.html");
    }
  } else {
    document.getElementById('warning_msg').classList.toggle('hidden');
  }
})