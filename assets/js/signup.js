function getFormData(){
  let name = document.querySelector('#name_field').value;
  let username = document.querySelector('#username_field').value;
  let email = document.querySelector('#email_field').value;
  let password = document.querySelector('#password_field').value;
  let isAgree = document.querySelector('#agree_status').checked;

  let babyName = document.querySelector('#baby_name_field').value;
  let babyBirth = document.querySelector('#baby_birth_field').value;
  let babyGender = document.querySelector('#baby_gender_select').value;

  return {
    name, username, email, password, babyName, babyBirth, babyGender, isAgree
  }
}

async function createUser(newUser){
  try{
    const response = await fetch('https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newUser)
    })
    const data = await response.json();
    
    if(response.ok){
      return data;
    } else {
      console.log('Bad Response')
    }
  } catch (err){
    console.log(err)
  }
}

const signUpForm = document.getElementById('signup_form');

signUpForm.addEventListener('submit', async function(e){
  e.preventDefault();

  const formData = getFormData();

  // Validasi simple untuk kondisi jika user telah menerima atau belum menerima Ketentuan dan Kebijakan
  if(formData.isAgree){
    // Membuat object new user
    const newUserData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      baby_name: formData.babyName,
      baby_birth: convertDateFormat(formData.babyBirth),
      gender: formData.babyGender
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

//utils
function convertDateFormat(inputDate) {
  const parts = inputDate.split("-");

  if (parts.length === 3) {
    const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return newDate;
  } else {
    return "Format tanggal tidak valid";
  }
}