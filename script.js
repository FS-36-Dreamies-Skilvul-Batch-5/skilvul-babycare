const openModalBtn = document.getElementById('open_modal_btn')
const closeModalBtn = document.getElementById('close_modal_btn')
const mobileModal = document.querySelector('.mobile_modal')

openModalBtn.addEventListener('click', function(){
  mobileModal.classList.remove('translate-y-[100%]')
  mobileModal.classList.add('translate-y-[0]')
})
closeModalBtn.addEventListener('click', function(){
  mobileModal.classList.remove('translate-y-[0]')
  mobileModal.classList.add('translate-y-[100%]')
})
