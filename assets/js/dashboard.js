const dashboardOpenModalBtn = document.getElementById('dashboard_open_modal_btn')
const dashboardCloseModalBtn = document.getElementById('dashboard_close_modal_btn')
const parentDashboardMobileModal = document.querySelector('.parent_dashboard_mobile_modal')
const dashboardMobileModal = document.querySelector('.dashboard_mobile_modal')

dashboardOpenModalBtn.addEventListener('click', function(){
  dashboardMobileModal.classList.toggle('translate-x-[-100%]')
  parentDashboardMobileModal.classList.toggle('opacity-0')
  parentDashboardMobileModal.classList.toggle('invisible')
})
dashboardCloseModalBtn.addEventListener('click', function(){
  dashboardMobileModal.classList.toggle('translate-x-[-100%]')
  parentDashboardMobileModal.classList.toggle('opacity-0')
  parentDashboardMobileModal.classList.toggle('invisible')
})
