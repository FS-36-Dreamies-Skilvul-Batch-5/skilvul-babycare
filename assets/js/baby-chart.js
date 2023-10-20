const userIdFromHTML = localStorage.getItem('id');
let babyDatasForChart = [];

async function getBabyDataFromUserIdForChart(userId) {
  try {
    const response = await fetch(
      `https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

function calculateBabyAgeInMonths(currentDate) {
  const birthDate = localStorage.getItem('baby_birth');
  const birthDateParts = birthDate.split("-");
  const babyBirthDate = new Date(
    parseInt(birthDateParts[2], 10),
    parseInt(birthDateParts[1], 10) - 1,
    parseInt(birthDateParts[0], 10)
  );

  const currentDateParts = currentDate.split("-");
  const currentAge = new Date(
    parseInt(currentDateParts[2], 10),
    parseInt(currentDateParts[1], 10) - 1,
    parseInt(currentDateParts[0], 10)
  );

  const ageInMilliseconds = currentAge.getTime() - babyBirthDate.getTime();

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
  const ageInMonths = ageInMilliseconds / millisecondsInMonth;

  return Math.floor(ageInMonths);
}

async function fetchBabyDatas(){
  const responseData = await getBabyDataFromUserIdForChart(userIdFromHTML);
  // babyDatasForChart = 
  const weightValue = responseData.map(item => parseFloat(item.weight))
  const heightValue = responseData.map(item => parseFloat(item.height))
  const headCircumferenceValue = responseData.map(item => parseFloat(item.head_circumference))
  const ageValue = responseData.map(item => calculateBabyAgeInMonths(item.growth_date))
  
  return {weightValue, heightValue, headCircumferenceValue, ageValue}
}

// Chart
async function drawChart(){
  const ctxWeight = document.getElementById('weight_chart');
  const ctxHeight = document.getElementById('height_chart');
  const ctxHeadC = document.getElementById('headc_chart');

  const { weightValue, heightValue, headCircumferenceValue, ageValue } = await fetchBabyDatas()

  new Chart(ctxWeight, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Berat Badan Anak',
        data: weightValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctxHeight, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Tinggi Badan Anak',
        data: heightValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  new Chart(ctxHeadC, {
    type: 'line',
    data: {
      labels: ageValue,
      datasets: [{
        label: 'Lingkar Kepala Anak',
        data: headCircumferenceValue,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

drawChart()

const chartPilihan = document.getElementById('chart_pilihan');
function getNamaChart(input){
  const ctxWeight = document.getElementById('weight_chart');
  const ctxHeight = document.getElementById('height_chart');
  const ctxHeadC = document.getElementById('headc_chart');

  if(input == 'berat_badan'){
    chartPilihan.innerText = 'Berat Badan sesuai Usia';
    ctxWeight.style.display = "block";
    ctxHeight.style.display = "none";
    ctxHeadC.style.display = "none";
  } else if(input == 'tinggi_badan'){
    chartPilihan.innerText = 'Tinggi Badan sesuai Usia';
    ctxWeight.style.display = "none";
    ctxHeight.style.display = "block";
    ctxHeadC.style.display = "none";
  } else{
    chartPilihan.innerText = 'Lingkar Kepala sesuai Usia';
    ctxWeight.style.display = "none";
    ctxHeight.style.display = "none";
    ctxHeadC.style.display = "block";
  }
}

let userChoice = 'Berat';
const chartChoices = document.querySelectorAll('.chart__choices');

chartChoices.forEach((choice) => (
  choice.addEventListener('click', function(){
    userChoice = choice.getAttribute("data-chart")
    getNamaChart(userChoice)
    drawChart(choice.getAttribute("data-chart"))
  })
))

const userId = localStorage.getItem('id');

async function getBabyDataFromUserId(userId) {
  try {
    const response = await fetch(
      `https://6525fe0567cfb1e59ce7cc6a.mockapi.io/api/users/${userId}/babydatas`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

async function mainFunction(){
  const lastUpdatedDateEl = document.getElementById('last_updated_el');

  const babyDatas = await getBabyDataFromUserId(userId);
  const latestData = babyDatas[babyDatas.length - 1];

  lastUpdatedDateEl.innerText = 'Terakhir diupdate ' + convertHumanReadDateFormat(latestData.growth_date);
  document.querySelector('.berat__badan').innerHTML = latestData.weight;
  document.querySelector('.tinggi__badan').innerHTML = latestData.height;
  document.querySelector('.lingkar__kepala').innerHTML = latestData.head_circumference;
}

mainFunction();

// Utils
function convertHumanReadDateFormat(dateString) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const parts = dateString.split("-");
  if (parts.length === 3) {
    const day = parts[0];
    const month = months[parseInt(parts[1]) - 1];
    const year = parts[2];

    return `${day} ${month} ${year}`;
  } else {
    return "Format tanggal tidak valid";
  }
}
// Define the chart types (assuming you have "berat," "tinggi," and "lingkar_kepala")
// const chartTypes = ["berat", "tinggi", "lingkar_kepala"];

// Loop through the chart choices and toggle classes
// chartChoices.forEach((choice) => {
//   const chartType = choice.getAttribute("href").split("chart=")[1];
//   if (urlParams === chartType) {
//     // Show the active class for the selected chart
//     choice.classList.add("active");
//   } else if (chartTypes.includes(chartType)) {
//     // Show the unactive class for other chart types
//     choice.classList.remove("active");
//   }
// });