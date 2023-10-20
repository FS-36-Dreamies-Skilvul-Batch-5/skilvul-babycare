const userFullName = document.getElementById('user_full_name');
const babyName = document.getElementById('baby_name');
const dateEl = document.getElementById('date_el');
const lastUpdatedDateEl = document.getElementById('last_updated_el');

// Set up user dashboard
userFullName.innerText = localStorage.getItem('name');
babyName.innerText = localStorage.getItem('baby_name');
dateEl.innerText = getDate()

// Panggil data dari Local Storage
const userId = localStorage.getItem('id');
const babyAge = calculateBabyAgeInMonths(localStorage.getItem('baby_birth'));
const babyGender = localStorage.getItem('gender');

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
  const babyDatas = await getBabyDataFromUserId(userId);
  const latestData = babyDatas[babyDatas.length - 1];

  lastUpdatedDateEl.innerText = 'Terakhir diupdate ' + convertHumanReadDateFormat(latestData.growth_date);

  document.querySelector('.berat__badan').innerHTML = latestData.weight;
  document.querySelector('.tinggi__badan').innerHTML = latestData.height;
  document.querySelector('.lingkar__kepala').innerHTML = latestData.head_circumference;
  document.getElementById('latest_date').innerHTML = convertHumanReadDateFormat(latestData.growth_date);
  document.getElementById('nutrition_conclusion').innerHTML = getNutritionStatus(latestData).nutritionConclusion()
  document.getElementById('nutrition_bg').style.backgroundColor = getBgColorBasedOnNutrition(getNutritionStatus(latestData).nutritionConclusion())
  document.getElementById('nutrition_icon').innerHTML = getIconBasedOnNutrition(getNutritionStatus(latestData).nutritionConclusion())
}

mainFunction();

// Utils
function getDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = [
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
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${day} ${month} ${year}`;
}

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

function getNutritionStatus(props) {
  const {
    weight,
    height,
    head_circumference
  } = props;

  const bbuTbuLkStandartReference = {
    female: [{
        ageInMonth: 0,
        bbu: {
          min: 2.8,
          median: 3.2,
          plus: 3.7
        },
        tbu: {
          min: 47.3,
          median: 49.1,
          plus: 51
        },
      },
      {
        ageInMonth: 1,
        bbu: {
          min: 3.6,
          median: 4.2,
          plus: 4.8
        },
        tbu: {
          min: 51.7,
          median: 53.7,
          plus: 55.6
        },
      },
      {
        ageInMonth: 2,
        bbu: {
          min: 4.5,
          median: 5.1,
          plus: 5.8
        },
        tbu: {
          min: 55,
          median: 57.1,
          plus: 59.1
        },
      },
      {
        ageInMonth: 3,
        bbu: {
          min: 5.2,
          median: 5.8,
          plus: 6.6
        },
        tbu: {
          min: 57.7,
          median: 59.8,
          plus: 61.9
        },
      },
      {
        ageInMonth: 4,
        bbu: {
          min: 5.7,
          median: 6.4,
          plus: 7.3
        },
        tbu: {
          min: 59.9,
          median: 62.1,
          plus: 64.3
        },
      },
      {
        ageInMonth: 5,
        bbu: {
          min: 6.1,
          median: 6.9,
          plus: 7.8
        },
        tbu: {
          min: 61.8,
          median: 64,
          plus: 66.2
        },
      },
      {
        ageInMonth: 6,
        bbu: {
          min: 6.5,
          median: 7.3,
          plus: 8.2
        },
        tbu: {
          min: 63.5,
          median: 65.7,
          plus: 68
        },
      },
      {
        ageInMonth: 7,
        bbu: {
          min: 6.8,
          median: 7.6,
          plus: 8.6
        },
        tbu: {
          min: 65,
          median: 67.3,
          plus: 69.6
        },
      },
      {
        ageInMonth: 8,
        bbu: {
          min: 7,
          median: 7.9,
          plus: 9
        },
        tbu: {
          min: 66.4,
          median: 68.7,
          plus: 71.1
        },
      },
      {
        ageInMonth: 9,
        bbu: {
          min: 7.3,
          median: 8.2,
          plus: 9.3
        },
        tbu: {
          min: 67.7,
          median: 70.1,
          plus: 72.6
        },
      },
      {
        ageInMonth: 10,
        bbu: {
          min: 7.5,
          median: 8.5,
          plus: 9.6
        },
        tbu: {
          min: 69,
          median: 71.5,
          plus: 73.9
        },
      },
      {
        ageInMonth: 11,
        bbu: {
          min: 7.7,
          median: 8.7,
          plus: 9.9
        },
        tbu: {
          min: 70.3,
          median: 72.8,
          plus: 75.3
        },
      },
      {
        ageInMonth: 12,
        bbu: {
          min: 7.9,
          median: 8.9,
          plus: 10.1
        },
        tbu: {
          min: 71.4,
          median: 74,
          plus: 76.6
        },
      },
      {
        ageInMonth: 13,
        bbu: {
          min: 8.1,
          median: 9.2,
          plus: 10.4
        },
        tbu: {
          min: 72.6,
          median: 75.2,
          plus: 77.8
        },
      },
      {
        ageInMonth: 14,
        bbu: {
          min: 8.3,
          median: 9.4,
          plus: 10.6
        },
        tbu: {
          min: 73.7,
          median: 76.4,
          plus: 79.1
        },
      },
      {
        ageInMonth: 15,
        bbu: {
          min: 8.5,
          median: 9.6,
          plus: 10.9
        },
        tbu: {
          min: 74.8,
          median: 77.5,
          plus: 80.2
        },
      },
      {
        ageInMonth: 16,
        bbu: {
          min: 8.7,
          median: 9.8,
          plus: 11.1
        },
        tbu: {
          min: 75.8,
          median: 78.6,
          plus: 81.4
        },
      },
      {
        ageInMonth: 17,
        bbu: {
          min: 8.9,
          median: 10,
          plus: 11.4
        },
        tbu: {
          min: 76.8,
          median: 79.7,
          plus: 82.5
        },
      },
      {
        ageInMonth: 18,
        bbu: {
          min: 9.1,
          median: 10.2,
          plus: 11.6
        },
        tbu: {
          min: 77.8,
          median: 80.7,
          plus: 83.6
        },
      },
      {
        ageInMonth: 19,
        bbu: {
          min: 9.2,
          median: 10.4,
          plus: 11.8
        },
        tbu: {
          min: 78.8,
          median: 81.7,
          plus: 84.7
        },
      },
      {
        ageInMonth: 20,
        bbu: {
          min: 9.4,
          median: 10.6,
          plus: 12.1
        },
        tbu: {
          min: 79.7,
          median: 82.7,
          plus: 85.7
        },
      },
      {
        ageInMonth: 21,
        bbu: {
          min: 9.6,
          median: 10.9,
          plus: 12.3
        },
        tbu: {
          min: 80.6,
          median: 83.7,
          plus: 86.7
        },
      },
      {
        ageInMonth: 22,
        bbu: {
          min: 9.8,
          median: 11.1,
          plus: 12.5
        },
        tbu: {
          min: 81.5,
          median: 84.6,
          plus: 87.7
        },
      },
      {
        ageInMonth: 23,
        bbu: {
          min: 10,
          median: 11.3,
          plus: 12.8
        },
        tbu: {
          min: 82.3,
          median: 85.5,
          plus: 88.7
        },
      },
      {
        ageInMonth: 24,
        bbu: {
          min: 10.2,
          median: 11.5,
          plus: 13
        },
        tbu: {
          min: 83.2,
          median: 86.4,
          plus: 89.6
        },
      },
    ],
    male: [{
        ageInMonth: 0,
        bbu: {
          min: 2.9,
          median: 3.3,
          plus: 4.4
        },
        tbu: {
          min: 48.0,
          median: 49.9,
          plus: 51.8
        },
      },
      {
        ageInMonth: 1,
        bbu: {
          min: 3.9,
          median: 4.5,
          plus: 5.1
        },
        tbu: {
          min: 52.8,
          median: 52.7,
          plus: 56.7
        },
      },
      {
        ageInMonth: 2,
        bbu: {
          min: 4.9,
          median: 5.6,
          plus: 6.3
        },
        tbu: {
          min: 56.4,
          median: 58.4,
          plus: 60.4
        },
      },
      {
        ageInMonth: 3,
        bbu: {
          min: 5.7,
          median: 6.4,
          plus: 7.2
        },
        tbu: {
          min: 59.4,
          median: 61.4,
          plus: 63.5
        },
      },
      {
        ageInMonth: 4,
        bbu: {
          min: 6.2,
          median: 7.0,
          plus: 7.8
        },
        tbu: {
          min: 61.8,
          median: 63.9,
          plus: 66.0
        },
      },
      {
        ageInMonth: 5,
        bbu: {
          min: 6.7,
          median: 7.5,
          plus: 8.4
        },
        tbu: {
          min: 63.8,
          median: 65.9,
          plus: 68.0
        },
      },
      {
        ageInMonth: 6,
        bbu: {
          min: 6.9,
          median: 7.9,
          plus: 8.6
        },
        tbu: {
          min: 65.5,
          median: 67.6,
          plus: 69.8
        },
      },
      {
        ageInMonth: 7,
        bbu: {
          min: 7.4,
          median: 8.3,
          plus: 9.2
        },
        tbu: {
          min: 67.0,
          median: 69.2,
          plus: 71.3
        },
      },
      {
        ageInMonth: 8,
        bbu: {
          min: 7.7,
          median: 8.6,
          plus: 9.6
        },
        tbu: {
          min: 68.4,
          median: 70.6,
          plus: 72.8
        },
      },
      {
        ageInMonth: 9,
        bbu: {
          min: 8.0,
          median: 8.9,
          plus: 9.9
        },
        tbu: {
          min: 69.7,
          median: 72.0,
          plus: 74.2
        },
      },
      {
        ageInMonth: 10,
        bbu: {
          min: 8.2,
          median: 9.2,
          plus: 10.2
        },
        tbu: {
          min: 71.0,
          median: 73.3,
          plus: 75.6
        },
      },
      {
        ageInMonth: 11,
        bbu: {
          min: 8.4,
          median: 9.4,
          plus: 10.5
        },
        tbu: {
          min: 72.2,
          median: 74.5,
          plus: 76.9
        },
      },
      {
        ageInMonth: 12,
        bbu: {
          min: 8.6,
          median: 9.6,
          plus: 10.8
        },
        tbu: {
          min: 73.4,
          median: 75.7,
          plus: 78.1
        },
      },
      {
        ageInMonth: 13,
        bbu: {
          min: 8.8,
          median: 9.9,
          plus: 11.0
        },
        tbu: {
          min: 74.5,
          median: 76.9,
          plus: 79.3
        },
      },
      {
        ageInMonth: 14,
        bbu: {
          min: 9.0,
          median: 10.1,
          plus: 11.3
        },
        tbu: {
          min: 75.6,
          median: 78.0,
          plus: 80.5
        },
      },
      {
        ageInMonth: 15,
        bbu: {
          min: 9.2,
          median: 10.3,
          plus: 11.5
        },
        tbu: {
          min: 76.6,
          median: 79.1,
          plus: 81.7
        },
      },
      {
        ageInMonth: 16,
        bbu: {
          min: 9.4,
          median: 10.5,
          plus: 11.7
        },
        tbu: {
          min: 77.6,
          median: 80.2,
          plus: 82.8
        },
      },
      {
        ageInMonth: 17,
        bbu: {
          min: 9.6,
          median: 10.7,
          plus: 12.0
        },
        tbu: {
          min: 78.6,
          median: 81.2,
          plus: 83.9
        },
      },
      {
        ageInMonth: 18,
        bbu: {
          min: 9.8,
          median: 10.9,
          plus: 12.2
        },
        tbu: {
          min: 79.6,
          median: 82.3,
          plus: 85.0
        },
      },
      {
        ageInMonth: 19,
        bbu: {
          min: 10.0,
          median: 11.1,
          plus: 12.5
        },
        tbu: {
          min: 80.5,
          median: 83.2,
          plus: 86.0
        },
      },
      {
        ageInMonth: 20,
        bbu: {
          min: 10.1,
          median: 11.3,
          plus: 12.7
        },
        tbu: {
          min: 81.4,
          median: 84.2,
          plus: 87.0
        },
      },
      {
        ageInMonth: 21,
        bbu: {
          min: 10.3,
          median: 11.5,
          plus: 12.9
        },
        tbu: {
          min: 82.3,
          median: 85.1,
          plus: 88.0
        },
      },
      {
        ageInMonth: 22,
        bbu: {
          min: 10.5,
          median: 11.8,
          plus: 13.2
        },
        tbu: {
          min: 83.1,
          median: 86.0,
          plus: 89.0
        },
      },
      {
        ageInMonth: 23,
        bbu: {
          min: 10.7,
          median: 12.0,
          plus: 13.4
        },
        tbu: {
          min: 83.9,
          median: 86.9,
          plus: 89.9
        },
      },
      {
        ageInMonth: 24,
        bbu: {
          min: 10.8,
          median: 12.2,
          plus: 13.6
        },
        tbu: {
          min: 84.8,
          median: 87.8,
          plus: 90.9
        },
      },
    ],
  };

  const nutritionStandartReference = {
    female: [{
        height: 45.0,
        bbu_tbu: {
          min: 2.3,
          median: 2.5,
          plus: 2.7
        },
      },
      {
        height: 47.0,
        bbu_tbu: {
          min: 2.6,
          median: 2.8,
          plus: 3.1
        },
      },
      {
        height: 49.0,
        bbu_tbu: {
          min: 2.9,
          median: 3.2,
          plus: 3.5
        },
      },
      {
        height: 51.0,
        bbu_tbu: {
          min: 3.3,
          median: 3.6,
          plus: 3.9
        },
      },
      {
        height: 53.0,
        bbu_tbu: {
          min: 3.7,
          median: 4.0,
          plus: 4.4
        },
      },
      {
        height: 55.0,
        bbu_tbu: {
          min: 4.2,
          median: 4.5,
          plus: 5.0
        },
      },
      {
        height: 57.0,
        bbu_tbu: {
          min: 4.6,
          median: 5.1,
          plus: 5.6
        },
      },
      {
        height: 59.0,
        bbu_tbu: {
          min: 5.1,
          median: 5.6,
          plus: 6.2
        },
      },
      {
        height: 61.0,
        bbu_tbu: {
          min: 5.6,
          median: 6.1,
          plus: 6.7
        },
      },
      {
        height: 63.0,
        bbu_tbu: {
          min: 6.0,
          median: 6.6,
          plus: 7.3
        },
      },
      {
        height: 65.0,
        bbu_tbu: {
          min: 6.5,
          median: 7.1,
          plus: 7.8
        },
      },
      {
        height: 67.0,
        bbu_tbu: {
          min: 6.9,
          median: 7.5,
          plus: 8.3
        },
      },
      {
        height: 69.0,
        bbu_tbu: {
          min: 7.3,
          median: 8.0,
          plus: 8.7
        },
      },
      {
        height: 71.0,
        bbu_tbu: {
          min: 7.7,
          median: 8.4,
          plus: 9.2
        },
      },
      {
        height: 73.0,
        bbu_tbu: {
          min: 8.0,
          median: 8.8,
          plus: 9.6
        },
      },
      {
        height: 75.0,
        bbu_tbu: {
          min: 8.4,
          median: 9.1,
          plus: 10.0
        },
      },
      {
        height: 77.0,
        bbu_tbu: {
          min: 8.7,
          median: 9.5,
          plus: 10.4
        },
      },
      {
        height: 79.0,
        bbu_tbu: {
          min: 9.1,
          median: 9.9,
          plus: 10.8
        },
      },
    ],
    male: [{
        height: 45.0,
        bbu_tbu: {
          min: 2.2,
          median: 2.4,
          plus: 2.7
        },
      },
      {
        height: 47.0,
        bbu_tbu: {
          min: 2.5,
          median: 2.8,
          plus: 3.0
        },
      },
      {
        height: 49.0,
        bbu_tbu: {
          min: 2.9,
          median: 3.1,
          plus: 3.4
        },
      },
      {
        height: 51.0,
        bbu_tbu: {
          min: 3.3,
          median: 3.6,
          plus: 3.9
        },
      },
      {
        height: 53.0,
        bbu_tbu: {
          min: 3.7,
          median: 4.0,
          plus: 4.4
        },
      },
      {
        height: 55.0,
        bbu_tbu: {
          min: 4.2,
          median: 4.5,
          plus: 5.0
        },
      },
      {
        height: 57.0,
        bbu_tbu: {
          min: 4.7,
          median: 5.1,
          plus: 5.6
        },
      },
      {
        height: 59.0,
        bbu_tbu: {
          min: 5.3,
          median: 5.7,
          plus: 6.2
        },
      },
      {
        height: 61.0,
        bbu_tbu: {
          min: 5.8,
          median: 6.3,
          plus: 6.8
        },
      },
      {
        height: 63.0,
        bbu_tbu: {
          min: 6.2,
          median: 6.8,
          plus: 7.4
        },
      },
      {
        height: 65.0,
        bbu_tbu: {
          min: 6.7,
          median: 7.3,
          plus: 7.9
        },
      },
      {
        height: 67.0,
        bbu_tbu: {
          min: 7.1,
          median: 7.7,
          plus: 8.4
        },
      },
      {
        height: 69.0,
        bbu_tbu: {
          min: 7.6,
          median: 8.2,
          plus: 8.9
        },
      },
      {
        height: 71.0,
        bbu_tbu: {
          min: 8.0,
          median: 8.6,
          plus: 9.4
        },
      },
      {
        height: 73.0,
        bbu_tbu: {
          min: 8.4,
          median: 9.1,
          plus: 9.9
        },
      },
      {
        height: 75.0,
        bbu_tbu: {
          min: 8.8,
          median: 9.5,
          plus: 10.3
        },
      },
    ],
  };

  // Tentukan standart referensi berdasarkan gender
  let calcReference, nutritionReference;
  if (babyGender !== "male") {
    calcReference = bbuTbuLkStandartReference.female;
    nutritionReference = nutritionStandartReference.female;
  } else {
    calcReference = bbuTbuLkStandartReference.male;
    nutritionReference = nutritionStandartReference.male;
  }

  // Sesuaikan parameter dengan usia bayi
  const calcParameter = calcReference.find((ref) => ref.ageInMonth == babyAge);
  // Sesuikan parameter dengan tinggi / panjang bayi
  const calcNutritionParameter = findNearestObject(height);

  function findNearestObject(value) {
    let closestObject = null;
    let closestDifference = Infinity;

    nutritionReference.forEach((item) => {
      const height = item.height;
      const difference = Math.abs(height - value);

      if (difference < closestDifference) {
        closestDifference = difference;
        closestObject = item;
      }
    });

    return closestObject;
  }

  function nutritionClassification(nutrisionResult) {
    if (nutrisionResult < -3) {
      return "Gizi Buruk";
    } else if (nutrisionResult >= -3 && nutrisionResult <= -2) {
      return "Gizi Kurang";
    } else if (nutrisionResult >= -2 && nutrisionResult <= 1) {
      return "Gizi Baik";
    } else if (nutrisionResult >= 1 && nutrisionResult <= 2) {
      return "Beresiko Gizi Lebih";
    } else if (nutrisionResult >= 2 && nutrisionResult <= 3) {
      return "Gizi Lebih";
    } else if (nutrisionResult >= 3) {
      return "Obesitas";
    }
  }

  function weightClassification(weightResult) {
    if (weightResult < -3) {
      return "Berat badan sangat kurang";
    } else if (weightResult >= -3 && weightResult <= -2) {
      return "Berat badan kurang";
    } else if (weightResult >= -2 && weightResult <= 1) {
      return "Berat badan normal";
    } else if (weightResult > 1) {
      return "Resiko berat badan lebih";
    }
  }

  function heightClassification(heightResult) {
    if (heightResult < -3) {
      return "Sangat pendek";
    } else if (heightResult >= -3 && heightResult <= -2) {
      return "Pendek";
    } else if (heightResult >= -2 && heightResult <= 3) {
      return "Normal";
    } else if (heightResult > 3) {
      return "Tinggi";
    }
  }

  function weightWithAge() {
    if (weight < calcParameter.bbu.median) {
      const result =
        (weight - calcParameter.bbu.median) /
        (calcParameter.bbu.median - calcParameter.bbu.min);
      return weightClassification(result);
    } else {
      const result =
        (weight - calcParameter.bbu.median) /
        (calcParameter.bbu.plus - calcParameter.bbu.median);
      return weightClassification(result);
    }
  }

  function heightWithAge() {
    if (height < calcParameter.tbu.median) {
      const result =
        (height - calcParameter.tbu.median) /
        (calcParameter.tbu.median - calcParameter.tbu.min);
      return heightClassification(result) + result;
    } else {
      const result =
        (height - calcParameter.tbu.median) /
        (calcParameter.tbu.plus - calcParameter.tbu.median);
      return heightClassification(result) + result;
    }
  }

  // function headCircumference() {
  //   if (head_circumference > calcParameter.lk) {
  //     return "Lebih besar";
  //   } else {
  //     return "Lebih kecil";
  //   }
  // }

  function nutritionConclusion() {
    if (weight < calcNutritionParameter.bbu_tbu.median) {
      const result =
        (weight - calcNutritionParameter.bbu_tbu.median) /
        (calcNutritionParameter.bbu_tbu.median -
          calcNutritionParameter.bbu_tbu.min);
      return nutritionClassification(result);
    } else {
      const result =
        (weight - calcNutritionParameter.bbu_tbu.median) /
        (calcNutritionParameter.bbu_tbu.plus -
          calcNutritionParameter.bbu_tbu.median);
      return nutritionClassification(result);
    }
  }

  return {
    weightWithAge,
    heightWithAge,
    nutritionConclusion,
  };
}

function calculateBabyAgeInMonths(birthDate) {
  const birthDateParts = birthDate.split("-");
  const babyBirthDate = new Date(
    parseInt(birthDateParts[2], 10),
    parseInt(birthDateParts[1], 10) - 1,
    parseInt(birthDateParts[0], 10)
  );

  const currentDate = new Date();

  const ageInMilliseconds = currentDate - babyBirthDate;

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
  const ageInMonths = ageInMilliseconds / millisecondsInMonth;

  return Math.floor(ageInMonths);
}

function getIconBasedOnNutrition(value){
  const checkMark = `
  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
  `
  const xMark = `
    <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
  `

  const exclamationMark = `
    <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 64 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
  `

  if (value == 'Gizi Baik') {
    return checkMark;
  } else if (value == 'Gizi Kurang' || value == 'Beresiko Gizi Lebih') {
    return exclamationMark;
  } else {
    return xMark;
  }
}

function getBgColorBasedOnNutrition(value){
  if (value == 'Gizi Baik') {
    return "#28A745";
  } else if (value == 'Gizi Kurang' || value == 'Beresiko Gizi Lebih') {
    return "#FFC839";
  } else {
    return "#E23747";
  }
}