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

// Logika navbar button
function isUserLoggedIn() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  return username !== null && password !== null;
}

// Variable Conditional Button link antara user Login dan belum Login
const signUpLinks = document.querySelectorAll('.signup_link')
const dashboardLinks = document.querySelectorAll('.dashboard_link')

function updateButtonLinks() {
  if (isUserLoggedIn()) {
    signUpLinks.forEach((signUpLink) => signUpLink.classList.remove('flex'));
    signUpLinks.forEach((signUpLink) => signUpLink.classList.add('hidden'));
    dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.remove('hidden'));
    dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.add('flex'));
  } else {
    signUpLinks.forEach((signUpLink) => signUpLink.classList.remove('hidden'));
    signUpLinks.forEach((signUpLink) => signUpLink.classList.add('flex'));
    dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.remove('flex'));
    dashboardLinks.forEach((dashboardLink) => dashboardLink.classList.add('hidden'));
  }
}

updateButtonLinks();