const dashboardOpenModalBtn = document.getElementById('dashboard_open_modal_btn')
const dashboardCloseModalBtn = document.getElementById('dashboard_close_modal_btn')
const parentDashboardMobileModal = document.querySelector('.parent_dashboard_mobile_modal')
const dashboardMobileModal = document.querySelector('.dashboard_mobile_modal')

function toggleMobileModal(){
  dashboardMobileModal.classList.toggle('translate-x-[-100%]')
  parentDashboardMobileModal.classList.toggle('opacity-0')
  parentDashboardMobileModal.classList.toggle('invisible')
}

dashboardOpenModalBtn.addEventListener('click', function(){
  toggleMobileModal();
})
dashboardCloseModalBtn.addEventListener('click', function(){
  toggleMobileModal();
})

parentDashboardMobileModal.addEventListener('click', function(e) {
  if(!dashboardMobileModal.contains(e.target)){
    toggleMobileModal();
  } 
});
