const openModalBtn = document.getElementById('open_modal_btn')
const closeModalBtn = document.getElementById('close_modal_btn')
const mobileModal = document.querySelector('.mobile_modal')

openModalBtn.addEventListener('click', function(){
  mobileModal.classList.toggle('translate-y-[100%]')
})
closeModalBtn.addEventListener('click', function(){
  mobileModal.classList.toggle('translate-y-[100%]')
})
