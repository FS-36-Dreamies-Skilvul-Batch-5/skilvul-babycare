// Logika Mobile Navbar
const openModalBtn = document.getElementById('open_modal_btn')
const closeModalBtn = document.getElementById('close_modal_btn')
const mobileModal = document.querySelector('.mobile_modal')

openModalBtn.addEventListener('click', function(){
  mobileModal.classList.toggle('translate-y-[100%]')
})
closeModalBtn.addEventListener('click', function(){
  mobileModal.classList.toggle('translate-y-[100%]')
})

// Mendapatkan data user yang login dari Local Storage 
function getLocalStorage(){
  let username = localStorage.getItem('username');
  let password = localStorage.getItem('password');
  let isRememberUser = localStorage.getItem('isRememberUser');

  return {
    username, password, isRememberUser
  }
}

// Variable Conditional Button link antara user Login dan belum Login
const signUpLinks = document.querySelectorAll('.signup_link')
const dashboardLinks = document.querySelectorAll('.dashboard_link')

function buttonLinkIfUserLoggedIn(){
  signUpLinks.forEach((signUpLink) => signUpLink.classList.remove('flex'))
  signUpLinks.forEach((signUpLink) => signUpLink.classList.add('hidden'))
  dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.remove('hidden')) 
  dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.add('flex')) 
}

function buttonLinkIfUserisNotLoggedIn(){
  signUpLinks.forEach((signUpLink) => signUpLink.classList.remove('hidden'))
  signUpLinks.forEach((signUpLink) => signUpLink.classList.add('flex'))
  dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.remove('flex')) 
  dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.add('hidden'))  
}

// Menjalankan serangkaian fungsi disaat window terbuka
const { username, password, isRememberUser } = getLocalStorage();

if(username !== '' && password !== ''){
  buttonLinkIfUserLoggedIn()
} else {
  buttonLinkIfUserisNotLoggedIn()
}
