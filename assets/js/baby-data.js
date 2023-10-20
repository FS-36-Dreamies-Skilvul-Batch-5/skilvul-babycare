async function getIdFromUsernameLocalStorage(){
  const usernameFromLS = localStorage.getItem('username')

  try{
    const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
  
    const data = await response.json();
    const userId = data.find((user) => user.username == usernameFromLS)

    return userId.id;
  } catch (err){
    console.log(err);
  }
}

async function getBabyDataFromUserId(userId){
  try{
    const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
  
    const data = await response.json();
  
    return data;
  } catch (err){
    console.log(err);
  }
}

const fetchInfoElement = document.getElementById('fetch_info');
fetchInfoElement.classList.toggle('hidden');

async function loadBabyData(){
  const userId = await getIdFromUsernameLocalStorage();
  const babyDataListElement = document.getElementById('baby_data_list');

  try {
    // Fetch data
    const babyDatas = await getBabyDataFromUserId(userId);

    if(babyDatas.length > 0){
      fetchInfoElement.classList.toggle('hidden');
      // Loop data
      babyDatas.forEach((data, index) => (
        babyDataListElement.innerHTML += `
          <tr class="border-b border-[#D1D9E2]">
            <td class="text-[#898989] text-center py-3.5">${index + 1}</td>
            <td class="text-[#898989] text-center py-3.5">${convertHumanReadDateFormat(data.growth_date)}</td>
            <td class="text-[#898989] text-center py-3.5">${data.weight}</td>
            <td class="text-[#898989] text-center py-3.5">${data.height}</td>
            <td class="text-[#898989] text-center py-3.5">${data.head_circumference}</td>
            <td class="text-[#898989] text-center py-3.5">
              <span class="bg-[#28A745] font-bold text-sm text-white px-5 py-[6px] rounded-lg">
                ${nutritionConclusion(data)}
              </span>
            </td>
            <td class="text-[#898989] text-center py-3.5">
              <div class="w-full flex justify-center gap-x-2">
                <button onclick=editBabyData(${data.id}) class="relative bg-[#FFC839] font-bold text-sm text-white w-[30px] h-[30px] rounded-lg">
                  <svg class="absolute top-1/2 left-1/2 translate-x-[-48%] translate-y-[-48%]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g filter="url(#filter0_d_112_2077)">
                      <path d="M11.3465 0.586087L9.83235 2.10023L13.8993 6.16716L15.4134 4.65301C16.1955 3.87091 16.1955 2.60391 15.4134 1.82181L14.1808 0.586087C13.3987 -0.196013 12.1317 -0.196013 11.3496 0.586087H11.3465ZM9.12534 2.80725L1.83303 10.1027C1.50767 10.428 1.26991 10.8316 1.13852 11.2727L0.0310672 15.0362C-0.0471429 15.3021 0.0248104 15.5868 0.218771 15.7807C0.412732 15.9747 0.697417 16.0467 0.960203 15.9716L4.72367 14.8641C5.16478 14.7327 5.56834 14.495 5.89369 14.1696L13.1923 6.87418L9.12534 2.80725Z" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_112_2077" x="0" y="-0.000488281" width="18" height="18.0015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_112_2077"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_112_2077" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </button>
                <button onclick=deleteBabyData(${data.id}) class="relative bg-[#E23747] font-bold text-sm text-white w-[30px] h-[30px] rounded-lg">
                  <svg class="absolute top-1/2 left-1/2 translate-x-[-45%] translate-y-[-45%]" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 22" fill="none">
                    <g filter="url(#filter0_d_112_2075)">
                      <path d="M4.82857 1.48908L4.57143 1.99979H1.14286C0.510714 1.99979 0 2.51051 0 3.14265C0 3.77479 0.510714 4.28551 1.14286 4.28551H14.8571C15.4893 4.28551 16 3.77479 16 3.14265C16 2.51051 15.4893 1.99979 14.8571 1.99979H11.4286L11.1714 1.48908C10.9786 1.09979 10.5821 0.856934 10.15 0.856934H5.85C5.41786 0.856934 5.02143 1.09979 4.82857 1.48908ZM14.8571 5.42836H1.14286L1.9 17.5355C1.95714 18.4391 2.70714 19.1426 3.61071 19.1426H12.3893C13.2929 19.1426 14.0429 18.4391 14.1 17.5355L14.8571 5.42836Z" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_112_2075" x="0" y="0.856934" width="18" height="20.2856" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="1"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_112_2075"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_112_2075" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `
      ))
    } else {
      fetchInfoElement.innerHTML = '<span>Data Anak Kosong!</span>'
    }


  } catch (error) {
    fetchInfoElement.classList.toggle('hidden');
    fetchInfoElement.innerHTML = '<span class="text-red-500">Terjadi Error saat Fetching data!</span>'
  }
}

// Jalankan main function
loadBabyData();

// CRUD
// Create
async function createBabyData(props){
  try{
    const { userId, newBabyData } = props
  
    const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas`, {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newBabyData)
    })
  
    const data = await response.json();
  
    return data;
  } catch (err){
    console.log(err);
  }
}

// Add
function addBabyData(){
  const addModalContainer = document.getElementById('add_modal_container');
  const addModalForm = document.getElementById('add_modal_form');
  const closeAddModalBtn = document.getElementById('close_add_modal');
  // Buka modal
  addModalContainer.style.display = "block";

  // Tutup modal
  closeAddModalBtn.addEventListener('click', () => {
    addModalContainer.style.display = "none";
  })

  function getData(){
    const tanggalPertumbuhan = document.getElementById('tanggal_pertumbuhan').value;
    const berat = document.getElementById('berat').value;
    const tinggi = document.getElementById('tinggi').value;
    const lingkarKepala = document.getElementById('lingkar_kepala').value;

    return {
      tanggalPertumbuhan, berat, tinggi, lingkarKepala
    }
  }

  addModalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { tanggalPertumbuhan, berat, tinggi, lingkarKepala } = getData()
    const userId = await getIdFromUsernameLocalStorage();

    const newBabyData = {
      userId: userId,
      weight: berat,
      height: tinggi,
      head_circumference: lingkarKepala,
      growth_date: convertDateFormat(tanggalPertumbuhan)
    }

    const sendProp = { userId, newBabyData }
    const isSuccess = await createBabyData(sendProp);

    if(isSuccess){
      alert(`Berhasil menambah data bayi`);
      window.location.reload();
    } else {
      alert('Gagal menambah data bayi')
    }
  })
}

// Update
async function updateBabyData(props){
  try {
    const { userId, newBabyData, id } = props

    const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas/${id}`, {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(newBabyData)
    })

    const data = await response.json();

    return data;
  } catch (err){
    console.log(err);
  }
}

// Edit
function editBabyData(id){
  putData(id);

  const editModalContainer = document.getElementById('edit_modal_container');
  const editModalForm = document.getElementById('edit_modal_form');
  const closeEditModalBtn = document.getElementById('close_edit_modal');
  // Buka modal
  editModalContainer.style.display = "block";
  document.getElementById('edit_tanggal_pertumbuhan').value = 'Loading...';
  document.getElementById('edit_berat').value = 'Loading...';
  document.getElementById('edit_tinggi').value = 'Loading...';
  document.getElementById('edit_lingkar_kepala').value = 'Loading...';

  // Tutup modal
  closeEditModalBtn.addEventListener('click', () => {
    editModalContainer.style.display = "none";
  })

  async function putData(id){
    const userId = await getIdFromUsernameLocalStorage()

    try{
      const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas/${id}`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      })
    
      const data = await response.json();
      const { growth_date, weight, height, head_circumference } = data

      document.getElementById('edit_tanggal_pertumbuhan').value = convertDateFormat(growth_date);
      document.getElementById('edit_berat').value = weight;
      document.getElementById('edit_tinggi').value = height;
      document.getElementById('edit_lingkar_kepala').value = head_circumference;
    } catch (err){
      console.log(err);
    }
  }

  function getEditData(){
    const tanggalPertumbuhan = document.getElementById('edit_tanggal_pertumbuhan').value;
    const berat = document.getElementById('edit_berat').value;
    const tinggi = document.getElementById('edit_tinggi').value;
    const lingkarKepala = document.getElementById('edit_lingkar_kepala').value;

    return {
      tanggalPertumbuhan, berat, tinggi, lingkarKepala
    }
  }

  editModalForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { tanggalPertumbuhan, berat, tinggi, lingkarKepala } = getEditData()
    const userId = await getIdFromUsernameLocalStorage();

    const newBabyData = {
      userId: userId,
      weight: berat,
      height: tinggi,
      head_circumference: lingkarKepala,
      growth_date: convertDateFormat(tanggalPertumbuhan)
    }

    const sendProp = { userId, newBabyData, id }
    const isSuccess = await updateBabyData(sendProp)

    if(isSuccess){
      alert(`Berhasil mengubah data bayi`);
      window.location.reload();
    } else {
      alert('Gagal mengubah data bayi')
    }
  })
}

// Delete
async function deleteBabyData(id){
  // Tampilkan modal konfirmasi
  const isConfirmed = window.confirm('Apakah Anda yakin ingin menghapus data bayi ini?');

  if(isConfirmed){
    try{
      const userId = await getIdFromUsernameLocalStorage();
    
      const response = await fetch(`https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas/${id}`, {
        method: 'DELETE',
        headers: {'content-type':'application/json'},
      })
    
      if (response.ok) {
        alert(`Berhasil menghapus data bayi dengan id: ${id}`);
        window.location.reload();
      } else {
        alert('Gagal menghapus data bayi')
      }
    } catch (err){
      console.log(err);
    }
  }
}

// Utils
function convertDateFormat(inputDate) {
  const parts = inputDate.split('-');

  if (parts.length === 3) {
    const newDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
    return newDate;
  } else {
    return 'Format tanggal tidak valid';
  }
}

function convertHumanReadDateFormat(dateString) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const parts = dateString.split('-');
  if (parts.length === 3) {
    const day = parts[0];
    const month = months[parseInt(parts[1]) - 1];
    const year = parts[2];

    return `${day} ${month} ${year}`;
  } else {
    return 'Format tanggal tidak valid';
  }
}

function calculateNutrition(props){
  const { weight, height } = props

  function weightWithAge(){
    return weight / 0.6
  }

  return 'On Progress'
}

function nutritionConclusion(props){
  const { weight, height } = props

  return 'Baik'
}

function calculateBabyAgeInMonths(birthDate) {
  const birthDateParts = birthDate.split('-');
  const babyBirthDate = new Date(
    parseInt(birthDateParts[2], 10),
    parseInt(birthDateParts[1], 10) - 1,
    parseInt(birthDateParts[0], 10)
  );

  const currentDate = new Date();

  const ageInMilliseconds = currentDate - babyBirthDate;

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
  const ageInMonths = ageInMilliseconds / millisecondsInMonth;

  return ageInMonths.toFixed(1);
}